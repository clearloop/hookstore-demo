"use client";
import { HOOK_PERMISSIONS } from "@/lib/constants";
import { Hook } from "@/lib/hookPerm";
import { cn } from "@/lib/utils";
import { useEffect, useMemo } from "react";

export default function Sidebar({
  hooks,
  setOrders,
  setStep,
  step,
}: {
  hooks: Hook[];
  setOrders: (_orders: Hook[]) => void;
  setStep: (_step: number) => void;
  step?: number;
}) {
  const perms: Record<number, Hook[]> = useMemo(() => {
    const perms: Record<number, Hook[]> = {};

    hooks.forEach((hook) => {
      hook.perms.forEach((perm) => {
        if (!perms[perm]) perms[perm] = [];
        perms[perm].push(hook);
      });
    });

    return perms;
  }, [hooks]);

  useEffect(() => {
    if (!step && Object.keys(perms).length > 0) {
      setStep(hooks[0].perms[0]);
      setOrders(perms[hooks[0].perms[0]]);
    }
  }, [perms, setOrders, hooks, setStep, step]);

  return (
    <section className="flex flex-col space-y-3">
      <div className="font-bold text-sm text-gray-400">Lifecycle</div>
      <div className="flex flex-col space-y-2 text-sm">
        {Object.keys(perms).map((perm, idx) => (
          <div
            key={idx}
            className={cn(
              "hover:bg-secondary hover:cursor-pointer p-1 select-none rounded-sm flex flex-row space-x-2 items-center text-gray-400",
              step === Number(perm) && "text-gray-200 font-bold bg-secondary"
            )}
            onClick={() => setStep(Number(perm))}
          >
            <div>{HOOK_PERMISSIONS[Number(perm)]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
