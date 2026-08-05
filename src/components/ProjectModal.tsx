import { useState } from 'react'
import { useStore, uid } from '../store'
import { currentWeekKey, addWeeks, generateWeeks } from '../lib/weeks'
import {
  NPI_SUBTYPES,
  ROLES,
  type NpiSubtype,
  type Project,
  type ProjectPlayer,
  type ProjectType,
  type Risk,
  type Role,
} from '../types'
import { Modal, fmtMio } from './ui'

export function emptyProject(): Project {
  const now = currentWeekKey()
  return {
    id: uid(),
    code: '',
    client: '',
    type: 'STD',
    players: [],
    startWeek: now,
    endWeek: addWeeks(now, 8),
    stage: 'Agendado',
    risk: 'baixo',
    reading: 'clara',
    valueMio: 0,
    submissions: [],
  }
}

const weekOptions = generateWeeks(60, -6)

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const { state, upsertProject, deleteProject } = useStore()
  const exists = state.projects.some((p) => p.id === project.id)
  const [p, setP] = useState<Project>(project)
  const set = (patch: Partial<Project>) => setP((x) => ({ ...x, ...patch }))

  const setPlayer = (i: number, patch: Partial<ProjectPlayer>) =>
    setP((x) => ({
      ...x,
      players: x.players.map((pl, idx) => (idx === i ? { ...pl, ...patch } : pl)),
    }))
  const addPlayer = () =>
    setP((x) => ({
      ...x,
      players: [
        ...x.players,
        {
          memberId:
            state.members.find((m) => m.role === 'PM')?.id ??
            state.members[0]?.id ??
            '',
          role: 'PM',
          hours: 8,
        },
      ],
    }))
  const removePlayer = (i: number) =>
    setP((x) => ({ ...x, players: x.players.filter((_, idx) => idx !== i) }))

  return (
    <Modal
      title={exists ? `Projeto ${p.code}` : 'Novo projeto'}
      onClose={onClose}
      wide
      footer={
        <>
          {exists && (
            <button
              className="btn danger"
              onClick={() => {
                deleteProject(p.id)
                onClose()
              }}
            >
              Excluir
            </button>
          )}
          <button className="btn" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn primary"
            onClick={() => {
              if (!p.code.trim()) return
              upsertProject(p)
              onClose()
            }}
          >
            Salvar
          </button>
        </>
      }
    >
      <div className="field">
        <label>Nome / descrição</label>
        <input
          value={p.name ?? ''}
          placeholder="(opcional)"
          onChange={(e) => set({ name: e.target.value })}
        />
      </div>
      <div className="grid2">
        <div className="field">
          <label>Código do projeto</label>
          <input
            value={p.code}
            placeholder="CAS 3124-03"
            onChange={(e) => set({ code: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Cliente</label>
          <input
            value={p.client}
            onChange={(e) => set({ client: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Tipo</label>
          <select
            value={p.type}
            onChange={(e) =>
              set({
                type: e.target.value as ProjectType,
                npiSubtype:
                  e.target.value === 'NPI' ? p.npiSubtype ?? 'G' : undefined,
              })
            }
          >
            <option value="STD">STD / EP</option>
            <option value="NPI">NPI</option>
          </select>
        </div>
        {p.type === 'NPI' && (
          <div className="field">
            <label>Subtipo NPI</label>
            <select
              value={p.npiSubtype ?? 'G'}
              onChange={(e) =>
                set({ npiSubtype: e.target.value as NpiSubtype })
              }
            >
              {NPI_SUBTYPES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="field">
          <label>Valor (Mio)</label>
          <input
            type="number"
            step="0.1"
            value={p.valueMio}
            onChange={(e) => set({ valueMio: Number(e.target.value) })}
          />
        </div>
        <div className="field">
          <label>Risco</label>
          <select
            value={p.risk}
            onChange={(e) => set({ risk: e.target.value as Risk })}
          >
            <option value="baixo">Baixo</option>
            <option value="medio">Médio</option>
            <option value="alto">Alto</option>
          </select>
        </div>
        <div className="field">
          <label>Semana início</label>
          <select
            value={p.startWeek}
            onChange={(e) => set({ startWeek: e.target.value })}
          >
            {weekOptions.map((w) => (
              <option key={w.key} value={w.key}>
                {w.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Semana fim</label>
          <select
            value={p.endWeek}
            onChange={(e) => set({ endWeek: e.target.value })}
          >
            {weekOptions.map((w) => (
              <option key={w.key} value={w.key}>
                {w.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label>Players &amp; horas alocadas</label>
        {p.players.map((pl, i) => (
          <div
            key={i}
            style={{ display: 'flex', gap: 8, marginBottom: 6 }}
          >
            <select
              style={{ flex: 2 }}
              value={pl.memberId}
              onChange={(e) => setPlayer(i, { memberId: e.target.value })}
            >
              {state.members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            <select
              style={{ flex: 1 }}
              value={pl.role}
              onChange={(e) => setPlayer(i, { role: e.target.value as Role })}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <input
              style={{ width: 80 }}
              type="number"
              min="0"
              value={pl.hours}
              onChange={(e) => setPlayer(i, { hours: Number(e.target.value) })}
            />
            <button className="icon-btn" onClick={() => removePlayer(i)}>
              ×
            </button>
          </div>
        ))}
        <button
          className="btn sm"
          style={{ alignSelf: 'flex-start' }}
          onClick={addPlayer}
        >
          + player
        </button>
      </div>

      {/* read-only detail: pipeline stage, submissions, nomination */}
      <div className="field">
        <label>Pipeline</label>
        <div className="p-meta" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className="load-chip">Estágio: {p.stage}</span>
          <span className="load-chip">Leitura: {p.reading}</span>
        </div>
      </div>

      {p.submissions.length > 0 && (
        <div className="field">
          <label>Submissões PER/NQC</label>
          {p.submissions.map((s) => (
            <div key={s.n} className="sub-row" style={{ marginBottom: 4 }}>
              <span className="sub-n">#{s.n}</span>
              <span>{s.deliveryDate}</span>
              <span style={{ fontWeight: 700 }}>{fmtMio(s.valueMio)}</span>
              <span>
                {state.members.find((m) => m.id === s.skamId)?.name ?? '—'}
              </span>
            </div>
          ))}
        </div>
      )}

      {p.nomination && (
        <div className="field">
          <label>Nomination</label>
          <div className="nom-box" style={{ borderTop: 'none', paddingTop: 0 }}>
            <span>
              KO: <b>{p.nomination.koDate || '—'}</b>
            </span>
            <span>
              SOP: <b>{p.nomination.sopDate || '—'}</b>
            </span>
            <span>
              Valor: <b>{fmtMio(p.nomination.valueMio)}</b>
            </span>
            <span>
              Tipo: <b>{p.nomination.type === 'NPI' ? 'NPI' : 'EP'}</b>
            </span>
          </div>
        </div>
      )}
    </Modal>
  )
}
