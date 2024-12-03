import BreadCrumb from "@/Components/BreadCrumb";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

function Dashboard({ title }) {
    const breadCrumbData = {
        active: title,
    };
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />
        </AdminLayout>
    );
}

export default Dashboard;
