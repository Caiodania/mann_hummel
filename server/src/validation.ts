// Request-body validation for all write routes (item 6).
// The Prisma schema stores stage/risk/reading/type/npiSubtype/role/day as free
// strings, but the frontend keys fixed Records off them (e.g. STAGE_WEIGHT in
// src/types.ts). An out-of-range value silently produces NaN KPIs, so we reject
// it at the boundary. Keep these enums in sync with src/types.ts.
import { z } from 'zod'

const STAGES = [
  'Agendado',
  'Task Done',
  'PER/NQC',
  'Gate Review',
  'NQC',
  'Nomination',
  'On Hold',
  'Lost / Cancel',
] as const

const ROLES = [
  'PM', 'KAM', 'PC', 'PLP', 'PCM', 'PMP',
  'PQE', 'SQD', 'CAD', 'LPE', 'PPE', 'LAB',
] as const

const RISKS = ['baixo', 'medio', 'alto'] as const
const READINGS = ['clara', 'confirmar'] as const
const TYPES = ['STD', 'NPI'] as const
const NPI_SUBTYPES = ['G', 'H', 'I', 'P', 'X'] as const
const WEEKDAYS = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'] as const

// week key like "2026-W28"
const weekKey = z.string().regex(/^\d{4}-W\d{1,2}$/, 'invalid week key (expected YYYY-Www)')
const isoDate = z.string().min(1)
const id = z.string().min(1)

export const stageSchema = z.enum(STAGES)
export const riskSchema = z.enum(RISKS)
export const readingSchema = z.enum(READINGS)
export const typeSchema = z.enum(TYPES)
export const roleSchema = z.enum(ROLES)

const playerSchema = z.object({
  memberId: id,
  role: roleSchema,
  hours: z.number().nonnegative(),
})

const submissionBodySchema = z.object({
  deliveryDate: isoDate,
  valueMio: z.number().nonnegative(),
  skamId: id,
})

const submissionWithNSchema = submissionBodySchema.extend({
  n: z.number().int().positive(),
})

export const nominationSchema = z.object({
  sopDate: isoDate,
  koDate: isoDate,
  valueMio: z.number().nonnegative(),
  type: typeSchema,
})

export const projectSchema = z
  .object({
    id,
    code: z.string().min(1),
    name: z.string().nullish(),
    client: z.string().min(1),
    type: typeSchema,
    npiSubtype: z.enum(NPI_SUBTYPES).nullish(),
    startWeek: weekKey,
    endWeek: weekKey,
    stage: stageSchema,
    risk: riskSchema,
    reading: readingSchema,
    valueMio: z.number().nonnegative().optional(),
    players: z.array(playerSchema).optional(),
    submissions: z.array(submissionWithNSchema).optional(),
    nomination: nominationSchema.nullish(),
  })
  .strict()

export const stagePatchSchema = z.object({ stage: stageSchema })

export const spanPatchSchema = z.object({
  startWeek: weekKey,
  endWeek: weekKey,
})

export const submissionCreateSchema = submissionBodySchema
export const submissionUpdateSchema = submissionBodySchema

// Treat an empty-string day as an explicit "no specific day" (null) so both
// `day: null` and `day: ""` mean the same thing; a missing key stays undefined.
const daySchema = z.preprocess(
  (v) => (v === '' ? null : v),
  z.enum(WEEKDAYS).nullish(),
)

export const activitySchema = z.object({
  id,
  projectId: id,
  memberId: id,
  week: weekKey,
  day: daySchema,
  title: z.string().min(1),
  role: roleSchema,
  loadDays: z.number().nonnegative(),
})

// `day` is intentionally optional-nullable so callers can either omit it
// (leave the day untouched) or send null/"" (clear it) — see the move route.
export const activityMoveSchema = z.object({
  week: weekKey,
  projectId: id,
  day: daySchema,
})
