// Seeds the database with REAL data extracted from the MANN+HUMMEL workbook
// (Workload_Rev19 → NPI_Development tab). See seed-data.json.
// Fields absent from the workbook (valueMio, risk) come in as 0 / placeholder.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const here = dirname(fileURLToPath(import.meta.url))

interface Seed {
  members: { id: string; name: string; role: string; color: string }[]
  projects: any[]
  activities: any[]
}

const data: Seed = JSON.parse(
  readFileSync(join(here, 'seed-data.json'), 'utf8'),
)

async function main() {
  // clear (order matters for FKs)
  await prisma.activity.deleteMany()
  await prisma.submission.deleteMany()
  await prisma.nomination.deleteMany()
  await prisma.projectPlayer.deleteMany()
  await prisma.project.deleteMany()
  await prisma.member.deleteMany()

  await prisma.member.createMany({ data: data.members })

  for (const p of data.projects) {
    await prisma.project.create({
      data: {
        id: p.id,
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
        players: {
          create: (p.players ?? []).map((pl: any) => ({
            memberId: pl.memberId,
            role: pl.role,
            hours: pl.hours,
          })),
        },
        submissions: {
          create: (p.submissions ?? []).map((s: any) => ({
            n: s.n,
            deliveryDate: s.deliveryDate,
            valueMio: s.valueMio,
            skamId: s.skamId,
          })),
        },
        nomination: p.nomination
          ? {
              create: {
                sopDate: p.nomination.sopDate,
                koDate: p.nomination.koDate,
                valueMio: p.nomination.valueMio,
                type: p.nomination.type,
              },
            }
          : undefined,
      },
    })
  }

  await prisma.activity.createMany({
    data: data.activities.map((a) => ({
      id: a.id,
      projectId: a.projectId,
      memberId: a.memberId,
      week: a.week,
      day: a.day ?? null,
      title: a.title,
      role: a.role,
      loadDays: a.loadDays,
    })),
  })

  console.log(
    `Seeded ${data.members.length} members, ${data.projects.length} projects, ${data.activities.length} activities.`,
  )
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
