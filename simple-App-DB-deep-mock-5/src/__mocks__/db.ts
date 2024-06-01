import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()

//mocks need to be right next to mocks which should be right next to that fileb