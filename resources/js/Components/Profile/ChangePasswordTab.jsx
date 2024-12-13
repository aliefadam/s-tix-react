import React from "react";
import InputGroup from "./InputGroup";
import { useForm } from "@inertiajs/react";

function ChangePasswordTab() {
    const { data, setData, put, processing, errors, reset } = useForm({
        old_password: "",
        password: "",
        password_confirmation: "",
    });

    const changePassword = (e) => {
        e.preventDefault();
        put(route("profile.change-password"), {
            onSuccess: () => {
                reset();
                document.activeElement.blur();
            },
        });
    };
    return (
        <div
            className="hidden p-4 rounded-lg"
            id="styled-change-password"
            role="tabpanel"
        >
            <h1 className="text-center text-2xl poppins-semibold text-teal-700">
                Ganti Kata Sandi
            </h1>
            <form
                onSubmit={changePassword}
                action=""
                className="w-1/2 mt-8 ms-auto me-auto"
            >
                <InputGroup
                    id={"kata_sandi_lama"}
                    label={"Kata Sandi Lama"}
                    type={"password"}
                    value={data.old_password}
                    onChange={(e) => setData("old_password", e.target.value)}
                    error={errors.old_password}
                />
                <InputGroup
                    id={"kata_sandi_baru"}
                    label={"Kata Sandi Baru"}
                    type={"password"}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    error={errors.password}
                />
                <InputGroup
                    id={"konfirmasi_kata_sandi_baru"}
                    label={"Konfirmasi Kata Sandi Baru"}
                    type={"password"}
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    error={errors.password_confirmation}
                />
                <div className="flex justify-center items-center mt-8 col-span-2">
                    <button
                        disabled={processing}
                        type="submit"
                        className={`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm w-1/2 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ${
                            processing ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Ganti Kata Sandi
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePasswordTab;
