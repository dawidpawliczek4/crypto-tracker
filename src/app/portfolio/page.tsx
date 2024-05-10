import React from "react";
import { getCoins } from "~/server/queries";
import AddTransaction from "../../components/portfolio/AddTransaction";
import PortfolioCoin from "~/components/portfolio/PortfolioCoin";
import Header from "../../components/portfolio/Header";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
  const portfolioCoins = await getCoins();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-row p-4">
          <Header portfolioCoins={portfolioCoins} />
          <AddTransaction />
        </div>
        <div className="flex flex-col gap-6 w-2/3">
          <p className="text-xl border-b-[1px] pb-2 border-b-white/30">Assets</p>
          {portfolioCoins.map((coin) => (
            <PortfolioCoin id={coin.coinId} quantity={coin.quantity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
