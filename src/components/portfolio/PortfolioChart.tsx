"use client";
import React, { useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { CoinType } from "~/lib/CoinType";
import useCoin from "~/providers/useCoin";

interface PortfolioChartProps {
  portfolioCoins: {
    coinId: string;
    quantity: number;
  }[];
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({ portfolioCoins }) => {
  const { coins, setCoins } = useCoin();

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("/api/coins");
      const data: CoinType[] = (await response.json()) as CoinType[];
      setCoins(data);
    };
    fetchCoins().catch((error) => {
      console.error("Error fetching coins", error);
    });
  }, []);
  
  return (
    <PieChart
      series={[
        {
          data: portfolioCoins.map((coin) => {
            const contextCoin = coins.find((c) => c.id == coin.coinId);
            if (!contextCoin) {
              return {
                name: coin.coinId,
                label: coin.coinId,
                value: 0,
              };
            }
            return {
            name: coin.coinId,
            label: coin.coinId,
            value: coin.quantity * contextCoin.current_price,
          }}),
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default PortfolioChart;
