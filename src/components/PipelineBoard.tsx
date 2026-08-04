import { useMemo, useState } from 'react'
import { useStore } from '../store'
import {
  STAGES,
  STAGE_WEIGHT,
  type Nomination,
  type Project,
  type Reading,
  type Risk,
  type Stage,
} from '../types'
import { Avatar, Modal, RiskBadge, TypeChip, fmtMio } from './ui'
import { ProjectModal, emptyProject } from './ProjectModal'
import { weekKeyFromDate } from '../lib/weeks'

const STAGE_DESC: Partial<Record<Stage, string>> = {
  'PER/NQC': 'Submissões numeradas por projeto',
  Nomination: 'SOP, KO, valor e tipo (EP/NPI)',
  'On Hold': 'Projetos parados ou sem ação no momento',
  'Lost / Cancel': 'Projetos perdidos ou cancelados (0% na métrica)',
}

export function PipelineBoard() {
  const { state, moveStage } = useStore()
  const [riskFilter, setRiskFilter] = useState<Risk[]>([])
  const [readingFilter, setReadingFilter] = useState<Reading[]>([])
  const [clientFilter, setClientFilter] = useState('')
  const [dragStage, setDragStage] = useState<Stage | null>(null)

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [submissionFor, setSubmissionFor] = useState<Project | null>(null)
  const [nominationFor, setNominationFor] = useState<Project | null>(null)

  const clients = useMemo(
    () => [...new Set(state.projects.map((p) => p.client))].sort(),
    [state.projects],
  )

  const visible = state.projects.filter((p) => {
    if (riskFilter.length && !riskFilter.includes(p.risk)) return false
    if (readingFilter.length && !readingFilter.includes(p.reading)) return false
    if (clientFilter && p.client !== clientFilter) return false
    return true
  })

  const byStage = (s: Stage) => visible.filter((p) => p.stage === s)

  // KPIs — gross portfolio & count include every stage (incl. Lost / Cancel);
  // Métrica master is weighted by stage probability, so Lost / Cancel adds 0.
  const gross = visible.reduce((s, p) => s + p.valueMio, 0)
  const atRisk = visible
    .filter((p) => p.risk === 'alto')
    .reduce((s, p) => s + p.valueMio, 0)
  const master = visible.reduce(
    (s, p) => s + p.valueMio * STAGE_WEIGHT[p.stage],
    0,
  )

  const drop = (stage: Stage, id: string) => {
    const proj = state.projects.find((p) => p.id === id)
    setDragStage(null)
    if (!proj || proj.stage === stage) return
    if (stage === 'Nomination' && !proj.nomination) {
      // capture nomination data before committing the move
      setNominationFor(proj)
      return
    }
    moveStage(id, stage)
  }

  const toggle = <T,>(arr: T[], v: T, set: (a: T[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  return (
    <>
      <div className="kpibar">
        <Kpi label="Métrica master" value={fmtMio(master)} />
        <Kpi label="Carteira bruta" value={fmtMio(gross)} />
        <Kpi label="Valor em risco" value={fmtMio(atRisk)} alert={atRisk > 0} />
        <Kpi label="Projetos" value={visible.length} />
      </div>

      <div className="toolbar">
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
            <span
              className="dot"
              style={{ background: `var(--risk-${r})` }}
            />
            {r}
          </button>
        ))}
        {(['clara', 'confirmar'] as Reading[]).map((r) => (
          <button
            key={r}
            className={`pill ${readingFilter.includes(r) ? 'on' : 'ghost'}`}
            style={
              readingFilter.includes(r) ? { background: '#64748b' } : undefined
            }
            onClick={() => toggle(readingFilter, r, setReadingFilter)}
          >
            leitura: {r}
          </button>
        ))}
        <select
          className="btn"
          value={clientFilter}
          onChange={(e) => setClientFilter(e.target.value)}
        >
          <option value="">Todos os clientes</option>
          {clients.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {(riskFilter.length || readingFilter.length || clientFilter) && (
          <button
            className="btn sm"
            onClick={() => {
              setRiskFilter([])
              setReadingFilter([])
              setClientFilter('')
            }}
          >
            Limpar filtros
          </button>
        )}
        <div className="topbar-spacer" />
        <button
          className="btn primary"
          onClick={() => setEditingProject(emptyProject())}
        >
          + Novo projeto
        </button>
      </div>

      <div className="kanban">
        {STAGES.map((stage) => {
          const cards = byStage(stage)
          return (
            <div key={stage} className="col">
              <div className="col-head">
                <div className="c-title">
                  <span>{stage}</span>
                  <span className="c-count">{cards.length}</span>
                </div>
                {STAGE_DESC[stage] && (
                  <div className="c-desc">{STAGE_DESC[stage]}</div>
                )}
              </div>
              <div
                className={`col-body ${dragStage === stage ? 'drop' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragStage(stage)
                }}
                onDragLeave={() =>
                  setDragStage((s) => (s === stage ? null : s))
                }
                onDrop={(e) =>
                  drop(stage, e.dataTransfer.getData('text/project'))
                }
              >
                {cards.map((p) => (
                  <PipelineCard
                    key={p.id}
                    project={p}
                    onOpen={() => setEditingProject(p)}
                    onAddSubmission={() => setSubmissionFor(p)}
                    onEditNomination={() => setNominationFor(p)}
                  />
                ))}
                {cards.length === 0 && (
                  <div className="empty" style={{ padding: 16, fontSize: 12 }}>
                    —
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {editingProject && (
        <ProjectModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
        />
      )}
      {submissionFor && (
        <SubmissionModal
          project={submissionFor}
          onClose={() => setSubmissionFor(null)}
        />
      )}
      {nominationFor && (
        <NominationModal
          project={nominationFor}
          onClose={() => setNominationFor(null)}
        />
      )}
    </>
  )
}

function PipelineCard({
  project: p,
  onOpen,
  onAddSubmission,
  onEditNomination,
}: {
  project: Project
  onOpen: () => void
  onAddSubmission: () => void
  onEditNomination: () => void
}) {
  const { state } = useStore()
  const memberById = new Map(state.members.map((m) => [m.id, m]))
  return (
    <div
      className="pcard"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text/project', p.id)}
      onClick={onOpen}
      title="Ver detalhes do projeto"
    >
      <div className="p-top">
        <span className="p-code">{p.code}</span>
        <TypeChip project={p} />
      </div>
      <div className="p-row">
        <span className="p-client">{p.client}</span>
        <span className="p-val">{fmtMio(p.valueMio)}</span>
      </div>
      <div className="p-row">
        <RiskBadge risk={p.risk} />
        <span className="load-chip">leitura: {p.reading}</span>
      </div>

      {p.stage === 'PER/NQC' && (
        <div className="sub-list">
          {p.submissions.map((s) => (
            <div key={s.n} className="sub-row">
              <span className="sub-n">#{s.n}</span>
              <span>{s.deliveryDate}</span>
              <span style={{ fontWeight: 700 }}>{fmtMio(s.valueMio)}</span>
              {memberById.get(s.skamId) && (
                <Avatar member={memberById.get(s.skamId)} />
              )}
            </div>
          ))}
          <button
            className="btn sm"
            onClick={(e) => {
              e.stopPropagation()
              onAddSubmission()
            }}
          >
            + submissão
          </button>
        </div>
      )}

      {p.stage === 'Nomination' && p.nomination && (
        <div className="nom-box">
          <span>
            SOP: <b>{p.nomination.sopDate}</b>
          </span>
          <span>
            KO: <b>{p.nomination.koDate}</b>
          </span>
          <span>
            Valor: <b>{fmtMio(p.nomination.valueMio)}</b>
          </span>
          <span>
            Tipo: <b>{p.nomination.type === 'NPI' ? 'NPI' : 'EP'}</b>
          </span>
          <button
            className="btn sm"
            style={{ gridColumn: '1 / -1', marginTop: 4 }}
            onClick={(e) => {
              e.stopPropagation()
              onEditNomination()
            }}
          >
            Editar nomination
          </button>
        </div>
      )}
    </div>
  )
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

function SubmissionModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const { state, addSubmission, removeSubmission } = useStore()
  const [deliveryDate, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [valueMio, setValue] = useState(project.valueMio)
  const [skamId, setSkam] = useState(
    state.members.find((m) => m.role === 'KAM')?.id ??
      state.members[0]?.id ??
      '',
  )
  const memberById = new Map(state.members.map((m) => [m.id, m]))

  return (
    <Modal
      title={`Submissões PER/NQC — ${project.code}`}
      onClose={onClose}
      footer={
        <button className="btn primary" onClick={onClose}>
          Fechar
        </button>
      }
    >
      {project.submissions.length > 0 && (
        <div className="field">
          <label>Histórico</label>
          {project.submissions.map((s) => (
            <div key={s.n} className="sub-row" style={{ marginBottom: 4 }}>
              <span className="sub-n">#{s.n}</span>
              <span>{s.deliveryDate}</span>
              <span style={{ fontWeight: 700 }}>{fmtMio(s.valueMio)}</span>
              <span>{memberById.get(s.skamId)?.name ?? '—'}</span>
              <button
                className="icon-btn"
                style={{ marginLeft: 'auto' }}
                onClick={() => removeSubmission(project.id, s.n)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="grid2">
        <div className="field">
          <label>Data de entrega</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Valor (Mio)</label>
          <input
            type="number"
            step="0.1"
            value={valueMio}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label>SKAM responsável</label>
          <select value={skamId} onChange={(e) => setSkam(e.target.value)}>
            {state.members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.role})
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="btn primary"
        onClick={() => addSubmission(project.id, { deliveryDate, valueMio, skamId })}
      >
        + Adicionar submissão
      </button>
    </Modal>
  )
}

function NominationModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const { setNomination, moveStage, setProjectSpan } = useStore()
  const n = project.nomination
  const [nom, setNom] = useState<Nomination>(
    n ?? {
      sopDate: '',
      koDate: '',
      valueMio: project.valueMio,
      type: project.type,
    },
  )
  const set = (patch: Partial<Nomination>) => setNom((x) => ({ ...x, ...patch }))

  return (
    <Modal
      title={`Nomination — ${project.code}`}
      onClose={onClose}
      footer={
        <>
          <button className="btn" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn primary"
            onClick={() => {
              setNomination(project.id, nom)
              // Nomination dates feed the Gantt bar automatically.
              if (nom.koDate && nom.sopDate) {
                setProjectSpan(
                  project.id,
                  weekKeyFromDate(new Date(nom.koDate)),
                  weekKeyFromDate(new Date(nom.sopDate)),
                )
              }
              moveStage(project.id, 'Nomination')
              onClose()
            }}
          >
            Salvar &amp; mover
          </button>
        </>
      }
    >
      <p style={{ color: 'var(--text-muted)', marginBottom: 14 }}>
        Estes dados alimentam automaticamente a barra do projeto no Gantt.
      </p>
      <div className="grid2">
        <div className="field">
          <label>Data KO (kick-off)</label>
          <input
            type="date"
            value={nom.koDate}
            onChange={(e) => set({ koDate: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Data SOP (start of production)</label>
          <input
            type="date"
            value={nom.sopDate}
            onChange={(e) => set({ sopDate: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Valor do projeto (Mio)</label>
          <input
            type="number"
            step="0.1"
            value={nom.valueMio}
            onChange={(e) => set({ valueMio: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label>Tipo</label>
          <select
            value={nom.type}
            onChange={(e) =>
              set({ type: e.target.value as Nomination['type'] })
            }
          >
            <option value="STD">EP (STD)</option>
            <option value="NPI">NPI</option>
          </select>
        </div>
      </div>
    </Modal>
  )
}
