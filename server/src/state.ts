import { prisma } from './db.js'

// Assemble the full AppState in exactly the shape the frontend expects:
// { members, projects (with players/submissions/nomination inlined), activities }
export async function getAppState() {
  const [members, projects, activities] = await Promise.all([
    prisma.member.findMany({ orderBy: { id: 'asc' } }),
    prisma.project.findMany({
      include: {
        players: true,
        submissions: { orderBy: { n: 'asc' } },
        nomination: true,
      },
      orderBy: { code: 'asc' },
    }),
    prisma.activity.findMany(),
  ])

  return {
    members: members.map((m) => ({
      id: m.id,
      name: m.name,
      role: m.role,
      color: m.color,
    })),
    projects: projects.map((p) => ({
      id: p.id,
      code: p.code,
      name: p.name ?? undefined,
      client: p.client,
      type: p.type,
      npiSubtype: p.npiSubtype ?? undefined,
      startWeek: p.startWeek,
      endWeek: p.endWeek,
      stage: p.stage,
      risk: p.risk,
      reading: p.reading,
      valueMio: p.valueMio,
      copiedToPipeline: p.copiedToPipeline,
      players: p.players.map((pl) => ({
        memberId: pl.memberId,
        role: pl.role,
        hours: pl.hours,
      })),
      submissions: p.submissions.map((s) => ({
        n: s.n,
        deliveryDate: s.deliveryDate,
        valueMio: s.valueMio,
        skamId: s.skamId,
      })),
      nomination: p.nomination
        ? {
            sopDate: p.nomination.sopDate,
            koDate: p.nomination.koDate,
            valueMio: p.nomination.valueMio,
            type: p.nomination.type,
          }
        : undefined,
    })),
    activities: activities.map((a) => ({
      id: a.id,
      projectId: a.projectId,
      week: a.week,
      day: a.day ?? undefined,
      title: a.title,
      role: a.role,
      memberId: a.memberId,
      loadDays: a.loadDays,
      status: a.status,
    })),
  }
}
