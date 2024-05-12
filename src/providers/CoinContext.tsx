'use client'
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { CoinType } from "~/lib/CoinType";
import { dummy_coins } from "~/lib/dummy_data";

export const CoinContext = createContext<{
  coins: CoinType[];
  setCoins: Dispatch<SetStateAction<CoinType[]>>
}>({
  coins: [],  
  setCoins: () => { /* default value */ },
});

interface CoinProviderProps {
  children: React.ReactNode;
}

export const CoinProvider: React.FC<CoinProviderProps> = ({ children }) => {
  const [coins, setCoins] = useState<CoinType[]>(dummy_coins);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
};
