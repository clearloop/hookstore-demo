import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const CATEGORIES = [
  "Truncated Oracle",
  "Limit Order",
  "Volatility Oracle",
  "TWAMM",
  "Geomean Oracle",
  "Full Range",
];

export default function Home() {
  return (
    <main className="h-screen px-12">
      <section className="py-6 space-x-6 flex flex-row items-end text-xl">
        <div className="text-pink-500 font-bold ">Hookstore</div>
        <Link href="/explore">
          <div className="text-gray-500 text-lg">Explore</div>
        </Link>
        <Link href="/create">
          <div className="text-gray-500 text-lg">Create</div>
        </Link>
      </section>
      <section className="py-12 text-3xl font-bold w-full flex justify-center pb-16">
        Create Uniswap V4 pools within clicks, earn profits from developing
        hooks.
      </section>
      <section className="flex flex-row">
        <div className="w-1/5">
          <div>Hook Category</div>
          <div className="flex flex-col space-y-3 pt-3">
            {CATEGORIES.map((i, n) => (
              <HookCategory key={n} id={n} name={i} />
            ))}
          </div>
        </div>
        <div className="w-full items-end flex flex-col">
          <div className="flex flex-row space-x-6">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="42">All</SelectItem>
                <SelectItem value="0">Uniswap Labs</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Hook Access" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="42">All</SelectItem>
                <SelectItem value="0">Before Initialize</SelectItem>
                <SelectItem value="1">After Initialize</SelectItem>
                <SelectItem value="2">Before Add Liquidity</SelectItem>
                <SelectItem value="3">After Add Liquidity</SelectItem>
                <SelectItem value="4">Before Remove Liquidity</SelectItem>
                <SelectItem value="5">After Remove Liquidity</SelectItem>
                <SelectItem value="6">Before Swap</SelectItem>
                <SelectItem value="7">After Swap</SelectItem>
                <SelectItem value="8">Before Donate</SelectItem>
                <SelectItem value="9">After Donate</SelectItem>
                <SelectItem value="10">Before Swap Return Delta</SelectItem>
                <SelectItem value="11">After Swap Return Delta</SelectItem>
                <SelectItem value="12">
                  After Add Liquidity Return Data
                </SelectItem>
                <SelectItem value="13">
                  After Remove Liquidity Return Data
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </main>
  );
}

function HookCategory({ id, name }: { id: number; name: string }) {
  return (
    <div className="flex flex-row space-x-2 select-none">
      <Checkbox id={id.toString()} />
      <label
        htmlFor={id.toString()}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
      >
        {name}
      </label>
    </div>
  );
}
