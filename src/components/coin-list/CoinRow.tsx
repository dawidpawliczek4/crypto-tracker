import { Divider, Grid } from "@mui/material";
import React, { useMemo } from "react";
import { CoinType } from "~/lib/CoinType";
import { formatNumber } from "~/lib/utils";

interface CoinRowProps {
  coin: CoinType;
}

const CoinRow: React.FC<CoinRowProps> = ({ coin }) => {
  const total_volume_formatted = useMemo(() => {
    return formatNumber(coin.total_volume);
  }, [coin.total_volume]);

  const market_cap_formatted = useMemo(() => {
    return formatNumber(coin.market_cap);
  }, [coin.market_cap]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        <Grid item>
          <p>{coin.market_cap_rank}</p>
        </Grid>

        <Grid item xs={3}>
          <div className="flex items-center gap-x-2">
            <img src={coin.image} alt={coin.name} className="h-6 w-6" />
            <h2>{coin.name}</h2>
            <p className="text-xs font-light uppercase">{coin.symbol}</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>${coin.current_price}</p>
        </Grid>
        <Grid item xs={2} className="max-md:sr-only">
          <p>{total_volume_formatted}</p>
        </Grid>
        <Grid item xs={1} className="max-md:sr-only">
          <p>{market_cap_formatted}</p>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default CoinRow;
