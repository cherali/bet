import { BellRing } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/basics/button";
import { TooltipProvider } from "@/components/basics/tooltip";
import AppSelect from "@/components/elements/AppSelect/AppSelect";
import BetSignalItem from "./BetSignalItem";

function BetSignals() {
  return (
    <section className="-page-section">
      <section className="flex items-center justify-between">
        <section className="flex gap-2 items-center">
          <BellRing className="size-6 text-white bg-primary p-1 rounded-full" />
          <h3 className="font-bold text-lg">Bet Signals</h3>
        </section>
        <section>
          <AppSelect
            defaultValue="moneyline"
            options={[
              {
                value: "moneyline",
                label: "Moneyline",
              },
              {
                value: "totalGoals",
                label: "Total Goals",
              },
            ]}
            placeholder="Select"
            className="w-48"
          />
        </section>
      </section>
      <TooltipProvider>
        <section className="mt-4 flex gap-2">
          <section className="rounded-lg border border-input flex-1 py-4 flex items-center justify-center h-72">
            <BetSignalItem
              image="https://www.bettingpros.com/assets/images/logos/soccer/100x100/RBB.webp"
              name="Real Betis Seville"
              count={170}
              percentage={100}
              money={0}
            />
            <section className="px-2 h-full">
              <span className="h-16 block" />
              <p className="text-gray-500 font-semibold text-sm mt-0.5">VS</p>
            </section>
            <BetSignalItem
              image="https://www.bettingpros.com/assets/images/logos/soccer/100x100/RBB.webp"
              name="Real Betis Seville"
              count={170}
              percentage={100}
              money={0}
            />
          </section>

          <section className="rounded-lg border border-input flex-1 bg-primary/10 text-center py-4 h-80 flex flex-col justify-between items-center">
            <section>
              <p className="text-sm font-semibold">Custom Line Alerts</p>
            </section>

            <section>
              <Image
                alt="alert"
                src="https://www.bettingpros.com/assets/icons/line-alert.svg"
                width={185}
                height={164}
              />
            </section>

            <section className="mb-4">
              <p className="text-xs text-gray-600">
                Download the app to set custom line alerts
              </p>
              <Button className="text-xs h-10 mt-2 cursor-pointer">
                Get The App
              </Button>
            </section>
          </section>
        </section>
      </TooltipProvider>
    </section>
  );
}

export default BetSignals;
