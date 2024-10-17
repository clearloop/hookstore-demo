"use client";
import { DeployContext } from "@/context/deploy";
import { useContext } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Link from "next/link";

export default function Footer() {
  const { hooks } = useContext(DeployContext);

  return (
    <section className="py-3 border-t text-xs">
      <div className="px-12 flex flex-row justify-between">
        <div className="flex flex-row items-center space-x-6">
          <div className="border rounded-md flex flex-row">
            <div className="border-r bg-secondary rounded-l-md">
              <div className="p-2">Pair</div>
            </div>{" "}
            <div className="p-2">UNI / ETH</div>
          </div>

          <div className="border rounded-md flex flex-row">
            <div className="border-r bg-secondary rounded-l-md">
              <div className="p-2">Fee Tier</div>
            </div>{" "}
            <div className="p-2">0.30%</div>
          </div>

          <div className="border rounded-md flex flex-row">
            <div className="border-r bg-secondary rounded-l-md">
              <div className="p-2">Tick spacing</div>
            </div>{" "}
            <div className="p-2">60</div>
          </div>

          <div className="border rounded-md flex flex-row">
            <div className="border-r bg-secondary rounded-l-md">
              <div className="p-2">Hooks</div>
            </div>{" "}
            <div className="p-2">{hooks.length}</div>
          </div>
        </div>
        <div className="space-x-6">
          <Link
            href="/my-first-pool/settings"
            className="text-primary hover:underline"
          >
            Edit
          </Link>

          <Button
            className="text-xs"
            size="sm"
            onClick={() => toast.info("Working in progress ...")}
          >
            Deploy
          </Button>
        </div>
      </div>
    </section>
  );
}
