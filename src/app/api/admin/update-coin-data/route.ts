import { fetchCoinsData } from "~/server/server";

export async function GET() {
  fetchCoinsData();
  return Response.json({ message: "Fetching data" });
}
