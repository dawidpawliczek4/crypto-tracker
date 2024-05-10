import React from "react";
import Sum from "./Sum";

interface HeaderProps {
  portfolioCoins: {
    coinId: string;
    quantity: number;
  }[];
}

const Header: React.FC<HeaderProps> = ({ portfolioCoins }) => {
  return (
    <div className="w-1/3">
      <p className="text-gray-300">Dawid Pawliczek</p>
      <Sum portfolioCoins={portfolioCoins} />
    </div>
  );
};

export default Header;
