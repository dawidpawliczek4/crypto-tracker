import CoinsList from "~/components/coin-list/CoinsList";
import Header from "~/components/coin-list/Header";

export default async function HomePage() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-2 pt-4">
        <section className="flex flex-col w-full max-w-[1600px]">
        <Header />
        <CoinsList />      
        </section>      
    </main>
  );
}
