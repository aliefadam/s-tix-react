import LoginBrand from "@/Components/Auth/LoginBrand";
import LoginForm from "@/Components/Auth/LoginForm";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

function Login({ title }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout title={title}>
            <main className="shadow-md md:w-[70%] w-[90%] grid md:grid-cols-2 grid-cols-1 rounded-md overflow-hidden">
                <LoginBrand />
                <LoginForm
                    handleLogin={handleLogin}
                    data={data}
                    setData={setData}
                    processing={processing}
                />
            </main>
        </AuthLayout>
    );
}

export default Login;
