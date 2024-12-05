import BreadCrumb from "@/Components/BreadCrumb";
import VendorCredentialsModal from "@/Components/Modal/Vendor/VendorCredentialsModal";
import VendorTable from "@/Components/Vendor/Table/VendorTable";
import VendorTableTitle from "@/Components/Vendor/Table/VendorTableTitle";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import showConfirmation from "@/utils/showConfirmation";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Index({ title, vendors }) {
    const breadCrumbData = {
        active: title,
    };

    const { credentials } = usePage().props.notification || {};
    const { notification } = usePage().props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vendorID, setVendorID] = useState("");

    useEffect(() => {
        if (credentials) {
            setEmail(credentials.email);
            setPassword(credentials.password);
        }

        if (notification && credentials == null) {
            Notification(notification);
        }
    }, [credentials, notification]);

    const form = useForm({
        vendorID: vendorID,
    });

    const handleDelete = (e, id) => {
        e.preventDefault();
        setVendorID(id);
        showConfirmation({
            title: "Apakah kamu yakin?",
            text: "Anda tidak dapat mengembalikan data ini!",
            onConfirm: () => {
                form.delete(route("admin.vendor.delete", id));
            },
        });
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <VendorTableTitle />
                <VendorTable vendors={vendors} handleDelete={handleDelete} />
            </div>

            {credentials && (
                <VendorCredentialsModal email={email} password={password} />
            )}
        </AdminLayout>
    );
}

export default Index;
