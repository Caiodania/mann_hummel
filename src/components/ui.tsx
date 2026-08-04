import type { ReactNode } from 'react'
import type { Member, Project, Risk, Role } from '../types'

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
