import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import Nav from "@/components/auth/Nav";

export const metadata: Metadata = {
    title: "CrashTrackr - Crear Cuenta",
    description: "CrashTrackr - Crear Cuenta",
    keywords: "NextJS, Tailwindcss"
}

const navLinks = [
    { text: "¿Ya tienes una cuenta?", action: "Iniciar Sesión", url:"/auth/login" },
]

const RegisterPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crear una cuenta</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <RegisterForm />

            <Nav links={ navLinks } />
        </>
    )
}

export default RegisterPage;