import { PrismaClient } from "@/generated/prisma";

declare global {
  var prismaGlobalForClient: PrismaClient | undefined;
}

const prisma = global.prismaGlobalForClient ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
  global.prismaGlobalForClient = prisma;

export default prisma;
