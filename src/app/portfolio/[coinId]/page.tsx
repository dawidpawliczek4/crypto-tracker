import React from "react";
import { getTransactions } from "~/server/queries";

interface pageProps {
  params: {
    coinId: string;
  };
}

const page: React.FC<pageProps> = async ({ params: { coinId } }) => {
  const transactions = await getTransactions(coinId);

  return (
    <div>
      <p>{coinId}</p>
      <p>Transactions:</p>
      {transactions.length === 0 && <p>No transactions</p>}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.quantity}</p>
            <p>{transaction.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
