"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

const authorizeUser = async () => {
  const user = auth();
  if (!user.userId) throw new Error("Not authenticated");

  let userInDb = await prisma.user.findUnique({
    where: {
      clerkId: user.userId,
    },
  });

  if (!userInDb) {
    userInDb = await prisma.user.create({
      data: {
        clerkId: user.userId,
      },
    });
  }

  return userInDb;
};

export const getCoins = async () => {
  const user = await authorizeUser();

  const coins = prisma.coin.findMany({
    where: {
      userId: user.id,
    },
  });

  return coins;
};

export const getTransactions = async (coinId: string) => {
  const user = await authorizeUser();

  const transactions = prisma.transaction.findMany({
    where: {
      coin: {
        coinId: coinId,
      },
      userId: user.id,
    },
  });

  return transactions;
};

export const addTransaction = async (
  coinId: string,
  quantity: number,
  price: number,
) => {
  const user = await authorizeUser();

  let coin = await prisma.coin.findFirst({
    where: {
      coinId: coinId,
      userId: user.id,
    },
  });

  if (!coin) {
    if (quantity < 0) {
      throw new Error("Cannot sell a coin you don't own");
    }
    if (quantity === 0) {
      throw new Error("Cannot buy 0 coins");
    }
    coin = await prisma.coin.create({
      data: {
        coinId,
        userId: user.id,
        quantity,
      },
    });
  } else {
    if (coin.quantity + quantity < 0) {
      throw new Error("Cannot sell more coins than you own");
    }
    if (coin.quantity + quantity === 0) {
      await prisma.coin.delete({
        where: {
          id: coin.id,
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
  }

  await prisma.transaction.create({
    data: {
      coinId: coin.id,
      userId: user.id,
      quantity,
      price,
      type: quantity > 0 ? "BUY" : "SELL",
    },
  });

  revalidatePath("/portfolio");
};

export const deleteCoin = async (coinId: string) => {
  const user = await authorizeUser();

  // had problems with unique delete()
  await prisma.coin.deleteMany({
    where: {
      coinId: coinId,
      userId: user.id,
    },
  });

  revalidatePath("/portfolio");
};
