"use server";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

export async function fetchCoinsData() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }    

    const data = await response.json();
    const filePath = path.join(process.cwd(), "src/json/coins.json");
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Data fetched and saved to coins.json");
  } catch (error) {
    console.error("Failed to fetch coins data:", error);
  }
}
