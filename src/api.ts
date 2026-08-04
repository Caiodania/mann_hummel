import type { AppState } from './types'

// All calls go through the Vite dev proxy (/api -> http://localhost:3001).
const BASE = '/api'

async function req<T>(path: string, method = 'GET', body?: unknown): Promise<T> {
  const res = await fetch(BASE + path, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}`)
  return res.json() as Promise<T>
}

// Every mutation returns the full, authoritative AppState from the server.
export const api = {
  getState: () => req<AppState>('/state'),
  upsertProject: (p: unknown) => req<AppState>('/projects', 'POST', p),
  deleteProject: (id: string) => req<AppState>(`/projects/${id}`, 'DELETE'),
  moveStage: (id: string, stage: string) =>
    req<AppState>(`/projects/${id}/stage`, 'PATCH', { stage }),
  setSpan: (id: string, startWeek: string, endWeek: string) =>
    req<AppState>(`/projects/${id}/span`, 'PATCH', { startWeek, endWeek }),
  addSubmission: (id: string, s: unknown) =>
    req<AppState>(`/projects/${id}/submissions`, 'POST', s),
  updateSubmission: (id: string, n: number, s: unknown) =>
    req<AppState>(`/projects/${id}/submissions/${n}`, 'PUT', s),
  removeSubmission: (id: string, n: number) =>
    req<AppState>(`/projects/${id}/submissions/${n}`, 'DELETE'),
  setNomination: (id: string, nom: unknown) =>
    req<AppState>(`/projects/${id}/nomination`, 'PUT', nom),
  upsertActivity: (a: unknown) => req<AppState>('/activities', 'POST', a),
  deleteActivity: (id: string) => req<AppState>(`/activities/${id}`, 'DELETE'),
  moveActivity: (id: string, body: unknown) =>
    req<AppState>(`/activities/${id}/move`, 'PATCH', body),
}
