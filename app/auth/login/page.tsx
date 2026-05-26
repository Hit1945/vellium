import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
export default function Page(){return <div className="grid min-h-screen place-items-center p-4"><div className="w-full max-w-md rounded-2xl border bg-white p-6"><h1 className="text-2xl font-semibold">Welcome back</h1><p className="text-sm text-stone-500">Log in to continue where you left off.</p><LoginForm/><p className="mt-4 text-sm">Don&apos;t have an account? <Link href="/auth/signup" className="underline">Sign up</Link></p></div></div>}
