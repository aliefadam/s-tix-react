import BreadCrumb from "@/Components/BreadCrumb";
import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

function ChangePassword({ title }) {
    const breadCrumbData = {
        active: title,
    };

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
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <form
                action=""
                className="mt-5 bg-white rounded-md shadow-md p-5 w-1/2"
            >
                <InputGroup
                    id={"old_password"}
                    label={"Kata Sandi Lama"}
                    type={"password"}
                    onChange={(e) => setData("old_password", e.target.value)}
                    value={data.old_password}
                    error={errors.old_password}
                />

                <InputGroup
                    id={"password"}
                    label={"Kata Sandi Baru"}
                    type={"password"}
                    onChange={(e) => setData("password", e.target.value)}
                    value={data.password}
                    error={errors.password}
                />

                <InputGroup
                    id={"password_confirmation"}
                    label={"Konfirmasi Kata Sandi Baru"}
                    type={"password"}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    value={data.password_confirmation}
                    error={errors.password_confirmation}
                />

                <div className="flex justify-end">
                    <Button
                        color={"teal"}
                        processing={processing}
                        name={"Simpan"}
                        onClick={changePassword}
                    />
                </div>
            </form>
        </AdminLayout>
    );
}

export default ChangePassword;
