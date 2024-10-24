import { Hook } from "@/lib/hookPerm";
import { cn } from "@/lib/utils";
import { CircleCheckIcon } from "lucide-react";

export default function Sidebar({
  hooks,
  setHook,
}: {
  hooks: Hook[];
  setHook: (hook: Hook) => void;
}) {
  return (
    <section className="flex flex-col space-y-3">
      <div className="font-bold text-sm text-gray-400">Installed Hooks</div>
      <div className="flex flex-col space-y-2 text-sm">
        {hooks.map((hook, idx) => (
          <div
            key={idx}
            className={cn(
              "hover:bg-secondary hover:cursor-pointer p-1 select-none rounded-sm flex flex-row space-x-2 items-center text-gray-400",
              idx == 0 && "text-gray-200 font-bold bg-secondary"
            )}
            onClick={() => {
              setHook(hook);
            }}
          >
            <CircleCheckIcon size={16} />
            <div>{hook.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
