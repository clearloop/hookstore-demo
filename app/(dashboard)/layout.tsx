"use client";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ChevronsUpDown,
  CirclePlusIcon,
  ExpandIcon,
  Slash,
  WavesIcon,
  WebhookIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <section className="mb-6 flex flex-row items-center border-b pb-1 px-6 text-sm">
        {["Overview", "Hooks", "Ordering", "Parameters", "Settings"].map(
          (route) => (
            <Link
              href={`/my-first-pool/${route.toLowerCase()}`}
              className={cn(
                "border-separate border-spacing-5 border-slate-500 underline-offset-8 hover:cursor-pointer text-gray-400",
                pathname.endsWith(route.toLowerCase())
                  ? "underline text-gray-200"
                  : ""
              )}
            >
              &nbsp;&nbsp;{route}&nbsp;&nbsp;
            </Link>
          )
        )}
      </section>
      {children}
    </>
  );
}
