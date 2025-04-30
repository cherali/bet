import { BadgePercent } from "lucide-react";
import Image from "next/image";
import AppSelect from "@/components/elements/AppSelect/AppSelect";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/basics/tooltip";
import { cn } from "@/utils/uiUtils";

function OddsItem({
  text,
  image,
  lastUpdate,
  className,
  description,
}: {
  text: string;
  image: string;
  lastUpdate?: string | undefined;
  className?: string;
  description?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <section
          className={cn(
            "w-full shadow-sm shadow-gray-200 flex items-center relative h-10 rounded-md text-sm font-semibold cursor-pointer justify-center",
            className,
            lastUpdate == undefined && "cursor-not-allowed bg-gray-100",
          )}
        >
          <span className="me-8 text-gray-600">
            {text}
            {description && <span className="text-xs"> ({description})</span>}
          </span>

          <Image
            src={image}
            width={32}
            height={32}
            className="absolute end-1"
            alt="bg"
          />
        </section>
      </TooltipTrigger>
      <TooltipContent>
        <p>{lastUpdate || "N/A"}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function GameOdds() {
  return (
    <section className="-page-section">
      <section className="flex items-center justify-between">
        <section className="flex gap-2 items-center">
          <BadgePercent className="size-6 text-white bg-primary p-1 rounded-full" />
          <h3 className="font-bold text-lg">Game Odds</h3>
        </section>

        <section className="flex gap-3">
          <AppSelect
            defaultValue="fullgame"
            options={[
              {
                value: "fullgame",
                label: "Full Game",
              },
              {
                value: "1st",
                label: "1st Half",
              },
              {
                value: "2nd",
                label: "2nd Half",
              },
            ]}
            className="w-32"
          />
          <AppSelect
            defaultValue="bestOdds"
            options={[
              {
                value: "bestOdds",
                label: "Best Odds",
              },
              {
                value: "fanDuel",
                label: "FanDuel",
              },
              {
                value: "bet365",
                label: "bet365",
              },
            ]}
            className="w-32"
          />
        </section>
      </section>

      <section className="flex text-gray-600 text-sm pt-4 gap-3 px-4">
        <section className="flex-3"></section>
        <section className="flex-1 text-center">Total</section>
        <section className="flex-1 text-center">Moneyline</section>
      </section>

      <section className="border border-input rounded-lg mb-4 px-4 py-2">
        <section className="py-3 flex items-center gap-3">
          <section className="flex-3 flex items-center gap-1 px-2">
            <Image
              src="https://www.bettingpros.com/assets/images/logos/soccer/50x50/RBB.webp"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="font-semibold">Real Betis Seville</p>
          </section>
          <section className="flex-1 text-gray-600">
            <OddsItem
              className="bg-amber-50"
              text="O 2.5"
              description="-115"
              image="https://www.bettingpros.com/assets/images/books/pinnacle-icon.png"
              // lastUpdate="Last Updated 2025/4/29 22:00PM"
              lastUpdate={undefined}
            />
          </section>
          <section className="flex-1 text-gray-600">
            <OddsItem
              className="bg-amber-50"
              text="+183"
              image="https://www.bettingpros.com/assets/images/books/pinnacle-icon.png"
              lastUpdate="Last Updated 2025/4/29 22:00PM"
            />
          </section>
        </section>

        <section className="py-3 flex items-center gap-3">
          <section className="flex-3 flex items-center gap-1 px-2">
            <Image
              src="https://www.bettingpros.com/assets/images/logos/soccer/50x50/GIR.webp"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="font-semibold">Girona FC</p>
          </section>
          <section className="flex-1 text-gray-600">
            <OddsItem
              className="bg-amber-50"
              text="O 2.5"
              description="-115"
              image="https://www.bettingpros.com/assets/images/books/pinnacle-icon.png"
              lastUpdate="Last Updated 2025/4/29 22:00PM"
            />
          </section>
          <section className="flex-1 text-gray-600">
            <OddsItem
              text="+170"
              image="https://www.bettingpros.com/assets/images/books/fanduel-logo-square.png"
              lastUpdate="Last Updated 2025/4/29 22:00PM"
            />
          </section>
        </section>
      </section>

      <section className="text-center py-2">
        <p className="hover:opacity-50 duration-200 text-primary font-semibold text-sm cursor-pointer">
          View More Odds
        </p>
      </section>
    </section>
  );
}

export default GameOdds;
