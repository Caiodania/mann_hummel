// Loads server/.env into process.env BEFORE any Prisma Client is constructed.
// The Prisma CLI (generate/db push/migrate) auto-loads .env, but the Prisma
// Client inside the running app does NOT — without this, DATABASE_URL is
// undefined at runtime and every query throws
// "Environment variable not found: DATABASE_URL".
//
// Resolved relative to this file (server/src/env.ts -> server/.env) so it works
// no matter which directory the process is launched from.
import { config } from 'dotenv'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const serverRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
config({ path: join(serverRoot, '.env') })
