import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";
export default function Page(){return <div className="grid min-h-screen place-items-center p-4"><div className="w-full max-w-md rounded-2xl border bg-white p-6"><h1 className="text-2xl font-semibold">Create an account</h1><p className="text-sm text-stone-500">Start organizing your life with clarity.</p><SignupForm/><p className="mt-4 text-sm">Already have an account? <Link href="/auth/login" className="underline">Log in</Link></p></div></div>}
