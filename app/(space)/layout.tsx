import {
  CheckIcon,
  ChevronsUpDown,
  CirclePlusIcon,
  ExpandIcon,
  Slash,
  WavesIcon,
  WebhookIcon,
} from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="mb-6 flex flex-row items-center border-b pb-1 px-6 text-sm">
        <div className="border-separate border-spacing-5 border-slate-500 underline-offset-8 hover:cursor-pointer text-gray-400">
          &nbsp;&nbsp;Overview&nbsp;&nbsp;
        </div>
        <div className="border-separate border-spacing-5 border-slate-500 underline underline-offset-8 hover:cursor-pointer">
          &nbsp;&nbsp;Hooks&nbsp;&nbsp;
        </div>
        <div className="border-separate border-spacing-5 border-slate-500 underline-offset-8 hover:cursor-pointer text-gray-400">
          &nbsp;&nbsp;Ordering&nbsp;&nbsp;
        </div>
        <div className="border-separate border-spacing-5 border-slate-500 underline-offset-8 hover:cursor-pointer text-gray-400">
          &nbsp;&nbsp;Overview&nbsp;&nbsp;
        </div>
        <div className="border-separate border-spacing-5 border-slate-500 underline-offset-8 hover:cursor-pointer text-gray-400">
          &nbsp;&nbsp;Settings&nbsp;&nbsp;
        </div>
      </section>
      {children}
    </>
  );
}
