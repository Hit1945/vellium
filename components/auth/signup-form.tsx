"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({ fullName: z.string().min(2), email: z.string().email(), password: z.string().min(8), confirm: z.string().min(8) }).refine((d) => d.password === d.confirm, { message: "Passwords must match", path: ["confirm"] });

export function SignupForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });
  return <form onSubmit={handleSubmit(() => {})} className="space-y-3"><input {...register("fullName")} placeholder="Full name" className="h-11 w-full rounded-lg border px-3"/><input {...register("email")} placeholder="Email" className="h-11 w-full rounded-lg border px-3"/><input type="password" {...register("password")} placeholder="Password" className="h-11 w-full rounded-lg border px-3"/><input type="password" {...register("confirm")} placeholder="Confirm password" className="h-11 w-full rounded-lg border px-3"/><Button className="w-full">Create account</Button></form>;
}
