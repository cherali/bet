import { timeSince } from "@/utils/dateUtils";
import { Newspaper } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    imageUrl:
      "https://www.bettingpros.com/img/Declan_Rice_Arsenal_1470x650-120x120.jpg/120x120.webp",
    category: "SOCCER",
    title: "Champions League Semi-Final Leg 1 Odds, Picks & Predictions (2025)",
    author: "Trenton Pruitt",
    date: "2025/4/29",
  },
  {
    id: 2,
    imageUrl:
      "https://www.bettingpros.com/img/Declan_Rice_Arsenal_1470x650-120x120.jpg/120x120.webp",
    category: "SOCCER",
    title: "Champions League Semi-Final Leg 1 Odds, Picks & Predictions (2025)",
    author: "Trenton Pruitt",
    date: "2025/4/30",
  },
  {
    id: 3,
    imageUrl:
      "https://www.bettingpros.com/img/Declan_Rice_Arsenal_1470x650-120x120.jpg/120x120.webp",
    category: "SOCCER",
    title: "Champions League Semi-Final Leg 1 Odds, Picks & Predictions (2025)",
    author: "Trenton Pruitt",
    date: "2025/4/29",
  },
];

function RelatedArticles() {
  return (
    <section className="-page-section">
      <section className="flex gap-2 items-center">
        <Newspaper className="size-6 text-white bg-primary p-1 rounded-full" />
        <h3 className="font-bold text-lg">Related Articles</h3>
      </section>

      <section className="flex flex-col gap-4 py-4">
        {articles.map(article => (
          <section key={article.id} className="flex gap-4">
            <section className="overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={article.imageUrl}
                alt="article"
                width={90}
                height={90}
              />
            </section>

            <section>
              <p className="text-primary cursor-pointer hover:opacity-70">
                {article.category}
              </p>
              <p className="font-semibold cursor-pointer hover:opacity-70">
                {article.title}
              </p>
              <p className="mt-2 text-gray-500 text-sm">
                {article.author} • {timeSince(new Date(article.date).getTime())}
              </p>
            </section>
          </section>
        ))}
      </section>
      <section className="text-center py-2">
        <p className="hover:opacity-50 duration-200 text-primary font-semibold text-sm cursor-pointer">
          View More Articles
        </p>
      </section>
    </section>
  );
}

export default RelatedArticles;
