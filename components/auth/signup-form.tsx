"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupInput } from "@/lib/validations/auth";
export function SignupForm(){const {register,handleSubmit}=useForm<SignupInput>({resolver:zodResolver(signupSchema)});return <form className="mt-4 space-y-3" onSubmit={handleSubmit(()=>{})}><input {...register("fullName")} placeholder="Full name" className="h-11 w-full rounded-lg border px-3"/><input {...register("email")} placeholder="Email" className="h-11 w-full rounded-lg border px-3"/><input type="password" {...register("password")} placeholder="Password" className="h-11 w-full rounded-lg border px-3"/><input type="password" {...register("confirmPassword")} placeholder="Confirm password" className="h-11 w-full rounded-lg border px-3"/><button className="h-11 w-full rounded-full bg-black text-white">Create account</button></form>}
