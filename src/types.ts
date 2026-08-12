// Shared domain model. A single Project record is the source of truth used by
// the Carga da equipe matrix, the Pipeline kanban and the Gantt.

// Real functional roles from the MANN+HUMMEL workload workbook.
export const ROLES = [
  'PM', // Project Manager
  'KAM', // Key Account Manager
  'PC', // Controladoria
  'PLP', // Logística (planning)
  'PCM', // Logística (materials)
  'PMP', // Compras (purchasing)
  'PQE', // Qualidade
  'SQD', // Qualidade (supplier)
  'CAD', // Engenharia (CAD)
  'LPE', // Engenharia (LPE)
  'PPE', // Engenharia (PPE)
  'LAB', // Laboratório
] as const
export type Role = (typeof ROLES)[number]

export type ProjectType = 'STD' | 'NPI' // STD is also referred to as "EP"
export const NPI_SUBTYPES = ['G', 'H', 'I', 'P', 'X'] as const
export type NpiSubtype = (typeof NPI_SUBTYPES)[number]

export type Risk = 'baixo' | 'medio' | 'alto'
export type Reading = 'clara' | 'confirmar'

// Pipeline stages (order = column order on the board). The old combined
// "PER/NQC" submission stage split into "PER" and "NQC (Submissão)" — kept
// distinct from the later standalone "NQC" checkpoint, which is a separate,
// later approval gate and unrelated to the initial submission.
export const STAGES = [
  'Agendado',
  'PER',
  'NQC (Submissão)',
  'Gate Review',
  'NQC',
  'Nominated',
  'Development / Industrialization',
  'On Hold',
  'Lost',
  'Cancel',
] as const
export type Stage = (typeof STAGES)[number]

// Probability weight of each stage in the weighted "Métrica master".
// Lost and Cancel weigh 0% (dead projects) but still count in gross KPIs.
export const STAGE_WEIGHT: Record<Stage, number> = {
  Agendado: 0.1,
  PER: 0.35,
  'NQC (Submissão)': 0.4,
  'Gate Review': 0.6,
  NQC: 0.75,
  Nominated: 0.95,
  'Development / Industrialization': 0.98,
  'On Hold': 0.15,
  Lost: 0,
  Cancel: 0,
}

// Optional weekday within a CW for finer-grained load planning.
export const WEEKDAYS = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'] as const
export type Weekday = (typeof WEEKDAYS)[number]

// Execution status of a single activity ("kanban").
export const STATUSES = ['execution', 'delayed', 'concluded'] as const
export type Status = (typeof STATUSES)[number]
export const STATUS_LABEL: Record<Status, string> = {
  execution: 'Em execução',
  delayed: 'Atrasado',
  concluded: 'Concluído',
}

// Load per activity is capped to a half or full day — anything bigger must be
// split into a new activity by the coordinator (keeps the grid granular and
// each kanban card representing one discrete unit of work).
export const LOAD_DAYS_OPTIONS = [0.5, 1] as const
export type LoadDays = (typeof LOAD_DAYS_OPTIONS)[number]

export interface Member {
  id: string
  name: string
  role: Role // primary role, used for the pill colour
  color: string
}

/** A player allocated to a project, with their booked hours. */
export interface ProjectPlayer {
  memberId: string
  role: Role
  hours: number
}

/** One PER/NQC submission (numbered 1, 2, 3 ...). */
export interface Submission {
  n: number
  deliveryDate: string // ISO yyyy-mm-dd
  valueMio: number
  skamId: string // member id of responsible SKAM
}

/** Data captured when a project reaches the Nominated stage. */
export interface Nomination {
  sopDate: string // Start of Production (yyyy-mm-dd)
  koDate: string // Kick-off (yyyy-mm-dd)
  valueMio: number
  type: ProjectType // EP (STD) / NPI, reused from the project type
}

export interface Project {
  id: string
  code: string // "CAS 3124-03"
  name?: string // descriptive name (from imported data)
  client: string
  type: ProjectType
  npiSubtype?: NpiSubtype // required when type === 'NPI'

  // Team allocation — single source for load + Gantt detail.
  players: ProjectPlayer[]

  // Project duration expressed as week keys (inclusive).
  startWeek: string // "2026-W28"
  endWeek: string // "2026-W40"

  // Pipeline
  stage: Stage
  risk: Risk
  reading: Reading
  valueMio: number
  submissions: Submission[]
  nomination?: Nomination

  // Set once this project's Cotação work is fully concluded and it has been
  // auto-copied into the Pipeline (as a new project at stage "Agendado") —
  // prevents copying it again. Cotação → Pipeline is one-way; Pipeline
  // changes never flow back into the Cotação project that spawned it.
  copiedToPipeline?: boolean
}

/** An activity lands in one project × one week cell of the load matrix. */
export interface Activity {
  id: string
  projectId: string
  week: string // week key, "2026-W31"
  day?: Weekday // optional specific weekday within the CW
  title: string
  role: Role
  memberId: string
  loadDays: LoadDays // 0.5 or 1 — split into another activity for more
  status: Status
}

export interface AppState {
  members: Member[]
  projects: Project[]
  activities: Activity[]
}
