import CoinsList from "~/components/CoinsList";
import { getPosts } from "~/server/queries";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center justify-center gap-2 pt-4">
      <CoinsList />
    </main>
  );
}
