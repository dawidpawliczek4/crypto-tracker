"use client";
import React from "react";
import useCoin from "~/providers/useCoin";
import { TiDelete } from "react-icons/ti";
import { deleteCoin } from "~/server/queries";
import { toast } from "sonner";

interface PortfolioCoinProps {
  id: string;
  quantity: number;
}

const PortfolioCoin: React.FC<PortfolioCoinProps> = ({ id, quantity }) => {
  const { coins } = useCoin();
  const coin = coins.find((coin) => coin.id === id);
  if (!coin) return null;

  const handleDelete = async () => {
    await deleteCoin(coin.id);
    toast.success("Coin deleted");
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-x-4">
      <img src={coin.image} alt={coin.name} className="h-6 w-6" />
      <span className="font-semibold">{coin.name}</span>
      </div>
      <span>Price: {coin.current_price}$</span>
      <span>Quantity: {quantity}</span>
      <span>Total value: {coin.current_price * quantity}$</span>
      <div className="flex gap-x-2 items-center">
        <span>Edit</span>
        <TiDelete className="cursor-pointer w-6 h-6" onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default PortfolioCoin;
