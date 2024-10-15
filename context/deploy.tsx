"use client";
import { IDeployContext, IHook } from "@/lib/types";
import { createContext, ReactNode, useState } from "react";

export const DeployContext = createContext<IDeployContext>({} as any);

export function DeployProvider({ children }: { children: ReactNode }) {
  const [hooks, setHooks] = useState<IHook[]>([]);

  return (
    <DeployContext.Provider
      value={{
        currency0: "UNI",
        currency1: "ETH",
        feeTier: 0,
        tickSpacing: 0,
        hooks,
        addHook: (hook: IHook) => {
          console.log("adding hook ...");
          setHooks([...hooks, hook]);
        },
        removeHook: (hook: IHook) => {
          setHooks(hooks.filter((h: IHook) => h.name !== hook.name));
        },
      }}
    >
      {children}
    </DeployContext.Provider>
  );
}
