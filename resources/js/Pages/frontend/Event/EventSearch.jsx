import BreadCrumb from "@/Components/BreadCrumb";
import EventList from "@/Components/Event/EventList";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function EventSearch({ title, keyword, events }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
        ],
        active: title,
    };

    return (
        <UserLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-8 border-b border-teal-700 pb-5">
                <h1 className="text-3xl poppins-semibold text-teal-700">
                    Hasil Pencarian
                </h1>
                <span className="text-sm text-gray-600 mt-1 block">
                    Ditemukan {events.length} hasil untuk "{keyword}"
                </span>
            </div>

            {events.length === 0 && (
                <div className="mt-8">
                    <h1 className="text-xl text-center poppins-semibold text-gray-600">
                        Tidak Ada Hasil
                    </h1>
                </div>
            )}
            <EventList events={events} />
        </UserLayout>
    );
}

export default EventSearch;
