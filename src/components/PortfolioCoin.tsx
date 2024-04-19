"use client";
import React from "react";
import useCoin from "~/providers/useCoin";

interface PortfolioCoinProps {
  id: string;
  quantity: number;
}

const PortfolioCoin: React.FC<PortfolioCoinProps> = ({ id, quantity }) => {
  const { coins } = useCoin();
  const coin = coins.find((coin) => coin.id === id);
  if (!coin) return null;

  return (
    <div className="flex flex-col">
      <span>{coin.name}</span>
      <span>Price: {coin.current_price}$</span>
      <span>Quantity: {quantity}</span>
      <span>Total value: {coin.current_price * quantity}</span>
    </div>
  );
};

export default PortfolioCoin;
