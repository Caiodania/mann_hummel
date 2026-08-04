import { useMemo, useState, type ReactNode } from 'react'
import { useStore, uid } from '../store'
import { useWeekRail } from '../lib/useWeekRail'
import {
  ROLES,
  WEEKDAYS,
  type Activity,
  type Project,
  type Role,
  type Weekday,
} from '../types'
import { Avatar, Modal, RoleBadge } from './ui'
import { ProjectModal } from './ProjectModal'

const CAPACITY_DAYS = 5 // work-days per member per week before overload
const DAY_W = 106 // px per weekday sub-column

export function TeamLoadBoard() {
  const { state, moveActivity, upsertActivity, deleteActivity } = useStore()
  const coverKeys = useMemo(() => {
    const keys: string[] = []
    for (const p of state.projects) keys.push(p.startWeek, p.endWeek)
    for (const a of state.activities) keys.push(a.week)
    return keys
  }, [state.projects, state.activities])
  const { weeks, onScroll } = useWeekRail(2, 12, coverKeys)
  const [search, setSearch] = useState('')
  const [memberFilter, setMemberFilter] = useState<string[]>([])
  const [dragOver, setDragOver] = useState<string | null>(null)
  const [editing, setEditing] = useState<Activity | null>(null)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const memberById = useMemo(
    () => new Map(state.members.map((m) => [m.id, m])),
    [state.members],
  )
  const projectById = useMemo(
    () => new Map(state.projects.map((p) => [p.id, p])),
    [state.projects],
  )

  const q = search.trim().toLowerCase()
  const matches = (a: Activity) => {
    if (memberFilter.length && !memberFilter.includes(a.memberId)) return false
    if (!q) return true
    const p = projectById.get(a.projectId)
    return (
      a.title.toLowerCase().includes(q) ||
      (p?.code.toLowerCase().includes(q) ?? false) ||
      (p?.client.toLowerCase().includes(q) ?? false)
    )
  }

  const visibleActs = state.activities.filter(matches)

  // activities keyed by projectId|week|day (undated → SEG)
  const cellActs = useMemo(() => {
    const map = new Map<string, Activity[]>()
    for (const a of visibleActs) {
      const k = `${a.projectId}|${a.week}|${a.day ?? 'SEG'}`
      const arr = map.get(k)
      if (arr) arr.push(a)
      else map.set(k, [a])
    }
    return map
  }, [visibleActs])

  // ----- KPIs -----
  const totalDays = visibleActs.reduce((s, a) => s + a.loadDays, 0)
  const perMemberWeek = new Map<string, number>()
  for (const a of visibleActs) {
    const k = `${a.memberId}|${a.week}`
    perMemberWeek.set(k, (perMemberWeek.get(k) ?? 0) + a.loadDays)
  }
  const overloads = [...perMemberWeek.values()].filter(
    (d) => d > CAPACITY_DAYS,
  ).length
  const perMember = new Map<string, number>()
  for (const a of visibleActs)
    perMember.set(a.memberId, (perMember.get(a.memberId) ?? 0) + a.loadDays)
  let topMember = '—'
  let topDays = 0
  for (const [mid, d] of perMember)
    if (d > topDays) {
      topDays = d
      topMember = memberById.get(mid)?.name.split(' ')[0] ?? '—'
    }
  const allocatedHours = state.projects.reduce(
    (s, p) =>
      s +
      p.players
        .filter((pl) => !memberFilter.length || memberFilter.includes(pl.memberId))
        .reduce((ss, pl) => ss + pl.hours, 0),
    0,
  )

  const toggleMember = (id: string) =>
    setMemberFilter((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id],
    )

  const cols = `220px repeat(${weeks.length * WEEKDAYS.length}, ${DAY_W}px)`

  return (
    <>
      <div className="kpibar">
        <Kpi label="Atividades" value={visibleActs.length} />
        <Kpi label="Carga total" value={`${totalDays}`} unit="d" />
        <Kpi label="Horas alocadas" value={`${allocatedHours}`} unit="h" />
        <Kpi label="Sobrecargas" value={overloads} alert={overloads > 0} />
        <Kpi label="+ Carregado" value={topMember} unit={`${topDays}d`} />
      </div>

      <div className="toolbar">
        <div className="search">
          <span>🔍</span>
          <input
            placeholder="Buscar atividade, projeto ou cliente…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {state.members.map((m) => {
          const on = memberFilter.includes(m.id)
          return (
            <button
              key={m.id}
              className={`pill ${on ? 'on' : ''}`}
              style={on ? { background: m.color } : undefined}
              onClick={() => toggleMember(m.id)}
            >
              <span className="dot" style={{ background: m.color }} />
              {m.name.split(' ')[0]}
            </button>
          )
        })}
        {(memberFilter.length > 0 || q) && (
          <button
            className="btn sm"
            onClick={() => {
              setMemberFilter([])
              setSearch('')
            }}
          >
            Limpar filtros
          </button>
        )}
      </div>

      <div className="matrix-wrap" onScroll={onScroll}>
        <div className="matrix" style={{ gridTemplateColumns: cols }}>
          {/* corner spans both header rows */}
          <div
            className="mx-head mx-corner"
            style={{ gridRow: 'span 2' }}
          >
            Projeto
          </div>
          {/* row 1 — week labels, each spanning the 5 weekdays */}
          {weeks.map((w) => (
            <div
              key={w.key}
              className={`mx-week-head ${w.isToday ? 'today' : ''}`}
              style={{ gridColumn: `span ${WEEKDAYS.length}` }}
            >
              {w.label}
              <span className="head-date">
                {w.monday.toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                })}
              </span>
            </div>
          ))}
          {/* row 2 — weekday labels under each week */}
          {weeks.map((w) =>
            WEEKDAYS.map((d) => (
              <div
                key={`${w.key}-${d}`}
                className={`mx-day-head ${w.isToday ? 'today' : ''}`}
              >
                {d}
              </div>
            )),
          )}

          {/* body */}
          {state.projects.map((p) => (
            <Row key={p.id}>
              <button
                className="mx-proj"
                onClick={() => setEditingProject(p)}
                title="Editar projeto"
              >
                <span className="p-code">{p.code}</span>
                <span className="p-client">{p.client}</span>
                <div className="p-meta">
                  <span
                    className={`type-chip ${p.type === 'NPI' ? 'npi' : ''}`}
                  >
                    {p.type === 'NPI' ? `NPI ${p.npiSubtype ?? ''}` : 'STD / EP'}
                  </span>
                </div>
              </button>
              {weeks.map((w) =>
                WEEKDAYS.map((d) => {
                  const key = `${p.id}|${w.key}|${d}`
                  const acts = cellActs.get(key) ?? []
                  const weekEnd = d === WEEKDAYS[WEEKDAYS.length - 1]
                  return (
                    <div
                      key={key}
                      className={`mx-cell ${w.isToday ? 'today' : ''} ${
                        weekEnd ? 'week-end' : ''
                      } ${dragOver === key ? 'drop' : ''}`}
                      onDragOver={(e) => {
                        e.preventDefault()
                        setDragOver(key)
                      }}
                      onDragLeave={() =>
                        setDragOver((x) => (x === key ? null : x))
                      }
                      onDrop={(e) => {
                        const id = e.dataTransfer.getData('text/activity')
                        if (id) moveActivity(id, w.key, p.id, d)
                        setDragOver(null)
                      }}
                    >
                      {acts.map((a) => {
                        const m = memberById.get(a.memberId)
                        return (
                          <div
                            key={a.id}
                            className="act-card"
                            draggable
                            title={`${a.title}\n${a.role} · ${a.loadDays}d${
                              m ? ` · ${m.name}` : ''
                            }\n${p.code} · ${w.label} · ${d}`}
                            onDragStart={(e) =>
                              e.dataTransfer.setData('text/activity', a.id)
                            }
                            onClick={() => setEditing(a)}
                          >
                            <span className="a-title">{a.title}</span>
                            <div className="a-foot">
                              <RoleBadge role={a.role} />
                              <span className="load-chip">{a.loadDays}d</span>
                              {m && <Avatar member={m} />}
                            </div>
                          </div>
                        )
                      })}
                      <button
                        className="add-act"
                        onClick={() =>
                          setEditing({
                            id: uid(),
                            projectId: p.id,
                            week: w.key,
                            day: d,
                            title: '',
                            role: 'PM',
                            memberId: state.members[0]?.id ?? '',
                            loadDays: 1,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  )
                }),
              )}
            </Row>
          ))}
        </div>
      </div>

      {editing && (
        <ActivityModal
          activity={editing}
          onClose={() => setEditing(null)}
          onSave={(a) => {
            upsertActivity(a)
            setEditing(null)
          }}
          onDelete={(id) => {
            deleteActivity(id)
            setEditing(null)
          }}
          exists={state.activities.some((x) => x.id === editing.id)}
        />
      )}
      {editingProject && (
        <ProjectModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
        />
      )}
    </>
  )
}

// contents flow directly into the parent grid
function Row({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function Kpi({
  label,
  value,
  unit,
  alert,
}: {
  label: string
  value: string | number
  unit?: string
  alert?: boolean
}) {
  return (
    <div className={`kpi ${alert ? 'alert' : ''}`}>
      <div className="label">{label}</div>
      <div className="value">
        {value}
        {unit && <small> {unit}</small>}
      </div>
    </div>
  )
}

function ActivityModal({
  activity,
  onClose,
  onSave,
  onDelete,
  exists,
}: {
  activity: Activity
  onClose: () => void
  onSave: (a: Activity) => void
  onDelete: (id: string) => void
  exists: boolean
}) {
  const { state } = useStore()
  const [a, setA] = useState<Activity>({ ...activity, day: activity.day ?? 'SEG' })
  const set = (patch: Partial<Activity>) => setA((x) => ({ ...x, ...patch }))

  return (
    <Modal
      title={exists ? 'Editar atividade' : 'Nova atividade'}
      onClose={onClose}
      footer={
        <>
          {exists && (
            <button className="btn danger" onClick={() => onDelete(a.id)}>
              Excluir
            </button>
          )}
          <button className="btn" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn primary"
            onClick={() => a.title.trim() && onSave(a)}
          >
            Salvar
          </button>
        </>
      }
    >
      <div className="field">
        <label>Título</label>
        <input
          value={a.title}
          autoFocus
          onChange={(e) => set({ title: e.target.value })}
        />
      </div>
      <div className="grid2">
        <div className="field">
          <label>Projeto</label>
          <select
            value={a.projectId}
            onChange={(e) => set({ projectId: e.target.value })}
          >
            {state.projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.code}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Dia da semana</label>
          <select
            value={a.day ?? 'SEG'}
            onChange={(e) => set({ day: e.target.value as Weekday })}
          >
            {WEEKDAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Papel</label>
          <select
            value={a.role}
            onChange={(e) => set({ role: e.target.value as Role })}
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Responsável</label>
          <select
            value={a.memberId}
            onChange={(e) => set({ memberId: e.target.value })}
          >
            {state.members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Carga (dias)</label>
          <input
            type="number"
            step="0.5"
            min="0.5"
            value={a.loadDays}
            onChange={(e) => set({ loadDays: Number(e.target.value) })}
          />
        </div>
      </div>
    </Modal>
  )
}
