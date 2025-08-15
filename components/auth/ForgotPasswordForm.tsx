"use client";

const ForgotPasswordForm = () => {
    return (
        <form
            className=" mt-14 space-y-5"
            noValidate
        >
            <div className="flex flex-col gap-2 mb-10">
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

            <input
                className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer transition"
                type="submit"
                value='Enviar Instrucciones'
            />
        </form>
    )
}

export default ForgotPasswordForm;