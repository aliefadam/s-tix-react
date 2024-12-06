import BreadCrumb from "@/Components/BreadCrumb";
import VoucherTableIndex from "@/Components/Voucher/Table/VoucherTableIndex";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

function Index({ title }) {
    const breadCrumbData = {
        active: title,
    };
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <VoucherTableIndex />
            </div>
        </AdminLayout>
    );
}

export default Index;
