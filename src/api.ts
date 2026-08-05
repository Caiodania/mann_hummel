import type { AppState } from './types'

// All calls go through the Vite dev proxy (/api -> http://localhost:3001).
const BASE = '/api'

// Optional shared secret — only needed if the server sets API_KEY (see
// server/src/auth.ts). Configure via VITE_API_KEY in the frontend env.
const API_KEY = import.meta.env.VITE_API_KEY as string | undefined

async function req<T>(path: string, method = 'GET', body?: unknown): Promise<T> {
  const headers: Record<string, string> = {}
  if (body) headers['Content-Type'] = 'application/json'
  if (API_KEY) headers['x-api-key'] = API_KEY
  const res = await fetch(BASE + path, {
    method,
    headers,
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
