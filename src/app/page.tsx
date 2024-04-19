'use server'
import CoinsList from "~/components/CoinsList";

export default async function HomePage() {  
  return (
    <main className="flex w-full flex-col items-center justify-center gap-2 pt-4">
      <CoinsList />
    </main>
  );
}
