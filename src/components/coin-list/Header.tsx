import React from "react";

const Header: React.FC = ({}) => {
  const global_marketcap = "$2.11T";
  const percent_change = 0.5;

  return (
    <div className="w-full max-w-[1600px] px-24 py-4 text-left">
      <h1 className="text-2xl font-semibold">
        Today&apos;s Cryptocurrency Prices by Market Cap
      </h1>
      <p className="text-sm text-gray-400">
        The global crypto market cap is
        <span className="font-semibold">{global_marketcap}</span>, a
        <span
          className={
            percent_change < 0
              ? "text-red-500"
              : percent_change > 0
                ? "text-green-500"
                : "text-gray-500"
          }
        >
          {percent_change}%
        </span>
        decrease over the last day.
      </p>
      <div className="flex justify-between"></div>
    </div>
  );
};

export default Header;
