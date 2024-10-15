"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface IHook {
  name: string;
  desc: string;
  author: string;
  category: string;
  access: string[];
}

const CATEGORIES = [
  "All",
  "Truncated Oracle",
  "Limit Order",
  "Volatility Oracle",
  "TWAMM",
  "Geomean Oracle",
  "Full Range",
];

const HOOKS: IHook[] = [
  {
    name: "TWAMM",
    desc: "A TWAMM (Time Weighted Average Market Maker) is a type of market maker that uses time-weighted averages to cal...",
    author: "Uniswap Labs",
    category: "",
    access: [],
  },
  {
    name: "Geomeaon Oracle",
    desc: "A unique hook making a Uniswap pool function as an oracle. The geomean price is calculated using the prices of ...",
    author: "Uniswap Labs",
    category: "",
    access: [],
  },
  {
    name: "Volatility Oracle",
    desc: "A volatility oracle is a contract that provides information about the volatility of an asset. This information can...",
    author: "Uniswap Labs",
    category: "",
    access: [],
  },
  {
    name: "Full Range",
    desc: "A hook that allows a Uniswap pool to provide liquidity for a range of prices. This can be used to create a mark...",
    author: "Uniswap Labs",
    category: "",
    access: [],
  },
  {
    name: "Truncated Oracle",
    desc: "A truncated oracle is an onchain price oracle that records the price of an asset in a Uniswap liquidity pool using...",
    author: "Uniswap Labs",
    category: "",
    access: [],
  },
];

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <section className="py-6 space-x-6 flex flex-row items-end text-xl px-12">
        <div className="text-pink-500 font-bold ">Hookstore</div>
        <Link href="/explore">
          <div className="text-gray-100 text-lg">Marketplace</div>
        </Link>
        <Link href="/verify">
          <div className="text-gray-500 text-lg">Verify</div>
        </Link>
      </section>
      <section className="py-6 text-3xl font-bold w-full flex justify-center pb-10">
        Create Uniswap V4 pools within clicks, earn profits from developing
        hooks.
      </section>
      <section className="flex flex-row space-x-6 justify-end px-12">
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
            <SelectItem value="12">After Add Liquidity Return Data</SelectItem>
            <SelectItem value="13">
              After Remove Liquidity Return Data
            </SelectItem>
          </SelectContent>
        </Select>
      </section>
      <section className="flex flex-row pt-6 px-12">
        <div className="w-2/5">
          <div>Hook Category</div>
          <div className="flex flex-col space-y-3 pt-3">
            {CATEGORIES.map((i, n) => (
              <HookCategory key={n} id={n} name={i} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Cards should be here */}
          {HOOKS.map((h, idx) => (
            <HookSpec key={idx} hook={h} />
          ))}
        </div>
      </section>
      <section className="flex grow"></section>
      <section className="py-6 border-t">
        <div className="px-12 flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-6">
            <Select defaultValue="0">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Pool" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="42">Create a new Pool</SelectItem>
                <Separator />
                <SelectItem value="0">My First Pool</SelectItem>
                <SelectItem value="1">My Second Pool</SelectItem>
              </SelectContent>
            </Select>

            <div className="border rounded-md flex flex-row text-sm">
              <div className="border-r bg-secondary rounded-l-md">
                <div className="p-2">Pair</div>
              </div>{" "}
              <div className="p-2">UNI / ETH</div>
            </div>

            <div className="border rounded-md flex flex-row text-sm">
              <div className="border-r bg-secondary rounded-l-md">
                <div className="p-2">Fee Tier</div>
              </div>{" "}
              <div className="p-2">0.30%</div>
            </div>

            <div className="border rounded-md flex flex-row text-sm">
              <div className="border-r bg-secondary rounded-l-md">
                <div className="p-2">Tick spacing</div>
              </div>{" "}
              <div className="p-2">60</div>
            </div>

            <div className="border rounded-md flex flex-row text-sm">
              <div className="border-r bg-secondary rounded-l-md">
                <div className="p-2">Hooks</div>
              </div>{" "}
              <div className="p-2">2</div>
            </div>
          </div>
          <div className="space-x-6">
            <Button variant="link">Review Hooks</Button>
            <Button>Deploy</Button>
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

function HookSpec({ hook }: { hook: IHook }) {
  const [installed, setInstalled] = useState(false);
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-end">
        <CardTitle className="text-xl">{hook.name}</CardTitle>
        <div
          className={cn(
            "text-xs rounded-md py-1 px-3 hover:cursor-pointer border select-none",
            installed
              ? "hover:underline hover:text-primary border-transparent"
              : "bg-primary"
          )}
          onClick={() => setInstalled(!installed)}
        >
          {installed ? "remove" : "install"}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{hook.desc}</CardContent>
      <CardFooter className="text-xs">@{hook.author}</CardFooter>
    </Card>
  );
}
