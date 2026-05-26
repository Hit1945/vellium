import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return <main className="flex min-h-screen items-center justify-center p-6"><div className="w-full max-w-md space-y-4 rounded-2xl border bg-white p-6"><h1 className="text-2xl font-semibold">Create an account</h1><p>Start organizing your life with clarity.</p><SignupForm /><p className="text-sm">Already have an account? <Link href="/auth/login" className="underline">Log in</Link></p></div></main>;
}
