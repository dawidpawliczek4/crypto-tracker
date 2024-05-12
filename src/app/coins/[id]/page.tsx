import React from "react";

interface CoinDetailsPageProps {
  params: {
    id: string;
  };
}

type CoinInfo = {
  description?: {
    en?: string;
  };
};

const CoinDetailsPage: React.FC<CoinDetailsPageProps> = async ({ params }) => {
  const id = params.id;
  const coinInfo: CoinInfo = await fetchCoinInfo(id);

  return (
    <div>
      <p>{id}</p>
      <p>{coinInfo?.description?.en ?? "Error"}</p>
    </div>
  );
};

const fetchCoinInfo = async (id: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data: CoinInfo = (await response.json()) as CoinInfo;
  return data;
};

export default CoinDetailsPage;
