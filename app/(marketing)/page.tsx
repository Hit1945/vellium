import Link from "next/link";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-emerald-100 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 flex items-center justify-between rounded-full bg-white/70 px-6 py-3 backdrop-blur">
          <div className="flex items-center gap-2 font-semibold"><Layers className="size-5"/>Vellium</div>
          <div className="flex gap-2"><Link href="/auth/login">Login</Link><Link href="/auth/signup"><Button>Get Started</Button></Link></div>
        </header>
        <section className="text-center">
          <h1 className="text-5xl font-semibold">A visual planner built for real life.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">Turn tasks into structured plans with timelines, breakdowns and intelligent organization.</p>
          <Link href="/auth/signup" className="mt-8 inline-block"><Button className="h-11 px-8">Start planning</Button></Link>
        </section>
      </div>
    </main>
  );
}
