import { useContext } from "react";
import { CoinContext } from "./CoinContext";

export default function useCoin() {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoin must be used within a CoinProvider");
  }
  return context;
}
