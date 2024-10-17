import { ConnectButton } from "@rainbow-me/rainbowkit";
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
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <section className="py-3 flex flex-row items-center justify-between px-6">
        <div className="space-x-2 flex flex-row items-end items-center">
          <Link
            href="/"
            className="text-pink-500 font-bold select-none hover:cursor-pointer text-xl"
          >
            Hookstore
          </Link>
          <Slash size={16} className="text-gray-400" />
          <div className="flex flex-row items-center space-x-1 text-sm">
            <div className="font-bold select-none hover:cursor-pointer">
              My First Pool
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="px-1">
                  <ChevronsUpDown size={18} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-auto">
                <Command>
                  <CommandList>
                    <div className="pl-3 text-sm font-bold pt-2">Pools</div>
                    <CommandGroup>
                      <CommandItem className="flex flex-row space-x-1 font-bold">
                        <WavesIcon size={18} />
                        <div>My First Pool</div>
                        <CheckIcon size={18} />
                      </CommandItem>
                      <CommandItem className="flex flex-row space-x-1">
                        <WavesIcon size={18} />
                        <div>My Second Pool</div>
                      </CommandItem>
                    </CommandGroup>
                    <div className="pl-3 text-sm font-bold">Hooks</div>
                    <CommandGroup>
                      <CommandItem className="flex flex-row space-x-1">
                        <WebhookIcon size={18} />
                        <div>My First Hook</div>
                      </CommandItem>
                      <CommandItem className="flex flex-row space-x-1">
                        <WebhookIcon size={18} />
                        <div>My Second Hook</div>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup>
                      <CommandItem className="flex flex-row space-x-1">
                        <CirclePlusIcon size={18} />
                        <div>Create Pool</div>
                      </CommandItem>
                      <CommandItem className="flex flex-row space-x-1">
                        <CirclePlusIcon size={18} />
                        <div>Create Hook</div>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="text-xs">
          <ConnectButton label="Connect" />
        </div>
      </section>
    </nav>
  );
}
