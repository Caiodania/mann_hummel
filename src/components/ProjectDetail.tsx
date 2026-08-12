import { useMemo } from 'react'
import { useStore } from '../store'
import { weeksBetween } from '../lib/weeks'
import type { Project } from '../types'
import { Avatar, Modal, RiskBadge, TypeChip, fmtMio } from './ui'

/**
 * Read-only project summary: everything a PM needs at a glance (type, risk,
 * value, team + their activities, submissions, nomination) before deciding to
 * edit. Shared across all three tabs so "ver detalhes" means the same thing
 * everywhere, with a single explicit path into the edit form.
 */
export function ProjectDetail({
  project,
  onClose,
  onEdit,
}: {
  project: Project
  onClose: () => void
  onEdit: () => void
}) {
  const { state } = useStore()
  const memberById = useMemo(
    () => new Map(state.members.map((m) => [m.id, m])),
    [state.members],
  )
  const acts = useMemo(
    () => state.activities.filter((a) => a.projectId === project.id),
    [state.activities, project.id],
  )
  const totalDays = acts.reduce((s, a) => s + a.loadDays, 0)
  const totalHours = project.players.reduce((s, pl) => s + pl.hours, 0)
  const durationWeeks = weeksBetween(project.startWeek, project.endWeek) + 1
  const typeLabel =
    project.type === 'NPI' ? `NPI-${project.npiSubtype ?? '?'}` : 'EP'

  return (
    <Modal
      title={`${project.code} — ${project.client}`}
      onClose={onClose}
      wide
      footer={
        <>
          <button className="btn" onClick={onClose}>
            Fechar
          </button>
          <button className="btn primary" onClick={onEdit}>
            Editar projeto
          </button>
        </>
      }
    >
      <div className="duration-highlight">
        <span className="duration-value">{durationWeeks} semanas</span>
        <span className="duration-type">{typeLabel}</span>
      </div>

      <div
        className="p-meta"
        style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}
      >
        <TypeChip project={project} />
        <RiskBadge risk={project.risk} />
        <span className="load-chip">Estágio: {project.stage}</span>
        <span className="load-chip">{fmtMio(project.valueMio)}</span>
        <span className="load-chip">
          {totalDays}d · {totalHours}h alocadas
        </span>
        {project.nomination && (
          <span className="load-chip">
            KO {project.nomination.koDate} · SOP {project.nomination.sopDate}
          </span>
        )}
      </div>

      {project.name && (
        <p style={{ color: 'var(--text-muted)', marginBottom: 14, fontSize: 13 }}>
          {project.name}
        </p>
      )}

      <div className="field">
        <label>Equipe alocada</label>
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

      {project.submissions.length > 0 && (
        <div className="field">
          <label>Submissões PER/NQC</label>
          {project.submissions.map((s) => (
            <div key={s.n} className="sub-row" style={{ marginBottom: 4 }}>
              <span className="sub-n">#{s.n}</span>
              <span>{s.deliveryDate}</span>
              <span style={{ fontWeight: 700 }}>{fmtMio(s.valueMio)}</span>
              <span>{memberById.get(s.skamId)?.name ?? '—'}</span>
            </div>
          ))}
        </div>
      )}
    </Modal>
  )
}
