import Banner from "@/components/Pages/Home/Banner";
import BetSignals from "@/components/Pages/Home/BetSignals";
import GameOdds from "@/components/Pages/Home/GameOdds";
import LastGames from "@/components/Pages/Home/LastGames";
import Overview from "@/components/Pages/Home/Overview";
import RelatedArticles from "@/components/Pages/Home/RelatedArticles";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="container mx-auto flex flex-col gap-2">
        <Overview />
        <LastGames />
        <GameOdds />
        <BetSignals />
        <RelatedArticles />
      </section>
    </main>
  );
}
