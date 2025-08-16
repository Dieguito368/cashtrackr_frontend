import z from "zod";
import { RegisterResponseAPISchema, RegisterSchema } from "@/shemas";

export type Register = z.infer<typeof RegisterSchema>

export type RegisterResponseAPI = z.infer<typeof RegisterResponseAPISchema>