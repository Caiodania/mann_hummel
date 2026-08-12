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
  Status,
  Submission,
} from './types'
import { api } from './api'

// Client-generated id for optimistic creates (a Project/Activity needs an id
// before the server round-trip). Prefer crypto.randomUUID() to make collisions
// effectively impossible; fall back to the timestamp+random scheme on older
// browsers / non-secure contexts.
export const uid = () =>
  globalThis.crypto?.randomUUID?.() ??
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
  // `day` accepts a weekday (set it), null (clear it → whole-week), or
  // undefined (leave it untouched).
  moveActivity: (
    id: string,
    week: string,
    projectId: string,
    day?: Activity['day'] | null,
  ) => void
  setActivityStatus: (id: string, status: Status) => void
  setProjectSpan: (id: string, startWeek: string, endWeek: string) => void
  reset: () => void
  /** Last sync/connection error shown to the user, or null. */
  syncError: string | null
  clearError: () => void
}

const StoreCtx = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const [syncError, setSyncError] = useState<string | null>(null)
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
            setSyncError(null)
          }
          return
        } catch {
          await new Promise((r) => setTimeout(r, 800))
        }
      }
      if (!cancelled) {
        setLoaded(true) // give up gracefully; polling continues
        setSyncError(
          'Não foi possível carregar os dados do servidor. Verifique se a API está no ar.',
        )
      }
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
      api
        .getState()
        .then((s) => {
          setState(s)
          setSyncError(null) // recovered
        })
        .catch(() =>
          setSyncError('Sem conexão com o servidor. Tentando novamente…'),
        )
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
      p.then((s) => {
        setState(s)
        setSyncError(null)
      })
        .catch((e) => {
          console.error(e)
          setSyncError(
            'Falha ao salvar a alteração no servidor. Suas mudanças podem não ter sido persistidas.',
          )
          // reconcile with authoritative state (rolls back the optimistic update)
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

    const doUpsertProject = (p: Project) => {
      optimistic((s) => ({
        ...s,
        projects: s.projects.some((x) => x.id === p.id)
          ? s.projects.map((x) => (x.id === p.id ? p : x))
          : [...s.projects, p],
      }))
      sync(api.upsertProject(p))
    }

    return {
      state,
      loaded,
      upsertProject: doUpsertProject,
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
            a.id === id
              ? {
                  ...a,
                  week,
                  projectId,
                  // undefined → keep existing day; null/weekday → apply it
                  ...(day === undefined ? {} : { day: day ?? undefined }),
                }
              : a,
          ),
        }))
        sync(api.moveActivity(id, { week, projectId, day }))
      },
      setActivityStatus: (id, status) => {
        const activity = state.activities.find((a) => a.id === id)
        optimistic((s) => ({
          ...s,
          activities: s.activities.map((a) =>
            a.id === id ? { ...a, status } : a,
          ),
        }))
        sync(api.setActivityStatus(id, status))

        // Cotação → Pipeline is one-way: once every activity on a project is
        // concluded, copy it into the Pipeline at "Agendado" (the original
        // stays in Cotação, its history untouched) — but only once.
        if (status === 'concluded' && activity) {
          const project = state.projects.find((p) => p.id === activity.projectId)
          const siblings = state.activities.filter(
            (a) => a.projectId === activity.projectId,
          )
          const allConcluded =
            siblings.length > 0 &&
            siblings.every((a) => a.id === id || a.status === 'concluded')
          if (project && !project.copiedToPipeline && allConcluded) {
            doUpsertProject({ ...project, copiedToPipeline: true })
            doUpsertProject({
              ...project,
              id: uid(),
              stage: 'Agendado',
              copiedToPipeline: false,
              submissions: [],
              nomination: undefined,
            })
          }
        }
      },
      setProjectSpan: (id, startWeek, endWeek) => {
        patchProject(id, (p) => ({ ...p, startWeek, endWeek }))
        sync(api.setSpan(id, startWeek, endWeek))
      },
      reset: () => {
        api.getState().then(setState).catch(() => {})
      },
      syncError,
      clearError: () => setSyncError(null),
    }
  }, [state, loaded, syncError])

  return <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreCtx)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
