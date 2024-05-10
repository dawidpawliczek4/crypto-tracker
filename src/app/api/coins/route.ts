import path from "path";
import { promises as fs } from 'fs'

export async function GET() {
  const filePath = path.join(process.cwd(), "src/json/coins.json");
  const coins = await fs.readFile(filePath, 'utf8');  
  return Response.json(JSON.parse(coins));
}