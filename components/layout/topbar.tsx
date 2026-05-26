import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-200 px-6">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <Button className="h-9"><Plus className="mr-2 size-4"/>Quick add</Button>
        <Bell className="size-5" />
      </div>
    </header>
  );
}
