// Idempotent wrapper around seed.ts for automated deploy pipelines (e.g. a
// Render build command) that must be safe to run on every deploy: seeds only
// when the database is empty, so a live database with real edits is never
// wiped by a routine redeploy. For a deliberate full reset in local dev, run
// `db:seed` directly instead — it always wipes and reloads.
import '../src/env.js'
import { execFileSync } from 'node:child_process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const count = await prisma.project.count()
  if (count > 0) {
    console.log(`Database already has ${count} project(s) — skipping seed.`)
    return
  }
  console.log('Database is empty — seeding with real data...')
  // shell: true so this resolves npx correctly on Windows too (npx is a .cmd
  // wrapper there, which spawnSync can't exec directly by name without it).
  execFileSync('npx', ['tsx', 'prisma/seed.ts'], { stdio: 'inherit', shell: true })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
