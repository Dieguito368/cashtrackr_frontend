"use client";

import { register } from "@/actions/create-account-action";
import { useActionState } from "react";
import ErrorMessageForm from "../ui/ErrorMessageForm";
import ResponseMessage from "../ui/ResponseMessage";

const RegisterForm = () => {
    const [ state, dispatch ] = useActionState(register, {
        errors: {},
        statusResponse: {
            ok:false,
            message: ""
        }
    });

    return (
        <form
            className="mt-14 space-y-5"
            noValidate
            action={ dispatch }
        >
            <ResponseMessage ok={ state.statusResponse.ok } message={ state.statusResponse.message } />

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="email"
                >Email</label>
                <input
                    autoComplete="email"
                    className="w-full border border-gray-300 p-3 rounded outline-purple-800"
                    id="email"
                    name="email"
                    placeholder="Email de Registro"
                    type="email"
                />

                { state.errors.email && <ErrorMessageForm message={ state.errors.email } /> }
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="name"
                >Nombre</label>
                <input
                    autoComplete="name"
                    className="w-full border border-gray-300 p-3 rounded outline-purple-800"
                    id="name"
                    name="name"
                    placeholder="Nombre de Registro"
                    type="text"
                />

                { state.errors.name && <ErrorMessageForm message={ state.errors.name } /> }
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password"
                >Password</label>
                <input
                    autoComplete="new-password"
                    className="w-full border border-gray-300 p-3 rounded outline-purple-800"
                    id="password"
                    name="password"
                    placeholder="Password de Registro"
                    type="password"
                />
                { state.errors.password && <ErrorMessageForm message={ state.errors.password } /> }
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password_confirmation"
                >Repetir Password</label>
                <input
                    autoComplete="new-password"
                    className="w-full border border-gray-300 p-3 rounded outline-purple-800"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Repite Password de Registro"
                    type="password"
                />
                { state.errors.password_confirmation && <ErrorMessageForm message={ state.errors.password_confirmation } /> }
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="
                    w-full p-3 rounded text-white font-black text-xl cursor-pointer block bg-purple-950 transition-all mt-10
                    hover:bg-purple-800 
                "
            />
        </form>
    )
}

export default RegisterForm
