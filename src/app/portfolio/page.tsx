import React from "react";
import { getCoins } from "~/server/queries";
import AddTransaction from "../../components/portfolio/AddTransaction";
import PortfolioCoin from "~/components/portfolio/PortfolioCoin";
import Header from "../../components/portfolio/Header";
import PortfolioChart from "../../components/portfolio/PortfolioChart";

const page: React.FC = async () => {
  const portfolioCoins = await getCoins();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full flex-row p-4">
          <Header portfolioCoins={portfolioCoins} />
          <AddTransaction />
        </div>
        <div className="flex w-screen flex-row items-start gap-x-4">
          <div>
            <PortfolioChart portfolioCoins={portfolioCoins} />
          </div>
          <div className="flex w-2/3 flex-col gap-6">
            <p className="border-b-[1px] border-b-white/30 pb-2 text-xl">
              Assets
            </p>
            {portfolioCoins.map((coin) => (
              <PortfolioCoin
                id={coin.coinId}
                quantity={coin.quantity}
                key={coin.coinId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
