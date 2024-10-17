"use client";
import { useContext, useMemo, useState } from "react";
import { DeployContext } from "@/context/deploy";
import { Hook } from "@/lib/hookPerm";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HOOK_PERMISSIONS } from "@/lib/constants";

export default function Ordering() {
  const { hooks } = useContext(DeployContext);
  const [step, setStep] = useState<number | undefined>(undefined);
  const [orders, setOrders] = useState<Hook[]>([]);

  const perms: Record<number, Hook[]> = useMemo(() => {
    let perms: Record<number, Hook[]> = {};

    hooks.forEach((hook) => {
      hook.perms.forEach((perm) => {
        if (!perms[perm]) perms[perm] = [];
        perms[perm].push(hook);
      });
    });

    return perms;
  }, [hooks]);

  return (
    <main className="px-12 flex flex-col">
      <h1 className="text-2xl pb-1">Ordering</h1>
      <div className="text-sm pb-2 flex justify-between w-full flex-row text-gray-300">
        Set the orders of your hooks here!
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>#</TableHead>
            {Object.keys(perms).map((perm, idx) => (
              <TableHead>{HOOK_PERMISSIONS[Number(perm)]}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {hooks.map((hook, idx) => {
            return (
              <TableRow className="hover:bg-transparent">
                <TableCell>{idx}</TableCell>
                {Object.keys(perms).map((perm, hidx) => (
                  <TableCell key={hidx}>
                    <div className="flex flex-row items-center space-x-2">
                      <Button variant="ghost" size="icon" disabled={idx === 0}>
                        <ArrowUpIcon size={16} />
                      </Button>
                      <div>
                        {hook.perms.includes(Number(perm)) ? hook.name : "-"}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={idx + 1 === hooks.length}
                      >
                        <ArrowDownIcon size={16} />
                      </Button>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
        <TableCaption>
          You have selected <span className="text-primary">2</span> hooks with{" "}
          <span className="text-primary">3</span> permissions for your pool.
        </TableCaption>
      </Table>
      {/* <main className="px-12 flex flex-row h-full">
      <Sidebar
        hooks={hooks}
        orders={orders}
        setOrders={setOrders}
        step={step}
        setStep={setStep}
      />
      <section className="flex flex-col space-y-6 grow items-center justify-center h-full">
        <h2 className="text-xl font-bold">
          Set the orders of your hooks for <Badge>Before Initialize</Badge>{" "}
          here!
        </h2>
        {orders.map((hook, idx) => (
          <div key={idx} className="flex flex-row space-x-6 items-center">
            <Button variant="ghost" size="icon" disabled={idx === 0}>
              <ArrowUpIcon />
            </Button>
            <div className="border p-3 rounded-md">
              <div>{hook.name}</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              disabled={idx + 1 === orders.length}
            >
              <ArrowDownIcon />
            </Button>
          </div>
        ))}
      </section>
    </main> */}
    </main>
  );
}
