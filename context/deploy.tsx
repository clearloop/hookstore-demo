"use client";
import { IDeployContext } from "@/lib/types";
import { Hook } from "@/lib/hookPerm";
import { createContext, ReactNode, useState } from "react";

export const DeployContext = createContext<IDeployContext>({} as any);

export function DeployProvider({ children }: { children: ReactNode }) {
  const [hooks, setHooks] = useState<Hook[]>([]);

  return (
    <DeployContext.Provider
      value={{
        currency0: "UNI",
        currency1: "ETH",
        feeTier: 0,
        tickSpacing: 0,
        hooks,
        addHook: (hook: Hook) => {
          console.log("adding hook ...");
          setHooks([...hooks, hook]);
        },
        removeHook: (hook: Hook) => {
          setHooks(hooks.filter((h: Hook) => h.name !== hook.name));
        },
      }}
    >
      {children}
    </DeployContext.Provider>
  );
}
