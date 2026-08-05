import type { ReactNode } from 'react'
import type { Member, Project, Risk, Role } from '../types'

// Solid brand color per role — the saturated fill used by "on" role pills in
// toolbars (the pale role-* badge classes in index.css use these same hues
// at low opacity for inline badges).
export const ROLE_COLOR: Record<Role, string> = {
  PM: '#2563eb',
  KAM: '#0e7490',
  PC: '#be1258',
  PLP: '#0d7d4f',
  PCM: '#4d7c0f',
  PMP: '#b45309',
  PQE: '#ea580c',
  SQD: '#b91c1c',
  CAD: '#7c3aed',
  LPE: '#4f46e5',
  PPE: '#4338ca',
  LAB: '#0d7d6b',
}

export function RoleBadge({ role }: { role: Role }) {
  return <span className={`badge role-${role}`}>{role}</span>
}

export function RiskBadge({ risk }: { risk: Risk }) {
  return <span className={`badge risk risk-${risk}`}>{risk}</span>
}

export function TypeChip({ project }: { project: Project }) {
  const label =
    project.type === 'NPI'
      ? `NPI ${project.npiSubtype ?? ''}`.trim()
      : 'STD / EP'
  return (
    <span className={`type-chip ${project.type === 'NPI' ? 'npi' : ''}`}>
      {label}
    </span>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Avatar({ member, title }: { member?: Member; title?: string }) {
  if (!member) return null
  return (
    <span
      className="avatar"
      style={{ background: member.color }}
      title={title ?? member.name}
    >
      {initials(member.name)}
    </span>
  )
}

export function Modal({
  title,
  onClose,
  children,
  footer,
  wide,
}: {
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
  wide?: boolean
}) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className={`modal ${wide ? 'wide' : ''}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-foot">{footer}</div>}
      </div>
    </div>
  )
}

export const fmtMio = (v: number) => `${v.toFixed(1)} Mio`

/**
 * Team filter for the Carga da equipe toolbar. Most members are anonymous
 * role slots (e.g. "LPE 3") rather than distinguishable people, so filtering
 * by function is the meaningful axis — one pill per role that's actually
 * staffed, toggled on/off, filled with that role's brand color when active.
 * Filtering by a specific named person still works through the search box.
 */
export function RolePills({
  roles,
  selected,
  onToggle,
}: {
  roles: Role[]
  selected: Role[]
  onToggle: (role: Role) => void
}) {
  return (
    <div className="filter-group">
      <span className="filter-label">Equipe</span>
      {roles.map((role) => {
        const on = selected.includes(role)
        return (
          <button
            key={role}
            className={`pill ${on ? 'on' : 'ghost'}`}
            style={on ? { background: ROLE_COLOR[role] } : undefined}
            onClick={() => onToggle(role)}
          >
            {role}
          </button>
        )
      })}
    </div>
  )
}
