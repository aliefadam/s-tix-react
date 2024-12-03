import FooterAdmin from "@/Components/FooterAdmin/FooterAdmin";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";
import { Head, usePage } from "@inertiajs/react";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";

function AdminLayout({ title, children }) {
    useEffect(() => {
        initFlowbite();
    }, []);

    const { menu, today, auth } = usePage().props;

    return (
        <div className="bg-[#475569] bg-opacity-10 min-h-screen">
            <Head title={title} />

            <Sidebar menus={menu} />
            <Topbar today={today} auth={auth} />

            <main className="ml-[250px] mt-[80px] w-[calc(100%-250px)] p-6 pb-24">
                {children}
            </main>

            <FooterAdmin />
        </div>
    );
}

export default AdminLayout;
