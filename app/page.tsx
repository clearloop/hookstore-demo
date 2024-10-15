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
import { DeployContext } from "@/context/deploy";
import { HOOKS } from "@/lib/mock";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import ReviewHooks from "./market/review";
import { HOOK_PERMISSIONS } from "@/lib/constants";
import { toast } from "sonner";
import { Hook } from "@/lib/hookPerm";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const CATEGORIES = [
  "All",
  "Limit Order",
  "Volatility Oracle",
  "TWAMM",
  "Geomean Oracle",
  "Full Range",
];

export default function Home() {
  const { hooks } = useContext(DeployContext);
  const { openConnectModal } = useConnectModal();

  return (
    <main className="h-screen flex flex-col">
      <section className="py-6 space-x-6 flex flex-row items-center justify-between text-xl px-12">
        <div className="space-x-6 flex flex-row items-end">
          <Link
            href="/"
            className="text-pink-500 font-bold select-none hover:cursor-pointer"
          >
            Hookstore
          </Link>
          {/* <Link href="/">
          <div className="text-gray-100 text-lg">Marketplace</div>
        </Link> */}
          <Link href="/">
            <div className="text-gray-500 text-lg">Other Features...</div>
          </Link>
        </div>
        <div className="text-sm">
          <ConnectButton label="Connect" />
        </div>
      </section>
      <section className="py-6 text-3xl font-bold w-full flex justify-center pb-10">
        Create Uniswap V4 pools within clicks, earn from developing hooks.
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
            <SelectValue placeholder="Hook Permission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="42">All</SelectItem>
            {HOOK_PERMISSIONS.map((p, i) => (
              <SelectItem key={i} value={i.toString()}>
                {p}
              </SelectItem>
            ))}
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
                <SelectItem value="42">Start a new Pool</SelectItem>
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
              <div className="p-2">{hooks.length}</div>
            </div>
          </div>
          <div className="space-x-6">
            <Button variant="link">Edit Pool</Button>
            <ReviewHooks>
              <Button variant="link">Review Hooks</Button>
            </ReviewHooks>
            <Button onClick={() => toast.info("Working in progress ...")}>
              Deploy
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function HookCategory({ id, name }: { id: number; name: string }) {
  return (
    <div className="flex flex-row space-x-2 select-none">
      <Checkbox id={id.toString()} defaultChecked={true} />
      <label
        htmlFor={id.toString()}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-pointer"
      >
        {name}
      </label>
    </div>
  );
}

function HookSpec({ hook }: { hook: Hook }) {
  const { hooks, addHook, removeHook } = useContext(DeployContext);
  const installed = useMemo(() => {
    if (hooks.find((h) => h.name === hook.name)) {
      return true;
    } else {
      return false;
    }
  }, [hooks, hook]);

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-end">
        <CardTitle className="text-xl">{hook.name}</CardTitle>
        <div
          className={cn(
            "text-sm rounded-md py-1 px-2 hover:cursor-pointer border select-none",
            installed
              ? "hover:underline hover:text-primary border-transparent"
              : "bg-primary"
          )}
          onClick={() => (installed ? removeHook(hook) : addHook(hook))}
        >
          {installed ? "remove" : "install"}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{hook.desc}</CardContent>
      <CardFooter className="text-xs">@{hook.author}</CardFooter>
    </Card>
  );
}
