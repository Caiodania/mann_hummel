import express, { type Request, type Response, type NextFunction } from 'express'
import cors from 'cors'
import { prisma } from './db.js'
import { getAppState } from './state.js'

const app = express()
app.use(cors())
app.use(express.json({ limit: '5mb' }))

const wrap =
  (fn: (req: Request, res: Response) => Promise<unknown>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res).catch(next)

// ---- full state (single source of truth) ----
app.get('/api/state', wrap(async (_req, res) => {
  res.json(await getAppState())
}))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// ---- projects ----
// upsert a whole project (scalars + players + submissions + nomination)
app.post('/api/projects', wrap(async (req, res) => {
  const p = req.body
  await prisma.$transaction(async (tx) => {
    const scalars = {
      code: p.code,
      name: p.name ?? null,
      client: p.client,
      type: p.type,
      npiSubtype: p.npiSubtype ?? null,
      startWeek: p.startWeek,
      endWeek: p.endWeek,
      stage: p.stage,
      risk: p.risk,
      reading: p.reading,
      valueMio: p.valueMio ?? 0,
    }
    await tx.project.upsert({
      where: { id: p.id },
      create: { id: p.id, ...scalars },
      update: scalars,
    })
    // replace players
    await tx.projectPlayer.deleteMany({ where: { projectId: p.id } })
    if (Array.isArray(p.players) && p.players.length)
      await tx.projectPlayer.createMany({
        data: p.players.map((pl: any) => ({
          projectId: p.id,
          memberId: pl.memberId,
          role: pl.role,
          hours: pl.hours,
        })),
      })
    // replace submissions
    await tx.submission.deleteMany({ where: { projectId: p.id } })
    if (Array.isArray(p.submissions) && p.submissions.length)
      await tx.submission.createMany({
        data: p.submissions.map((s: any) => ({
          projectId: p.id,
          n: s.n,
          deliveryDate: s.deliveryDate,
          valueMio: s.valueMio,
          skamId: s.skamId,
        })),
      })
    // nomination (1:1)
    await tx.nomination.deleteMany({ where: { projectId: p.id } })
    if (p.nomination)
      await tx.nomination.create({
        data: {
          projectId: p.id,
          sopDate: p.nomination.sopDate,
          koDate: p.nomination.koDate,
          valueMio: p.nomination.valueMio,
          type: p.nomination.type,
        },
      })
  })
  res.json(await getAppState())
}))

app.delete('/api/projects/:id', wrap(async (req, res) => {
  await prisma.project.delete({ where: { id: req.params.id } })
  res.json(await getAppState())
}))

app.patch('/api/projects/:id/stage', wrap(async (req, res) => {
  await prisma.project.update({
    where: { id: req.params.id },
    data: { stage: req.body.stage },
  })
  res.json(await getAppState())
}))

app.patch('/api/projects/:id/span', wrap(async (req, res) => {
  await prisma.project.update({
    where: { id: req.params.id },
    data: { startWeek: req.body.startWeek, endWeek: req.body.endWeek },
  })
  res.json(await getAppState())
}))

// ---- submissions ----
app.post('/api/projects/:id/submissions', wrap(async (req, res) => {
  const projectId = req.params.id
  const max = await prisma.submission.aggregate({
    where: { projectId },
    _max: { n: true },
  })
  const n = (max._max.n ?? 0) + 1
  await prisma.submission.create({
    data: {
      projectId,
      n,
      deliveryDate: req.body.deliveryDate,
      valueMio: req.body.valueMio,
      skamId: req.body.skamId,
    },
  })
  res.json(await getAppState())
}))

app.put('/api/projects/:id/submissions/:n', wrap(async (req, res) => {
  await prisma.submission.updateMany({
    where: { projectId: req.params.id, n: Number(req.params.n) },
    data: {
      deliveryDate: req.body.deliveryDate,
      valueMio: req.body.valueMio,
      skamId: req.body.skamId,
    },
  })
  res.json(await getAppState())
}))

app.delete('/api/projects/:id/submissions/:n', wrap(async (req, res) => {
  const projectId = req.params.id
  await prisma.$transaction(async (tx) => {
    await tx.submission.deleteMany({
      where: { projectId, n: Number(req.params.n) },
    })
    // renumber remaining submissions 1..k
    const rest = await tx.submission.findMany({
      where: { projectId },
      orderBy: { n: 'asc' },
    })
    for (let i = 0; i < rest.length; i++)
      if (rest[i].n !== i + 1)
        await tx.submission.update({
          where: { id: rest[i].id },
          data: { n: i + 1 },
        })
  })
  res.json(await getAppState())
}))

// ---- nomination ----
app.put('/api/projects/:id/nomination', wrap(async (req, res) => {
  const projectId = req.params.id
  const data = {
    sopDate: req.body.sopDate,
    koDate: req.body.koDate,
    valueMio: req.body.valueMio,
    type: req.body.type,
  }
  await prisma.nomination.upsert({
    where: { projectId },
    create: { projectId, ...data },
    update: data,
  })
  res.json(await getAppState())
}))

// ---- activities ----
app.post('/api/activities', wrap(async (req, res) => {
  const a = req.body
  const data = {
    projectId: a.projectId,
    memberId: a.memberId,
    week: a.week,
    day: a.day ?? null,
    title: a.title,
    role: a.role,
    loadDays: a.loadDays,
  }
  await prisma.activity.upsert({
    where: { id: a.id },
    create: { id: a.id, ...data },
    update: data,
  })
  res.json(await getAppState())
}))

app.delete('/api/activities/:id', wrap(async (req, res) => {
  await prisma.activity.delete({ where: { id: req.params.id } })
  res.json(await getAppState())
}))

app.patch('/api/activities/:id/move', wrap(async (req, res) => {
  const data: { week: string; projectId: string; day?: string } = {
    week: req.body.week,
    projectId: req.body.projectId,
  }
  if (req.body.day) data.day = req.body.day
  await prisma.activity.update({ where: { id: req.params.id }, data })
  res.json(await getAppState())
}))

// error handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)
  res.status(500).json({ error: String((err as Error)?.message ?? err) })
})

// Use a dedicated var (NOT the generic PORT, which Vite/preview tooling sets to
// 5173) so the API always binds the port the frontend proxy targets.
const PORT = Number(process.env.API_PORT ?? 3001)
const server = app.listen(PORT, () =>
  console.log(`API on http://localhost:${PORT}`),
)
server.on('error', (err) => {
  console.error(`Failed to bind API on port ${PORT}:`, err)
  process.exit(1)
})
