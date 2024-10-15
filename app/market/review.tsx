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
import { Hook } from "@/lib/hookPerm";
import { ReactNode, useContext, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function ReviewHooks({ children }: { children: ReactNode }) {
  const { hooks } = useContext(DeployContext);

  const perms: Record<number, Hook[]> = useMemo(() => {
    let perms: Record<number, Hook[]> = {};

    hooks.forEach((hook) => {
      for (const i in hook.perms) {
        if (!perms[i]) {
          perms[i] = [];
        }
        perms[i].push(hook);
      }
    });

    return perms;
  }, [hooks]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Review Hooks</DialogTitle>
          <DialogDescription>
            {" "}
            Enable or disable permissions of hooks on your demand.
          </DialogDescription>
        </DialogHeader>
        <section>
          <Table>
            <TableHeader>
              <TableRow>
                {["Permisson", ...hooks.map((h) => h.name)].map((h) => (
                  <TableHead className="select-none">{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(perms).map((perm) => (
                <TableRow>
                  <TableCell className="select-none">
                    {HOOK_PERMISSIONS[Number(perm)]}
                  </TableCell>
                  {hooks.map((h) => (
                    <TableCell className="select-none">
                      {h.perms.includes(Number(perm)) ? (
                        <Switch defaultChecked={true} />
                      ) : (
                        "-"
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
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