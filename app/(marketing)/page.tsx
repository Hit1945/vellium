import Link from "next/link";
import { Layers } from "lucide-react";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 p-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/80 p-3">
        <div className="flex items-center gap-2 font-semibold"><Layers className="h-5 w-5" /> Vellium</div>
        <div className="flex gap-2"><Link href="/auth/login">Login</Link><Link href="/auth/signup" className="rounded-full bg-black px-4 py-2 text-white">Get Started</Link></div>
      </nav>
      <section className="mx-auto mt-24 max-w-3xl text-center">
        <h1 className="text-5xl font-serif">A visual planner built for real life.</h1>
        <p className="mt-6 text-stone-600">Turn tasks into structured plans with timelines and intelligent organization.</p>
      </section>
    </main>
  );
}
