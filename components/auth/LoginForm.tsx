"use client";

const LoginForm = () => {
    return (
        <form
            className="mt-14 space-y-5"
            noValidate
        >
            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="email"
                >Email</label>

                <input
                    autoComplete="email"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-purple-800"
                    id="email"
                    name="email"
                    placeholder="Email de Registro"
                    type="email"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-2xl"
                    htmlFor="password"
                >Password</label>

                <input
                    autoComplete="new-password"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-purple-800"
                    name="password"
                    placeholder="Password de Registro"
                    type="password"
                    id="password"
                />
            </div>

            <input
                type="submit"
                value='Iniciar Sesión'
                className="
                    bg-purple-950 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer transition
                    hover:bg-purple-800
                "
            />
        </form>
    )
}

export default LoginForm
