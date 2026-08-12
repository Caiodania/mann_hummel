import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ROLES, type Member, type Project, type Risk, type Role } from '../types'

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

/** A member-level filter key, distinct from a bare role code. */
export const memberKey = (id: string) => `m:${id}`

/**
 * Team filter for the Carga da equipe toolbar: one pill per staffed role —
 * click to filter the whole function, or open the caret to drill down and
 * pick individual people within it. `selected` mixes both kinds of key (a
 * role code like "PM", or a member key like "m:m1").
 */
export function RolePills({
  members,
  selected,
  onToggle,
}: {
  members: Member[]
  selected: string[]
  onToggle: (key: string) => void
}) {
  const [openRole, setOpenRole] = useState<Role | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!openRole) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpenRole(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [openRole])

  const byRole = new Map<Role, Member[]>()
  for (const m of members) {
    const arr = byRole.get(m.role)
    if (arr) arr.push(m)
    else byRole.set(m.role, [m])
  }
  const staffedRoles = ROLES.filter((r) => byRole.has(r))

  return (
    <div className="filter-group" ref={rootRef}>
      <span className="filter-label">Equipe</span>
      {staffedRoles.map((role) => {
        const roleMembers = byRole.get(role)!
        const on = selected.includes(role)
        return (
          <div key={role} className="role-pill-wrap">
            <button
              className={`pill ${on ? 'on' : 'ghost'}`}
              style={on ? { background: ROLE_COLOR[role] } : undefined}
              onClick={() => onToggle(role)}
            >
              {role}
            </button>
            {roleMembers.length > 1 && (
              <button
                className="role-pill-caret"
                aria-label={`Ver pessoas em ${role}`}
                onClick={() =>
                  setOpenRole((r) => (r === role ? null : role))
                }
              >
                {openRole === role ? '▴' : '▾'}
              </button>
            )}
            {openRole === role && (
              <div className="role-pill-pop">
                {roleMembers.map((m) => {
                  const key = memberKey(m.id)
                  const mOn = selected.includes(key)
                  return (
                    <label key={m.id} className={`rp-row ${mOn ? 'on' : ''}`}>
                      <input
                        type="checkbox"
                        checked={mOn}
                        onChange={() => onToggle(key)}
                      />
                      <span className="dot" style={{ background: m.color }} />
                      <span>{m.name}</span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
