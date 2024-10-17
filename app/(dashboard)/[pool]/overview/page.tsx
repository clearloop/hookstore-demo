import { Button } from "@/components/ui/button";

export default function Overview() {
  return (
    <main className="px-12">
      <section>
        <h2 className="flex flex-row justify-between">
          <div className="text-2xl">Overview</div>
          <div className="flex flex-row space-x-2 items-center">
            <div>0 ETH</div>
            <Button size="sm">Collect Fees</Button>
          </div>
        </h2>
        <div className="flex flex-row py-6 justify-start space-x-6">
          <div className="border p-6 rounded-md bg-secondary">Hooks: 2</div>
          <div className="border p-6 rounded-md bg-secondary">Txns: 42</div>
          <div className="border p-6 rounded-md bg-secondary">
            Revenue: 0 ETH
          </div>
        </div>
      </section>
    </main>
  );
}
