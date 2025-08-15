"use client";

import { register } from "@/actions/create-account-action";

const RegisterForm = () => {
    return (
        <form
            className="mt-14 space-y-5"
            noValidate
            action={ register }
        >
            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="email"
                >Email</label>
                <input
                    autoComplete="email"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    id="email"
                    name="email"
                    placeholder="Email de Registro"
                    type="email"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="name"
                >Nombre</label>
                <input
                    autoComplete="name"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    id="name"
                    name="name"
                    placeholder="Nombre de Registro"
                    type="text"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password"
                >Password</label>
                <input
                    autoComplete="new-password"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    id="password"
                    name="password"
                    placeholder="Password de Registro"
                    type="password"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password_confirmation"
                >Repetir Password</label>
                <input
                    autoComplete="new-password"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Repite Password de Registro"
                    type="password"
                />
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="
                    w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block bg-purple-950 transition-all
                    hover:bg-purple-800 
                "
            />
        </form>
    )
}

export default RegisterForm
