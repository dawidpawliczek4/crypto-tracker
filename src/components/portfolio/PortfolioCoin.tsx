"use client";
import React from "react";
import useCoin from "~/providers/useCoin";
import { TiDelete } from "react-icons/ti";
import { deleteCoin } from "~/server/queries";
import { toast } from "sonner";
import EditPortfolioCoin from "./EditPortfolioCoin";

interface PortfolioCoinProps {
  id: string;
  quantity: number;
}

const PortfolioCoin: React.FC<PortfolioCoinProps> = ({ id, quantity }) => {
  const { coins } = useCoin();
  const coin = coins.find((coin) => coin.id === id);
  if (!coin) return <div>No coin</div>;

  const handleDelete = async () => {
    await deleteCoin(coin.id);
    toast.success("Coin deleted");
  };

  const handleEdit = () => {
    toast.error("Edit not implemented yet");
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-x-4">
        <img src={coin.image} alt={coin.name} className="h-6 w-6" />
        <span className="font-semibold">{coin.name}</span>
      </div>
      <span>Price: {coin.current_price}$</span>
      <span>Quantity: {quantity}</span>
      <span>Total value: {coin.current_price * quantity}$</span>
      <div className="flex items-center gap-x-2">
        <EditPortfolioCoin quantityOld={quantity} id={id} />
        <TiDelete className="h-6 w-6 cursor-pointer" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default PortfolioCoin;
