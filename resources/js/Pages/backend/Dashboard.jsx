import BreadCrumb from "@/Components/BreadCrumb";
import DashboardAdmin from "@/Components/Dashboard/DashboardAdmin";
import DashboardVendor from "@/Components/Dashboard/DashboardVendor";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

function Dashboard({ title, dashboard }) {
    const breadCrumbData = {
        active: title,
    };
    const { dashboard_admin, dashboard_vendor } = dashboard;
    const { role } = usePage().props.auth;

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            {role == "super-admin" && (
                <DashboardAdmin dashboard_admin={dashboard_admin} />
            )}
            {role == "vendor" && (
                <DashboardVendor dashboard_vendor={dashboard_vendor} />
            )}
        </AdminLayout>
    );
}

export default Dashboard;
