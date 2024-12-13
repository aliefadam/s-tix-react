import BreadCrumb from "@/Components/BreadCrumb";
import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function Index({ title, settings }) {
    const breadCrumbData = {
        active: title,
    };

    const { data, setData, put, processing, errors } = useForm({
        internet_fee: settings.internet_fee,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.website.update"));
    };

    const { notification } = usePage().props;
    useEffect(() => {
        if (notification) {
            Notification(notification);
        }
    }, [notification]);

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <form
                onSubmit={handleSubmit}
                action=""
                className="mt-5 bg-white p-5 rounded-md shadow-md w-1/2"
            >
                <InputGroup
                    id={"internet_fee"}
                    label={"Internet Fee (Rp)"}
                    onChange={(e) => setData("internet_fee", e.target.value)}
                    value={data.internet_fee}
                    error={errors.internet_fee}
                    type={"number"}
                />
                <div className="flex justify-end">
                    <Button
                        color={"teal"}
                        name={"Simpan"}
                        type={"submit"}
                        processing={processing}
                    />
                </div>
            </form>
        </AdminLayout>
    );
}

export default Index;
