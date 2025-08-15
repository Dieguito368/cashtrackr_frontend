"use server";

export const register = async (formData: FormData) => {
    console.log(formData);

    const registerData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    }
} 