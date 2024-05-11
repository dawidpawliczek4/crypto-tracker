import React from "react";

interface CoinDetailsPageProps {
  params: {
    id: string;
  };
}

const CoinDetailsPage: React.FC<CoinDetailsPageProps> = async ({ params }) => {
  const id = params.id;
  const coinInfo: any = await fetchCoinInfo(id);

  return (
    <div>
      <p>{id}</p>
      <p>{coinInfo?.description?.en}</p>
    </div>
  );
};

const fetchCoinInfo = async (id: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await response.json();
  return data;
};

export default CoinDetailsPage;
