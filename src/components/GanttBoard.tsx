import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
import { useStore } from '../store'
import { useWeekRail } from '../lib/useWeekRail'
import { addWeeks, weekKeyFromDate, weeksBetween } from '../lib/weeks'
import type { Project } from '../types'
import { Avatar, Modal, RiskBadge, TypeChip, fmtMio } from './ui'
import { ProjectModal, emptyProject } from './ProjectModal'

const CELL = 54 // px per week column
const PROJ_COL = 220

type DragMode = 'move' | 'l' | 'r'
interface DragState {
  id: string
  mode: DragMode
  startX: number
  origStart: string
  origEnd: string
}

export function GanttBoard() {
  const { state, setProjectSpan } = useStore()
  // Gantt shows only projects currently in the Nomination stage.
  const projects = useMemo(
    () => state.projects.filter((p) => p.stage === 'Nomination'),
    [state.projects],
  )
  const coverKeys = useMemo(() => {
    const keys: string[] = []
    for (const p of projects) {
      keys.push(p.startWeek, p.endWeek)
      if (p.nomination?.koDate)
        keys.push(weekKeyFromDate(new Date(p.nomination.koDate)))
      if (p.nomination?.sopDate)
        keys.push(weekKeyFromDate(new Date(p.nomination.sopDate)))
    }
    return keys
  }, [projects])
  const { weeks, onScroll } = useWeekRail(3, 22, coverKeys)
  const [drag, setDrag] = useState<DragState | null>(null)
  const [preview, setPreview] = useState<
    Record<string, { startWeek: string; endWeek: string }>
  >({})
  const [detail, setDetail] = useState<Project | null>(null)
  const [editing, setEditing] = useState<Project | null>(null)
  const dragRef = useRef<DragState | null>(null)
  dragRef.current = drag

  const firstKey = weeks[0]?.key ?? ''
  const todayIndex = weeks.findIndex((w) => w.isToday)

  // pointer move / up while dragging a bar
  useEffect(() => {
    if (!drag) return
    const onMove = (e: MouseEvent) => {
      const d = dragRef.current
      if (!d) return
      const deltaWeeks = Math.round((e.clientX - d.startX) / CELL)
      let startWeek = d.origStart
      let endWeek = d.origEnd
      if (d.mode === 'move') {
        startWeek = addWeeks(d.origStart, deltaWeeks)
        endWeek = addWeeks(d.origEnd, deltaWeeks)
      } else if (d.mode === 'l') {
        startWeek = addWeeks(d.origStart, deltaWeeks)
        if (weeksBetween(startWeek, endWeek) < 0) startWeek = endWeek
      } else {
        endWeek = addWeeks(d.origEnd, deltaWeeks)
        if (weeksBetween(startWeek, endWeek) < 0) endWeek = startWeek
      }
      setPreview((p) => ({ ...p, [d.id]: { startWeek, endWeek } }))
    }
    const onUp = () => {
      const d = dragRef.current
      const pv = d ? preview[d.id] : undefined
      if (d && pv) setProjectSpan(d.id, pv.startWeek, pv.endWeek)
      setDrag(null)
      setPreview({})
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [drag, preview, setProjectSpan])

  const cols = `${PROJ_COL}px repeat(${weeks.length}, ${CELL}px)`

  const spanOf = (p: Project) =>
    preview[p.id] ?? { startWeek: p.startWeek, endWeek: p.endWeek }

  const beginDrag = (
    e: ReactMouseEvent,
    p: Project,
    mode: DragMode,
  ) => {
    e.stopPropagation()
    setDrag({
      id: p.id,
      mode,
      startX: e.clientX,
      origStart: p.startWeek,
      origEnd: p.endWeek,
    })
  }

  return (
    <>
      <div className="kpibar">
        <Kpi label="Projetos (Nomination)" value={projects.length} />
        <Kpi
          label="Em produção (SOP def.)"
          value={projects.filter((p) => p.nomination?.sopDate).length}
        />
        <Kpi
          label="Carteira"
          value={fmtMio(projects.reduce((s, p) => s + p.valueMio, 0))}
        />
      </div>

      <div className="toolbar">
        <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          Exibindo apenas projetos em <b>Nomination</b> · arraste as barras para
          mover · alças laterais para redimensionar · clique para ver detalhes
        </span>
        <div className="topbar-spacer" />
        <button
          className="btn primary"
          onClick={() => setEditing(emptyProject())}
        >
          + Novo projeto
        </button>
      </div>

      <div className="gantt-wrap" onScroll={onScroll}>
        <div className="gantt" style={{ gridTemplateColumns: cols }}>
          <div className="g-head g-corner">Projeto</div>
          {weeks.map((w) => (
            <div key={w.key} className={`g-head ${w.isToday ? 'today' : ''}`}>
              {w.label}
            </div>
          ))}

          {projects.map((p) => {
            const span = spanOf(p)
            const left = weeksBetween(firstKey, span.startWeek)
            const width = weeksBetween(span.startWeek, span.endWeek) + 1
            return (
              <GanttRow key={p.id}>
                <div className="g-proj">
                  <span className="p-code">{p.code}</span>
                  <div className="p-meta" style={{ display: 'flex', gap: 6 }}>
                    <TypeChip project={p} />
                    <RiskBadge risk={p.risk} />
                  </div>
                </div>
                <div
                  className="g-lane"
                  style={{ gridColumn: `2 / ${weeks.length + 2}` }}
                >
                  {/* week grid lines */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${weeks.length}, ${CELL}px)`,
                      height: '100%',
                    }}
                  >
                    {weeks.map((w) => (
                      <div key={w.key} className="g-week" />
                    ))}
                  </div>
                  {left >= -width && (
                    <div
                      className={`g-bar risk-${p.risk}`}
                      style={{
                        left: Math.max(left, 0) * CELL + 2,
                        width:
                          (left < 0 ? width + left : width) * CELL - 4,
                      }}
                      onMouseDown={(e) => beginDrag(e, p, 'move')}
                      onClick={() => !drag && setDetail(p)}
                      title={`${p.code} · ${span.startWeek} → ${span.endWeek}`}
                    >
                      <span
                        className="g-handle l"
                        onMouseDown={(e) => beginDrag(e, p, 'l')}
                      />
                      {p.code}
                      <span
                        className="g-handle r"
                        onMouseDown={(e) => beginDrag(e, p, 'r')}
                      />
                    </div>
                  )}
                </div>
              </GanttRow>
            )
          })}

          {todayIndex >= 0 && (
            <div
              className="today-line"
              style={{ left: PROJ_COL + todayIndex * CELL }}
            />
          )}
        </div>
        {projects.length === 0 && (
          <div className="empty">
            Nenhum projeto na etapa <b>Nomination</b> no momento. Mova um projeto
            para Nomination no Pipeline para vê-lo aqui.
          </div>
        )}
      </div>

      {detail && (
        <ProjectDetail project={detail} onClose={() => setDetail(null)} />
      )}
      {editing && (
        <ProjectModal project={editing} onClose={() => setEditing(null)} />
      )}
    </>
  )
}

function GanttRow({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function Kpi({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="kpi">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  )
}

function ProjectDetail({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const { state } = useStore()
  const memberById = useMemo(
    () => new Map(state.members.map((m) => [m.id, m])),
    [state.members],
  )
  const acts = state.activities.filter((a) => a.projectId === project.id)

  return (
    <Modal title={`${project.code} — ${project.client}`} onClose={onClose} wide>
      <div className="p-meta" style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        <TypeChip project={project} />
        <RiskBadge risk={project.risk} />
        <span className="load-chip">{fmtMio(project.valueMio)}</span>
        {project.nomination && (
          <span className="load-chip">
            KO {project.nomination.koDate} · SOP {project.nomination.sopDate}
          </span>
        )}
      </div>

      <div className="detail-grid">
        {project.players.length === 0 && (
          <div className="empty" style={{ padding: 16 }}>
            Nenhum player cadastrado neste projeto.
          </div>
        )}
        {project.players.map((pl) => {
          const m = memberById.get(pl.memberId)
          const memberActs = acts.filter((a) => a.memberId === pl.memberId)
          return (
            <div key={pl.memberId} className="player-row">
              <Avatar member={m} />
              <div>
                <div className="p-name">{m?.name ?? '—'}</div>
                <div className="player-acts">
                  {memberActs.length === 0 && (
                    <span className="mini-act">sem atividades lançadas</span>
                  )}
                  {memberActs.map((a) => (
                    <span key={a.id} className="mini-act">
                      {a.title} · {a.loadDays}d
                    </span>
                  ))}
                </div>
              </div>
              <span className={`badge role-${pl.role}`}>{pl.role}</span>
              <span className="p-hours">{pl.hours}h</span>
            </div>
          )
        })}
      </div>
    </Modal>
  )
}
