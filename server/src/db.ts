import './env.js' // load DATABASE_URL from server/.env before Prisma starts
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
