import { z } from "zod";

export const RegisterSchema = z.object({
    email: z
        .string()
        .nonempty("El email no puede ir vacío")
        .regex(/^(?!\.)(?!.*\.\.)[A-Za-z0-9_'+\-\.]+@[A-Za-z0-9][A-Za-z0-9\-]*(\.[A-Za-z]{2,})+$/, "Email no válido"),
    name: z
        .string()
        .nonempty("El nombre no puede ir vacío"),
    password: z
        .string()
        .nonempty("La contraseña no puede ir vacía")
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
        password_confirmation: z
        .string()
        .nonempty("La confirmación de contraseña no puede ir vacía")
}).refine(data => data.password === data.password_confirmation, {
    error: "Las contraseñas no coinciden",
    path: [ "password_confirmation" ]
});

export const RegisterResponseAPISchema = z.object({
    ok: z.boolean(),
    message: z.string()
})  
