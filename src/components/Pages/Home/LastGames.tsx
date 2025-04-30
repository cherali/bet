"use client";
import { useState } from "react";
import { Button } from "@/components/basics/button";
import { cn } from "@/utils/uiUtils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/basics/table";
import Image from "next/image";

const games = [
  {
    date: "2/16/25",
    opponent: {
      name: "RSO",
      logo: "https://www.bettingpros.com/assets/images/logos/soccer/50x50/RSO.webp",
    },
    score: {
      state: "W",
      text: "3-0",
    },
    total: {
      state: "O",
      rank: 1,
      text: 2,
    },
    moneyLine: {
      state: "W",
      text: "+140",
    },
  },
  {
    date: "2/23/25",
    opponent: {
      name: "@GET",
      logo: "https://www.bettingpros.com/assets/images/logos/soccer/50x50/GET.webp",
    },
    score: {
      state: "W",
      text: "2-1",
    },
    total: {
      state: "O",
      rank: 1,
      text: 2,
    },
    moneyLine: {
      state: "W",
      text: "+192",
    },
  },
  {
    date: "3/01/25",
    opponent: {
      name: "RMA",
      logo: "https://www.bettingpros.com/assets/images/logos/soccer/50x50/RMA.webp",
    },
    score: {
      state: "W",
      text: "2-1",
    },
    total: {
      state: "P",
      rank: 0,
      text: 3,
    },
    moneyLine: {
      state: "W",
      text: "+379",
    },
  },
  {
    date: "3/09/25",
    opponent: {
      name: "LPA",
      logo: "https://www.bettingpros.com/assets/images/logos/soccer/50x50/LPA.webp",
    },
    score: {
      state: "W",
      text: "1-0",
    },
    total: {
      state: "U",
      rank: -1,
      text: 2.75,
    },
    moneyLine: {
      state: "W",
      text: "-219",
    },
  },
  {
    date: "4/05/25",
    opponent: {
      name: "@BAR",
      logo: "https://www.bettingpros.com/assets/images/logos/soccer/50x50/BAR.webp",
    },
    score: {
      state: "W",
      text: "1-1",
    },
    total: {
      state: "U",
      rank: -1,
      text: 3.5,
    },
    moneyLine: {
      state: "L",
      text: "+700",
    },
  },
];

function LastGames() {
  const [value, setValue] = useState("RBB");

  const [sort, setSort] = useState("asc");

  const handleClick = (value: string) => () => {
    setValue(value);
  };

  const toggleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const sortedGames = games.sort((a, b) =>
    sort == "asc"
      ? new Date(a.date).getTime() - new Date(b.date).getTime()
      : new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="-page-section">
      <section className="flex items-center justify-between">
        <section className="flex gap-2 items-center">
          <span className="size-6 text-white bg-primary p-1 rounded-full flex items-center justify-center">
            <span className="text-xs">vs</span>
          </span>
          <h3 className="font-bold text-lg">Last 10 Games</h3>
        </section>

        <section className="flex gap-2">
          <Button
            variant="ghost"
            className={cn(
              "rounded-full border border-input h-10 ",
              value === "RBB" && "button-active",
            )}
            onClick={handleClick("RBB")}
          >
            RBB
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "rounded-full border border-input h-10 ",
              value === "GIR" && "button-active",
            )}
            onClick={handleClick("GIR")}
          >
            GIR
          </Button>
        </section>
      </section>

      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" cursor-pointer" onClick={toggleSort}>
                <span className="inline-flex gap-1.5 items-center select-none">
                  <span>Date</span>
                  <span className="flex flex-col text-xs scale-y-50">
                    <span
                      className={cn(
                        "text-gray-400/50",
                        sort == "asc" && "text-primary duration-300",
                      )}
                    >
                      ▲
                    </span>
                    <span
                      className={cn(
                        "text-gray-400/50",
                        sort == "desc" && "text-primary duration-300",
                      )}
                    >
                      ▼
                    </span>
                  </span>
                </span>
              </TableHead>
              <TableHead className="text-center">Opponent</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Moneyline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border border-input">
            {sortedGames.slice(0, 10).map(game => (
              <TableRow key={game.date}>
                <TableCell className="font-medium">{game.date}</TableCell>
                <TableCell>
                  <span className="flex items-center">
                    <Image
                      src={game.opponent.logo}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">{game.opponent.name}</span>
                  </span>
                </TableCell>

                <TableCell className="cursor-pointer text-primary!">
                  {game.score.state} {game.score.text}
                </TableCell>

                <TableCell>
                  <span
                    className={cn(
                      game.total.rank >= 1 && "text-green-600",
                      game.total.rank <= -1 && "text-red-600",
                    )}
                  >
                    {game.total.state}
                  </span>
                  <span> {game.total.text}</span>
                </TableCell>

                <TableCell className="cursor-pointer">
                  <span
                    className={cn(
                      game.moneyLine.state == "W" && "text-green-600",
                      game.moneyLine.state == "L" && "text-red-600",
                    )}
                  >
                    {game.moneyLine.state}
                  </span>
                  <span> {game.moneyLine.text}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <section className="text-center py-2 mt-2">
          <p className="hover:opacity-50 duration-200 text-primary font-semibold text-sm cursor-pointer">
            View and Filter More SOCCER Game Trends
          </p>
        </section>
      </section>
    </section>
  );
}

export default LastGames;
