"use client";
import React from "react";
import useCoin from "~/providers/useCoin";

interface SumProps {
  portfolioCoins: {
    coinId: string;
    quantity: number;
  }[];
}

const Sum: React.FC<SumProps> = ({ portfolioCoins }) => {
  const { coins } = useCoin();

  const sum = portfolioCoins.reduce((acc, curr) => {
    const coin = coins.find((coin) => coin.id === curr.coinId);
    if (!coin) return acc;
    return acc + coin.current_price * curr.quantity;
  }, 0);

  return <p className="text-2xl font-semibold">{sum}$</p>;
};

export default Sum;
