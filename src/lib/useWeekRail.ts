import { useMemo, useState, type UIEvent } from 'react'
import {
  addWeeks,
  currentWeekKey,
  generateWeeks,
  weeksBetween,
  type Week,
} from './weeks'

/**
 * Infinite horizontal week rail. Starts `past` weeks before the current week
 * and appends more weeks as the user scrolls toward the right edge — no fixed
 * upper bound on how far forward the board extends.
 *
 * `coverKeys` are week keys the grid must always reach (project start/end, SOP,
 * KO …): the rail auto-extends to include the furthest one, so scheduling a
 * project far in the future immediately widens the grid instead of clipping.
 */
export function useWeekRail(past = 3, initial = 18, coverKeys: string[] = []) {
  const [count, setCount] = useState(initial)

  const baseKey = addWeeks(currentWeekKey(), -past)

  // Minimum column count needed to reach the furthest covered week (+buffer).
  const needed = useMemo(() => {
    let maxOff = initial
    for (const k of coverKeys) {
      const off = weeksBetween(baseKey, k) + 3
      if (off > maxOff) maxOff = off
    }
    return maxOff
  }, [coverKeys, baseKey, initial])

  const effective = Math.max(count, needed)

  const weeks: Week[] = useMemo(
    () => generateWeeks(effective, -past),
    [effective, past],
  )

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    if (el.scrollLeft + el.clientWidth > el.scrollWidth - 500) {
      setCount((c) => Math.max(c, effective) + 8)
    }
  }

  return { weeks, onScroll }
}
