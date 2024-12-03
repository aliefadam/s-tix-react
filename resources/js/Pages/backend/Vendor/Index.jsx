import BreadCrumb from "@/Components/BreadCrumb";
import VendorCredentialsModal from "@/Components/Modal/Vendor/VendorCredentialsModal";
import VendorTable from "@/Components/Vendor/Table/VendorTable";
import VendorTableTitle from "@/Components/Vendor/Table/VendorTableTitle";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function Index({ title, vendors }) {
    const breadCrumbData = {
        active: title,
    };

    const { notification } = usePage().props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (notification) {
            setEmail(notification.credentials.email);
            setPassword(notification.credentials.password);
        }
    }, [notification]);

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <VendorTableTitle />
                <VendorTable vendors={vendors} />
            </div>

            {notification && (
                <VendorCredentialsModal email={email} password={password} />
            )}
        </AdminLayout>
    );
}

export default Index;
