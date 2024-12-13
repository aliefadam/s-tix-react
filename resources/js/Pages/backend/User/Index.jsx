import BreadCrumb from "@/Components/BreadCrumb";
import UserTable from "@/Components/User/UserTable";
import UserTableTitle from "@/Components/User/UserTableTitle";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

function Index({ title, users }) {
    const breadCrumbData = {
        active: title,
    };
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <UserTableTitle />
                <UserTable users={users} />
            </div>
        </AdminLayout>
    );
}

export default Index;
