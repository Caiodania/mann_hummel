// Calendar-week (CW) helpers for the infinite week rails used by the
// Carga da equipe matrix and the Gantt. A week is identified by a stable
// string key `${isoYear}-W${weekNo}` (e.g. "2026-W31"), labelled `CW31`.

export interface Week {
  key: string // "2026-W31"
  label: string // "CW31"
  weekNo: number // 31
  isoYear: number // 2026
  monday: Date // Monday 00:00 of the week
  isToday: boolean // contains today
}

const DAY = 86400000

/** Monday (00:00, local) of the week containing `date`. */
export function startOfISOWeek(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const day = (d.getDay() + 6) % 7 // Mon=0 ... Sun=6
  d.setDate(d.getDate() - day)
  return d
}

/** ISO-8601 week number + the year that week belongs to. */
export function isoWeek(date: Date): { weekNo: number; isoYear: number } {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  // Thursday of the current ISO week decides the year.
  const day = (d.getDay() + 6) % 7
  d.setDate(d.getDate() - day + 3)
  const isoYear = d.getFullYear()
  const firstThursday = new Date(isoYear, 0, 4)
  const firstDay = (firstThursday.getDay() + 6) % 7
  firstThursday.setDate(firstThursday.getDate() - firstDay + 3)
  const weekNo =
    1 + Math.round((d.getTime() - firstThursday.getTime()) / (7 * DAY))
  return { weekNo, isoYear }
}

export function weekKeyFromDate(date: Date): string {
  const { weekNo, isoYear } = isoWeek(date)
  return `${isoYear}-W${weekNo}`
}

function buildWeek(monday: Date, today: Date): Week {
  const { weekNo, isoYear } = isoWeek(monday)
  const todayMonday = startOfISOWeek(today)
  return {
    key: `${isoYear}-W${weekNo}`,
    label: `CW${weekNo}`,
    weekNo,
    isoYear,
    monday,
    isToday: monday.getTime() === todayMonday.getTime(),
  }
}

/**
 * Generate `count` consecutive weeks starting `offsetWeeks` from the week that
 * contains `today` (negative offset = weeks in the past). Drives the infinite
 * horizontal rail: components ask for more weeks as the user scrolls right.
 */
export function generateWeeks(
  count: number,
  offsetWeeks = 0,
  today: Date = new Date(),
): Week[] {
  const base = startOfISOWeek(today)
  const out: Week[] = []
  for (let i = 0; i < count; i++) {
    const monday = new Date(base.getTime() + (offsetWeeks + i) * 7 * DAY)
    out.push(buildWeek(monday, today))
  }
  return out
}

/** Monday date for a given week key, or null if malformed. */
export function mondayFromKey(key: string, today: Date = new Date()): Date | null {
  const m = /^(\d+)-W(\d+)$/.exec(key)
  if (!m) return null
  const isoYear = Number(m[1])
  const weekNo = Number(m[2])
  // Monday of ISO week 1, then add weeks.
  const jan4 = new Date(isoYear, 0, 4)
  const week1Monday = startOfISOWeek(jan4)
  void today
  return new Date(week1Monday.getTime() + (weekNo - 1) * 7 * DAY)
}

/** Signed number of weeks between two week keys (b - a). */
export function weeksBetween(a: string, b: string): number {
  const ma = mondayFromKey(a)
  const mb = mondayFromKey(b)
  if (!ma || !mb) return 0
  return Math.round((mb.getTime() - ma.getTime()) / (7 * DAY))
}

/** Add `n` weeks to a week key, returning a new key. */
export function addWeeks(key: string, n: number): string {
  const m = mondayFromKey(key)
  if (!m) return key
  return weekKeyFromDate(new Date(m.getTime() + n * 7 * DAY))
}

export const currentWeekKey = (today: Date = new Date()) =>
  weekKeyFromDate(today)
