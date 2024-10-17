import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeployContext } from "@/context/deploy";
import { HOOK_PERMISSIONS } from "@/lib/constants";
import { Hook, HookPermisson } from "@/lib/hookPerm";
import { ReactNode, useContext, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function ReviewHooks({ children }: { children: ReactNode }) {
  const { hooks } = useContext(DeployContext);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Review Hooks</DialogTitle>
        </DialogHeader>
        <section>
          <Tabs defaultValue="permissions" className="">
            <TabsList>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="permissions">
              <PermissionTable hooks={hooks} />
            </TabsContent>
            <TabsContent value="orders">
              <OrderTable hooks={hooks} />
            </TabsContent>
          </Tabs>

          <div className="w-full pt-6">
            <DialogClose asChild>
              <Button className="w-full">Save Changes</Button>
            </DialogClose>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}

function PermissionTable({ hooks }: { hooks: Hook[] }) {
  const perms: HookPermisson[] = useMemo(() => {
    let perms: HookPermisson[] = [];

    hooks.forEach((hook) => {
      perms = [...perms, ...hook.perms];
    });

    return perms
      .filter(function (item, pos) {
        return perms.indexOf(item) == pos;
      })
      .toSorted();
  }, [hooks]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Permission</TableHead>
          {hooks.map((h) => (
            <TableHead className="select-none">
              <div className="flex flex-row items-center space-x-1">
                <div>{h.name}</div>
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {perms.map((perm, idx) => (
          <TableRow key={idx}>
            <TableCell className="select-none">
              {HOOK_PERMISSIONS[perm]}
            </TableCell>
            {hooks.map((h) => (
              <TableCell className="select-none">
                {h.perms.includes(perm) ? (
                  <Switch defaultChecked={true} />
                ) : (
                  "-"
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        Enable or disable permissions of hooks on your demand.
      </TableCaption>
    </Table>
  );
}

function OrderTable({ hooks }: { hooks: Hook[] }) {
  const perms: Record<number, string[]> = useMemo(() => {
    let perms: Record<number, string[]> = {};

    hooks.forEach((hook) => {
      hook.perms.forEach((perm) => {
        if (!perms[perm]) perms[perm] = [];
        perms[perm].push(hook.name);
      });
    });

    return perms;
  }, [hooks]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Permission</TableHead>
          {Object.keys(perms).map((idx) => (
            <TableHead key={idx}>
              <TableCell>{HOOK_PERMISSIONS[Number(idx)]}</TableCell>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(perms).map((idx) => (
          <TableRow key={idx}>
            <TableCell>{HOOK_PERMISSIONS[Number(idx)]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Manage the exuection orders of hooks</TableCaption>
    </Table>
  );
}
