import Notification from "@/utils/notification";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function BlankLayout({ title, children }) {
    const { notification } = usePage().props;

    useEffect(() => {
        if (notification) {
            const { title, text, icon } = notification;
            Notification({ title, text, icon });
        }
    }, [notification]);
    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            <Head title={title} />
            {children}
        </div>
    );
}

export default BlankLayout;
