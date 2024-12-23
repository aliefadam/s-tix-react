import BreadCrumb from "@/Components/BreadCrumb";
import EventBanner from "@/Components/Event/EventBanner";
import EventDescription from "@/Components/Event/EventDescription";
import EventLineUp from "@/Components/Event/EventLineUp";
import UserLayout from "@/Layouts/UserLayout";
import showConfirmation from "@/utils/showConfirmation";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

function EventDetail({ event, is_session }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
        ],
        active: event.name,
    };

    const formBuyTicket = useForm();
    const formContinueTicket = useForm();
    const handleBuyTicket = (e) => {
        e.preventDefault();
        if (is_session.length != 0) {
            showConfirmation({
                title: "Perhatian",
                text: "Anda masih memiliki data pemesanan yang belum diselesaikan, ingin melanjutkan?",
                confirmButtonText: "Lanjutkan",
                cancelButtonText: "Buat ulang",
                showDenyButton: true,
                onConfirm: () => {
                    formContinueTicket.get(
                        route("event.data-diri", event.slug)
                    );
                },
                onCancel: () => {
                    formBuyTicket.put(
                        route("ticket.clear-session-data-ticket", event.slug)
                    );
                },
            });
        } else {
            formBuyTicket.get(route("event.tickets", event.slug));
        }
    };

    return (
        <UserLayout title={"Detail Event"}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-8 grid grid-cols-12 gap-8 min-h-[80vh]">
                <div className="md:col-span-8 col-span-12 h-fit">
                    <EventBanner path={event.banner} />
                    <EventDescription description={event.description} />
                    <div className="mt-5">
                        <EventLineUp talents={event.talents} />
                    </div>
                </div>
                <div className="md:col-span-4 col-span-12 h-fit sticky top-[110px]">
                    <div className="bg-white border border-teal-700 shadow-md rounded-md">
                        <h1 className="poppins-semibold text-teal-700 text-xl p-5 pb-0">
                            {event.name}
                        </h1>
                        <div className="flex flex-col gap-4 poppins-medium p-5 pb-2">
                            <div className="flex items-center gap-2">
                                <i className="fa-regular fa-calendar flex justify-center w-[30px]" />
                                <span className="text-[14px]">
                                    {event.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fa-regular fa-clock flex justify-center w-[30px]" />
                                <span className="text-[14px]">
                                    {event.time} WIB
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <i className="fa-regular fa-location-dot flex justify-center w-[30px]" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] leading-[17px]">
                                        {event.building_name} | {event.address}
                                    </span>
                                    <a
                                        target="_blank"
                                        href={event.maps_link}
                                        className="text-sm text-teal-700"
                                    >
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-col gap-4 border-t border-teal-700 p-5">
                            <div className="flex flex-col gap-1">
                                <span className="text-[14px] text-gray-700">
                                    Dibuat Oleh
                                </span>
                                <span className="uppercase poppins-medium">
                                    {event.created_by}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[14px] text-gray-700">
                                    Mulai Dari
                                </span>
                                <span className="uppercase poppins-medium">
                                    {event.price}
                                </span>
                            </div>
                            <div className="mt-1 flex justify-center">
                                <Link
                                    onClick={handleBuyTicket}
                                    href="#"
                                    className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
                                >
                                    Beli Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default EventDetail;
