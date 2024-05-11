"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SearchForm from "../SearchForm";
import CoinRow from "./CoinRow";
import Link from "next/link";
import { Divider, Grid } from "@mui/material";
import useCoin from "~/providers/useCoin";
import { CoinType } from "~/lib/CoinType";

const CoinsList: React.FC = () => {
  const { coins, setCoins } = useCoin();
  
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        "/api/coins"
      );
      const data: CoinType[] = await response.json();
      setCoins(data);
    };
    fetchCoins()
    .catch((error) => {
      console.error("Error fetching coins", error);
    })
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchString.toLowerCase()),
  );
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="flex w-full justify-center">
        <SearchForm
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </div>
      <div className="w-full px-24 max-sm:px-4">
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
          <Grid item xs={2} className="max-md:sr-only">
            <p>Volume</p>
          </Grid>
          <Grid item xs={1} className="max-md:sr-only">
            <p>Market Cap</p>
          </Grid>
        </Grid>
        <Divider />
      </div>
      <ul className="flex w-full flex-col items-center px-24 max-sm:px-4">
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
