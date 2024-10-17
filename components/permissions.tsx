"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownSquareIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

export default function SelectPermissions({
  perm,
  setPerm,
}: {
  perm: number;
  setPerm: (_perm: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {"Select permission..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}