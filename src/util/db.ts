import { PrismaClient } from '@prisma/client';

type GlobalPrismaClient = typeof globalThis & { prismaClient: PrismaClient };

if (!(global as GlobalPrismaClient).prismaClient && typeof window === 'undefined') {
  (global as GlobalPrismaClient).prismaClient = new PrismaClient();
}

const { prismaClient } = global as GlobalPrismaClient;

export * from '@prisma/client';
export default prismaClient;
