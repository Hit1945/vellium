import Link from "next/link";
import { Bell, CalendarDays, CheckSquare, FileText, Layers, Settings, Star } from "lucide-react";

const items = [
  ["/app/notes", "All Notes", FileText],
  ["/app/tasks", "Tasks", CheckSquare],
  ["/app/calendar", "Calendar", CalendarDays],
  ["/app/reminders", "Reminders", Bell],
  ["/app/starred", "Starred", Star],
  ["/app/settings", "Settings", Settings]
] as const;

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-neutral-200 p-4">
      <div className="mb-6 flex items-center gap-2 font-semibold"><Layers className="size-5"/>Vellium</div>
      <nav className="space-y-1">
        {items.map(([href, label, Icon]) => (
          <Link key={href} href={href} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-neutral-100">
            <Icon className="size-4" />{label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
