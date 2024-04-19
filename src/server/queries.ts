"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

const authorizeUser = async () => {
  const user = auth();
  if (!user.userId) throw new Error("Not authenticated");

  const userInDb = await prisma.user.findUnique({
    where: {
      clerkId: user.userId,
    },
  });

  if (!userInDb) {
    await prisma.user.create({
      data: {
        clerkId: user.userId,
      },
    });
  }

  return user;
};

export const getCoins = async () => {
  const user = await authorizeUser();

  const coins = prisma.coin.findMany({
    where: {
      userId: user.userId,
    },
  });

  return coins;
};

export const addCoin = async (coinId: string, quantity: number) => {
  const user = await authorizeUser();

  const coin = await prisma.coin.findFirst({
    where: {
      coinId: coinId,
      userId: user.userId,
    },
  });

  if (!coin) {
    await prisma.coin.create({
      data: {
        coinId: coinId,
        userId: user.userId,
        quantity,
      },
    });
  } else {
    await prisma.coin.update({
      where: {
        id: coin.id,
      },
      data: {
        quantity: coin.quantity + quantity,
      },
    });
  }

  revalidatePath("/portfolio");
};
