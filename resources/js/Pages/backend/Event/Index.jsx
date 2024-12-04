import BreadCrumb from "@/Components/BreadCrumb";
import EventItem from "@/Components/Event/EventItem";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function Index({ title, events }) {
    const breadCrumbData = {
        active: title,
    };

    const { notification } = usePage().props;

    useEffect(() => {
        if (notification) {
            Notification(notification);
        }
    }, [notification]);

    return (
        <AdminLayout title={title}>
            <div className="flex justify-between">
                <BreadCrumb breadCrumbData={breadCrumbData} />
                <Link
                    href={route("admin.event.create")}
                    className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    <i className="fa-solid fa-plus mr-1.5" /> Tambah Event
                </Link>
            </div>

            <div className="mt-5">
                <div className="grid grid-cols-3 gap-5">
                    <EventItem events={events} />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Index;
