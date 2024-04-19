import React from "react";
import { getCoins } from "~/server/queries";
import AddTransaction from "./AddTransaction";
import PortfolioCoin from "~/components/PortfolioCoin";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
  const coins = await getCoins();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <AddTransaction />
      {coins.map((coin) => (
        <PortfolioCoin id={coin.coinId} quantity={coin.quantity} />
      ))}
    </div>
  );
};

export default page;
