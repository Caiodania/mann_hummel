import type { Request, Response, NextFunction } from 'express'

// Lightweight, opt-in auth layer (item 7).
//
// This is an internal MVP with no user model, so full authentication is out of
// scope. Instead we gate every *mutating* request (anything that isn't a
// read-only GET/HEAD) behind a shared secret: if API_KEY is set in the
// environment, clients must send it in the `x-api-key` header. If API_KEY is
// unset (the default), the API stays open — matching today's behaviour on a
// trusted internal network — but a single env var now hardens it.
//
// NOTE: a browser SPA cannot truly keep a secret, so this protects against
// casual/accidental writes and scripts hitting an exposed port, not against a
// determined authenticated user. A real deployment should put a proper
// identity-aware proxy in front.
export function requireApiKey(req: Request, res: Response, next: NextFunction) {
  const expected = process.env.API_KEY
  if (!expected) return next() // auth disabled
  if (req.method === 'GET' || req.method === 'HEAD') return next() // reads open

  const provided = req.get('x-api-key')
  if (provided && provided === expected) return next()
  return res.status(401).json({ error: 'Unauthorized' })
}
