import BreadCrumb from "@/Components/BreadCrumb";
import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

function Edit({ title, vendor }) {
    const breadCrumbData = {
        before: [
            {
                url: route("admin.vendor.index"),
                name: "Vendor",
            },
        ],
        active: title,
    };

    const { data, setData, put, processing, errors } = useForm({
        name: vendor.user.name,
        email: vendor.user.email,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.vendor.update", vendor.id));
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 p-5 bg-white shadow-md rounded-md overflow-hidden w-1/2">
                <h1 className="text-xl poppins-medium text-teal-700">
                    Tambah Vendor Baru
                </h1>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    method="POST"
                    className="mt-6"
                >
                    <InputGroup
                        id={"name"}
                        label={"Nama Vendor"}
                        type={"text"}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <InputGroup
                        id={"email"}
                        label={"Email Vendor"}
                        type={"email"}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                        disabled={true}
                    />
                    <div className="flex justify-end">
                        <Button
                            name={"Tambah"}
                            type={"submit"}
                            color={"teal"}
                            processing={processing}
                        />
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default Edit;
