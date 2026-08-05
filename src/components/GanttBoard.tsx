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
import { STAGE_WEIGHT, type Project, type Reading, type Risk } from '../types'
import { RiskBadge, TypeChip, fmtMio } from './ui'
import { ProjectModal, emptyProject } from './ProjectModal'
import { ProjectDetail } from './ProjectDetail'

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
  const [search, setSearch] = useState('')
  const [riskFilter, setRiskFilter] = useState<Risk[]>([])
  const [readingFilter, setReadingFilter] = useState<Reading[]>([])
  const [clientFilter, setClientFilter] = useState('')

  const clients = useMemo(
    () => [...new Set(state.projects.map((p) => p.client))].sort(),
    [state.projects],
  )

  // Gantt shows only projects currently in the Nomination stage, further
  // narrowed by the toolbar filters.
  const q = search.trim().toLowerCase()
  const projects = useMemo(
    () =>
      state.projects.filter((p) => {
        if (p.stage !== 'Nomination') return false
        if (riskFilter.length && !riskFilter.includes(p.risk)) return false
        if (readingFilter.length && !readingFilter.includes(p.reading))
          return false
        if (clientFilter && p.client !== clientFilter) return false
        if (
          q &&
          !p.code.toLowerCase().includes(q) &&
          !p.client.toLowerCase().includes(q)
        )
          return false
        return true
      }),
    [state.projects, riskFilter, readingFilter, clientFilter, q],
  )

  // Same formulas as the Pipeline KPI bar, scoped to this tab's own project
  // set (Nomination stage + active filters) so the two tabs read consistently.
  const gross = projects.reduce((s, p) => s + p.valueMio, 0)
  const atRisk = projects
    .filter((p) => p.risk === 'alto')
    .reduce((s, p) => s + p.valueMio, 0)
  const master = projects.reduce(
    (s, p) => s + p.valueMio * STAGE_WEIGHT[p.stage],
    0,
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

  const toggle = <T,>(arr: T[], v: T, set: (a: T[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

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
        <Kpi label="Métrica master" value={fmtMio(master)} />
        <Kpi label="Carteira bruta" value={fmtMio(gross)} />
        <Kpi label="Valor em risco" value={fmtMio(atRisk)} alert={atRisk > 0} />
        <Kpi label="Projetos" value={projects.length} />
      </div>

      <div className="toolbar">
        <div className="search">
          <span>🔍</span>
          <input
            placeholder="Buscar projeto ou cliente…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <span className="filter-label">Risco</span>
          {(['baixo', 'medio', 'alto'] as Risk[]).map((r) => (
            <button
              key={r}
              className={`pill ${riskFilter.includes(r) ? 'on' : ''}`}
              style={
                riskFilter.includes(r)
                  ? { background: `var(--risk-${r})` }
                  : undefined
              }
              onClick={() => toggle(riskFilter, r, setRiskFilter)}
            >
              <span className="dot" style={{ background: `var(--risk-${r})` }} />
              {r}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">Leitura</span>
          {(['clara', 'confirmar'] as Reading[]).map((r) => (
            <button
              key={r}
              className={`pill ${readingFilter.includes(r) ? 'on' : 'ghost'}`}
              style={
                readingFilter.includes(r) ? { background: '#64748b' } : undefined
              }
              onClick={() => toggle(readingFilter, r, setReadingFilter)}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">Cliente</span>
          <select
            className="btn"
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
          >
            <option value="">Todos</option>
            {clients.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        {(riskFilter.length || readingFilter.length || clientFilter || search) && (
          <button
            className="btn sm"
            onClick={() => {
              setRiskFilter([])
              setReadingFilter([])
              setClientFilter('')
              setSearch('')
            }}
          >
            Limpar filtros
          </button>
        )}
        <div className="topbar-spacer" />
        <button
          className="btn primary"
          onClick={() => setEditing(emptyProject())}
        >
          + Novo projeto
        </button>
      </div>

      <div className="info-banner">
        <strong>Cronograma por projeto</strong>
        <p>
          Exibindo apenas projetos na etapa <b>Nomination</b>. Arraste as
          barras para mover, use as alças laterais para redimensionar, clique
          para ver detalhes. Linha verde = hoje.
        </p>
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
        <ProjectDetail
          project={detail}
          onClose={() => setDetail(null)}
          onEdit={() => {
            setEditing(detail)
            setDetail(null)
          }}
        />
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

function Kpi({
  label,
  value,
  alert,
}: {
  label: string
  value: string | number
  alert?: boolean
}) {
  return (
    <div className={`kpi ${alert ? 'alert' : ''}`}>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  )
}

