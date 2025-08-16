"use server";

import { RegisterResponseAPISchema, RegisterSchema } from "@/shemas";
import { RegisterResponseAPI } from "@/types";

type ActionStateType = {
    errors: {
        email?: string
        password?: string
        password_confirmation?: string
        name?: string
    },
    statusResponse: RegisterResponseAPI
}

export const register = async (prevState: ActionStateType, formData: FormData) => {
    const registerData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    }

    // Validar
    const result = RegisterSchema.safeParse(registerData);
    
    if(!result.success) {
        let errors: ActionStateType["errors"] = {}

        for(let error of result.error.issues) {
            const property = error.path[0] as keyof ActionStateType["errors"];
            
            if(errors[property]) continue;  

            errors[property] = error.message;
        }

        return { 
            errors,
            statusResponse: {
                ok: false,
                message: ""
            }
        } 
    }

    const url = `${process.env.API_URL}auth/create-account`;

    // Registrar el usuario 
    try {
        const request = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: result.data.name,
                email: result.data.email,
                password: result.data.password
            })
        });

        const json = await request.json();
    
        const resultResponseAPI = RegisterResponseAPISchema.parse(json);
    
        return { 
            errors: {},
            statusResponse: resultResponseAPI
        }
    } catch (error) {
        return {
            errors: {},
            statusResponse: { ok: false, message: "No se pudo conectar con el servidor" }
        }
    }
} 