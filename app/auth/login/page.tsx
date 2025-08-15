import { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import Nav from "@/components/auth/Nav";

export const metadata: Metadata = {
    title: "CrashTrackr - Iniciar Sesión",
    description: "CrashTrackr - Iniciar Sesión",
    keywords: "NextJS, Tailwindcss"
}

const navLinks = [
    { text: "¿Aún no tienes una cuenta?", action: "Crear una", url:"/auth/register" },
    { text: "¿Olvidaste tu contraseña?", action: "Restablecer", url:"/auth/forgot-password" },
]

const LoginPage = () => {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Iniciar Sesión</h1>
            <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

            <LoginForm />

            <Nav links={ navLinks } />
        </>
    )
}

                     
export default LoginPage;