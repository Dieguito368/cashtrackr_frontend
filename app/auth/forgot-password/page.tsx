import { Metadata } from "next";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import Link from "next/link";
import Nav from "@/components/auth/Nav";

export const metadata: Metadata = {
    title: "CrashTrackr - Olvidé mi password",
    description: "CrashTrackr - Iniciar Sesión",
    keywords: "NextJS, Tailwindcss"
}

const navLinks = [
    { text: "¿Ya tienes una cuenta?", action: "Iniciar Sesión", url:"/auth/login" },
    { text: "¿Aún no tienes una cuenta?", action: "Crear una", url:"/auth/register" },
]

const ForgotPasswordPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
            <p className="text-3xl font-bold">aqui puedes <span className="text-amber-500">restablecerla</span></p>

            <ForgotPasswordForm />

            <Nav links={ navLinks}/>
        </>
    )
}

export default ForgotPasswordPage;