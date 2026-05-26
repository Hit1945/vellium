import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return <main className="flex min-h-screen items-center justify-center p-6"><div className="w-full max-w-md space-y-4 rounded-2xl border bg-white p-6"><h1 className="text-2xl font-semibold">Welcome back</h1><p>Log in to continue where you left off.</p><LoginForm /><p className="text-sm">Don't have an account? <Link href="/auth/signup" className="underline">Sign up</Link></p></div></main>;
}
