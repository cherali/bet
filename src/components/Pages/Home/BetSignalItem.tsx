import Image from "next/image";
import { Lock } from "lucide-react";
import { Progress } from "@/components/basics/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/basics/tooltip";

interface BetSignalItemProps {
  image: string;
  name: string;
  count: number;
  percentage: number;
  money: number;
}

function BetSignalItem({
  image,
  name,
  count,
  percentage,
  money,
}: BetSignalItemProps) {
  return (
    <section className="flex flex-col gap-3 items-center">
      <section className="flex flex-col items-center">
        <Image src={image} alt="t1" width={60} height={60} />
        <p className="font-semibold mt-1">{name}</p>
      </section>
      <Tooltip>
        <TooltipTrigger asChild>
          <section className="w-full shadow-sm shadow-gray-200 flex items-center relative h-10 rounded-md text-sm font-semibold cursor-pointer justify-center">
            <span className="me-8 text-gray-600">+{count}</span>

            <Image
              src="https://www.bettingpros.com/assets/images/bettingpros-app-icon.svg"
              width={32}
              height={32}
              className="absolute end-1"
              alt="bg"
            />
          </section>
        </TooltipTrigger>
        <TooltipContent>
          <p>Last Update 29/4/2025 22:00PM</p>
        </TooltipContent>
      </Tooltip>

      <section className="w-full text-center mt-2">
        <p className="text-sm font-semibold">{percentage}% of Bets</p>
        <Progress value={percentage} className="mt-3" />
      </section>

      <Tooltip>
        <TooltipTrigger asChild>
          <section className="w-full text-center mt-2">
            <p className="text-sm font-semibold flex items-center gap-1 justify-center cursor-pointer">
              <span className="bg-amber-400 inline-block p-[5px] rounded-tl-lg rounded-br-lg hover:opacity-60 duration-200">
                <Lock className="size-3 [&_rect]:fill-black" />
              </span>
              <span className="hover:opacity-60 duration-200">of Money</span>
            </p>

            <Progress value={money} className="mt-3" />
          </section>
        </TooltipTrigger>
        <TooltipContent className="w-60">
          <p>
            Represents the % of money bet on a side. A potential bet signal when
            a side is getting a much higher % of money compared to % of bets.
          </p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
}

export default BetSignalItem;
