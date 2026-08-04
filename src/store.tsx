import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type {
  Activity,
  AppState,
  Nomination,
  Project,
  Stage,
  Submission,
} from './types'
import { api } from './api'

export const uid = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`

const EMPTY: AppState = { members: [], projects: [], activities: [] }

interface Store {
  state: AppState
  loaded: boolean
  upsertProject: (p: Project) => void
  deleteProject: (id: string) => void
  moveStage: (id: string, stage: Stage) => void
  addSubmission: (projectId: string, s: Omit<Submission, 'n'>) => void
  updateSubmission: (projectId: string, s: Submission) => void
  removeSubmission: (projectId: string, n: number) => void
  setNomination: (projectId: string, nom: Nomination) => void
  upsertActivity: (a: Activity) => void
  deleteActivity: (id: string) => void
  moveActivity: (id: string, week: string, projectId: string, day?: Activity['day']) => void
  setProjectSpan: (id: string, startWeek: string, endWeek: string) => void
  reset: () => void
}

const StoreCtx = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const inFlight = useRef(0)

  // initial load — retry silently to ride out a cold dev-proxy / backend boot
  // (Prisma's first query can take a couple seconds). Polling keeps trying after.
  useEffect(() => {
    let cancelled = false
    const load = async () => {
      for (let attempt = 0; attempt < 15 && !cancelled; attempt++) {
        try {
          const s = await api.getState()
          if (!cancelled) {
            setState(s)
            setLoaded(true)
          }
          return
        } catch {
          await new Promise((r) => setTimeout(r, 800))
        }
      }
      if (!cancelled) setLoaded(true) // give up gracefully; polling continues
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  // poll for changes from other users (skip while a local mutation is pending)
  useEffect(() => {
    const tick = () => {
      if (inFlight.current > 0 || document.hidden) return
      api.getState().then(setState).catch(() => {})
    }
    const id = setInterval(tick, 8000)
    window.addEventListener('focus', tick)
    return () => {
      clearInterval(id)
      window.removeEventListener('focus', tick)
    }
  }, [])

  const store = useMemo<Store>(() => {
    // optimistic local update + authoritative server reconcile
    const optimistic = (fn: (s: AppState) => AppState) =>
      setState((s) => fn(s))
    const sync = (p: Promise<AppState>) => {
      inFlight.current++
      p.then((s) => setState(s))
        .catch((e) => {
          console.error(e)
          api.getState().then(setState).catch(() => {})
        })
        .finally(() => {
          inFlight.current--
        })
    }

    const patchProject = (id: string, fn: (p: Project) => Project) =>
      optimistic((s) => ({
        ...s,
        projects: s.projects.map((p) => (p.id === id ? fn(p) : p)),
      }))

    return {
      state,
      loaded,
      upsertProject: (p) => {
        optimistic((s) => ({
          ...s,
          projects: s.projects.some((x) => x.id === p.id)
            ? s.projects.map((x) => (x.id === p.id ? p : x))
            : [...s.projects, p],
        }))
        sync(api.upsertProject(p))
      },
      deleteProject: (id) => {
        optimistic((s) => ({
          ...s,
          projects: s.projects.filter((p) => p.id !== id),
          activities: s.activities.filter((a) => a.projectId !== id),
        }))
        sync(api.deleteProject(id))
      },
      moveStage: (id, stage) => {
        patchProject(id, (p) => ({ ...p, stage }))
        sync(api.moveStage(id, stage))
      },
      addSubmission: (projectId, s) => {
        patchProject(projectId, (p) => {
          const n = p.submissions.reduce((m, x) => Math.max(m, x.n), 0) + 1
          return { ...p, submissions: [...p.submissions, { ...s, n }] }
        })
        sync(api.addSubmission(projectId, s))
      },
      updateSubmission: (projectId, sub) => {
        patchProject(projectId, (p) => ({
          ...p,
          submissions: p.submissions.map((x) => (x.n === sub.n ? sub : x)),
        }))
        sync(api.updateSubmission(projectId, sub.n, sub))
      },
      removeSubmission: (projectId, n) => {
        patchProject(projectId, (p) => ({
          ...p,
          submissions: p.submissions
            .filter((x) => x.n !== n)
            .map((x, i) => ({ ...x, n: i + 1 })),
        }))
        sync(api.removeSubmission(projectId, n))
      },
      setNomination: (projectId, nom) => {
        patchProject(projectId, (p) => ({ ...p, nomination: nom }))
        sync(api.setNomination(projectId, nom))
      },
      upsertActivity: (a) => {
        optimistic((s) => ({
          ...s,
          activities: s.activities.some((x) => x.id === a.id)
            ? s.activities.map((x) => (x.id === a.id ? a : x))
            : [...s.activities, a],
        }))
        sync(api.upsertActivity(a))
      },
      deleteActivity: (id) => {
        optimistic((s) => ({
          ...s,
          activities: s.activities.filter((a) => a.id !== id),
        }))
        sync(api.deleteActivity(id))
      },
      moveActivity: (id, week, projectId, day) => {
        optimistic((s) => ({
          ...s,
          activities: s.activities.map((a) =>
            a.id === id ? { ...a, week, projectId, ...(day ? { day } : {}) } : a,
          ),
        }))
        sync(api.moveActivity(id, { week, projectId, day }))
      },
      setProjectSpan: (id, startWeek, endWeek) => {
        patchProject(id, (p) => ({ ...p, startWeek, endWeek }))
        sync(api.setSpan(id, startWeek, endWeek))
      },
      reset: () => {
        api.getState().then(setState).catch(() => {})
      },
    }
  }, [state, loaded])

  return <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreCtx)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
