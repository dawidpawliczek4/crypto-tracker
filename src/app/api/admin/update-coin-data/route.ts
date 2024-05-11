import { fetchCoinsData } from "~/server/server";

export async function GET() {
  await fetchCoinsData();
  return Response.json({ message: "Fetching data" });
}
