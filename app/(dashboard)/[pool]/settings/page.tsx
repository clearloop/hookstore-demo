import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <main className="px-12 w-full flex items-center justify-center">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>My First Pool</CardTitle>
        </CardHeader>
        <CardContent>Select Pair</CardContent>
      </Card>
    </main>
  );
}
