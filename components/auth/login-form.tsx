"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
export function LoginForm(){const {register,handleSubmit}=useForm<LoginInput>({resolver:zodResolver(loginSchema)});return <form className="mt-4 space-y-3" onSubmit={handleSubmit(()=>{})}><input {...register("email")} placeholder="Email" className="h-11 w-full rounded-lg border px-3"/><input type="password" {...register("password")} placeholder="Password" className="h-11 w-full rounded-lg border px-3"/><button className="h-11 w-full rounded-full bg-black text-white">Log in</button></form>}
