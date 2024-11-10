import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <main className="px-12 w-full flex items-center justify-center">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Pool Settings</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="My First Pool"
              value="My First Pool"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pair">Pair</Label>
            <div id="pair" className="flex flex-row space-x-6">
              <Select defaultValue="uni">
                <SelectTrigger>
                  <SelectValue placeholder="Select a token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="uni">UNI</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select defaultValue="eth">
                <SelectTrigger>
                  <SelectValue placeholder="Select a token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="uni">UNI</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fee">Fee Tier</Label>
            <div className="flex flex-row items-center">
              <Input
                id="fee"
                type="text"
                placeholder="Fee Tier"
                value="0.03"
                className="border-r-transparent border-r-0 rounded-r-none"
              />
              <div className="border py-[0.43rem] rounded-md w-8 rounded-l-none items-center justify-center flex">
                %
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tick-spacing">Tick Spacing</Label>
            <Input
              id="tick-spacing"
              type="number"
              placeholder="Tick Spacing"
              value="60"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Parameters (optional)</Label>
            <Input id="name" type="file" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
