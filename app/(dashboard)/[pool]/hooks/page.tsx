"use client";
import { DeployContext } from "@/context/deploy";
import { useContext, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Hook } from "@/lib/hookPerm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EclipseIcon, GithubIcon, LeafyGreenIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function Hooks() {
  const { hooks } = useContext(DeployContext);
  const [hook, setHook] = useState<Hook | undefined>(undefined);

  useEffect(() => {
    if (!hook && hooks.length > 0) {
      setHook(hooks[0]);
    }
  }, [hook, hooks, setHook]);

  return (
    <main className="px-16 flex flex-row space-x-12 w-full">
      <Sidebar hooks={hooks} setHook={setHook} />
      {!hook && (
        <section>
          No hooks installed,{" "}
          <Link href="/" className="underline text-primary">
            go to hookstore
          </Link>
        </section>
      )}
      {hook && (
        <section className="flex flex-col grow">
          <h1 className="text-2xl font-bold flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <div>{hook.name}</div>{" "}
              <div className="border p-1 rounded-sm hover:cursor-pointer">
                <EclipseIcon size={18} />
              </div>
              <div className="border p-1 rounded-sm hover:cursor-pointer">
                <GithubIcon size={18} />
              </div>
            </div>
            <Button variant="ghost" className="text-primary">
              remove
            </Button>
          </h1>
          <div className="py-3 flex flex-row space-x-6 text-sm">
            <div className="p-1 border rounded-md bg-secondary flex flex-row items-center space-x-2">
              <LeafyGreenIcon size={16} />
              <span className="text-primary">Free</span>
            </div>
            <div className="p-1 border rounded-md bg-secondary">
              Authored by <span className="text-primary">{hook.author}</span>
            </div>
            <div className="p-1 border rounded-md bg-secondary">
              Audits <span className="text-primary">5+</span>
            </div>
            <div className="p-1 border rounded-md bg-secondary">
              Ranking <span className="text-primary">#3</span>
            </div>
            <div className="p-1 border rounded-md bg-secondary">
              Used by <span className="text-primary">42</span> pools
            </div>
          </div>
          <div>{hook.desc}</div>
          <div className="py-6">
            <h2 className="text-xl font-bold flex flex-row justify-between pb-1">
              <div>
                Before Initialize <Badge>required</Badge>
              </div>
              <Switch defaultChecked={true} />
            </h2>
            <p className="text-sm text-gray-400 pb-2">
              Charges 0% on this operation
            </p>
            <p>Register pool to global state</p>
          </div>
          <div className="py-6">
            <h2 className="text-xl font-bold flex flex-row justify-between pb-1">
              <div>Before Add Liqudity</div>
              <Switch defaultChecked={true} />
            </h2>
            <p className="text-sm text-gray-400 pb-2">
              Charges 0% on this operation
            </p>
            <p>Fits liquidity into dynamic ranges.</p>
          </div>
          <div className="py-6">
            <h2 className="text-xl font-bold flex flex-row justify-between pb-1">
              <div>
                Before Swap <Badge>required</Badge>
              </div>
              <Switch defaultChecked={true} />
            </h2>
            <p className="text-sm text-gray-400 pb-2">
              Charges 0% on this operation
            </p>
            <p>
              Core feature of this hook, move the range of liquditiy if
              necessary.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
