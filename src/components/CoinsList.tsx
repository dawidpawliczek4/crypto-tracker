"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { CoinType } from "~/lib/CoinType";
import CoinRow from "./CoinRow";
import { dummy_coins } from "~/lib/dummy_data";
import Link from "next/link";
import { Divider, Grid } from "@mui/material";

interface CoinsListProps {}

const CoinsList: React.FC<CoinsListProps> = ({}) => {
  const [coins, setCoins] = useState<CoinType[]>(dummy_coins as CoinType[]);
  const [searchString, setSearchString] = useState<string>("");

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     const response = await fetch(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  //     );
  //     const data = await response.json();
  //     setCoins(data);
  //   };
  //   fetchCoins();
  // }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchString.toLowerCase()),
  );
  return (
    <div className="mx-auto flex w-screen flex-col items-center justify-center">
      <div className="flex w-full justify-center">
        <SearchForm
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </div>
      <div className="w-full px-24">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: "1rem",
          }}
        >
          <Grid item>
            <p>Rank</p>
          </Grid>
          <Grid item xs={3}>
            <p>Name</p>
          </Grid>
          <Grid item xs={2}>
            <p>Price</p>
          </Grid>
          <Grid item xs={2}>
            <p>Volume</p>
          </Grid>
          <Grid item xs={1}>
            <p>Market Cap</p>
          </Grid>
        </Grid>
        <Divider />
      </div>
      <ul className="flex w-full flex-col items-center px-24">
        {filteredCoins.map((coin) => (
          <Link href={`/coins/${coin.id}`} key={coin.id} className="w-full">
            <CoinRow coin={coin} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CoinsList;
