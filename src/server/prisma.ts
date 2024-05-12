import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  //@ts-expect-error: test
  if (!global.prisma) {
    //@ts-expect-error: test
    global.prisma = new PrismaClient();
  }
  //@ts-expect-error: test
  prisma = global.prisma as any;
}

export default prisma;
