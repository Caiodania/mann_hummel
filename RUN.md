# MANN+HUMMEL — Carga & Pipeline

Full-stack app: **React + Vite** frontend, **Express + Prisma** backend, **PostgreSQL**
database. The database is the single source of truth; every user of the same backend sees
the same live data. Postgres (not a local SQLite file) is required so data survives
redeploys — see the "Deploy (Render)" section in [README.md](README.md) for why.

## Requirements

- Node.js 20+
- A Postgres instance: either `docker compose up -d` (uses `docker-compose.yml`), or point
  at a managed instance (e.g. the same one used in production).

## First run

```bash
# from the project root
npm install                              # frontend deps + concurrently
cp server/.env.example server/.env       # then edit DATABASE_URL to your Postgres
npm run setup        # installs backend deps, generates client, pushes schema, seeds real data
npm run dev          # starts BOTH the API (:3001) and the frontend (:5173)
```

Open http://localhost:5173. The Vite dev server proxies `/api` → `http://localhost:3001`.

## Day-to-day

```bash
npm run dev          # one command — runs API + frontend together
```

- `npm run dev:web` — frontend only (if the API is already running elsewhere).
- The API port is `API_PORT` (default **3001**) in `server/.env`. It intentionally does
  **not** use the generic `PORT` var, because Vite/tooling sets `PORT=5173` and would
  otherwise make the API bind the wrong port.

## Re-seed / reset data

```bash
cd server && npm run db:seed   # wipes and reloads the seed data
```

## Notes

- **Run `prisma generate` while the server is stopped.** A running server locks the Prisma
  query-engine file on Windows, so regenerating it then fails with `EPERM`. Generate first,
  then `npm run dev`. (You only need to generate again after changing `schema.prisma`.)
- **Multi-user:** the frontend loads from `GET /api/state`, sends every change to the API,
  and polls every 8s (and on window focus), so concurrent users converge on the same data.
  With SQLite this means everyone pointing at the *same running backend*; for separate
  machines, use the Postgres option above.
- **`valor` / `risco`:** these do not exist in the source workbook (it is a pure
  workload/hours file). They are editable fields defaulting to 0 / `baixo` until a real
  source is provided.
