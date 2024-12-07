import BreadCrumb from "@/Components/BreadCrumb";
import EventDetailPanel from "@/Components/Event/EventDetailPanel";
import MethodPaymentContainer from "@/Components/Event/MethodPayment/MethodPaymentContainer";
import UserLayout from "@/Layouts/UserLayout";
import getDistance from "@/utils/getDistance";
import Notification from "@/utils/notification";
import timeToSeconds from "@/utils/timeToSeconds";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function EventPayment({ title, event, data_ticket, method_payment }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
            {
                url: route("event", event.slug),
                name: event.name,
            },
            {
                url: route("event.tickets", event.slug),
                name: "Pilih Tiket",
            },
            {
                url: route("event.data-diri", event.slug),
                name: "Pengisian Data Diri",
            },
        ],
        active: title,
    };

    const { data, setData, post, processing } = useForm({
        data_ticket: data_ticket,
        event_id: event.id,
        promo_code: "",
        promo_percent: "",
        promo_amount: "",
        payment_method: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("event.payment", event.slug));
    };

    const [dueDate, setDueDate] = useState(
        getDistance({
            expiration_date: data_ticket.expiration_time,
        })
    );

    const countdown = () => {
        const interval = setInterval(() => {
            const distance = getDistance({
                expiration_date: data_ticket.expiration_time,
            });

            if (timeToSeconds(distance) < 0) {
                Notification({
                    title: "Waktu pembelian telah habis",
                    text: "Silahkan lakukan pembelian ulang",
                    icon: "warning",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = route(
                            "event.tickets",
                            event.slug
                        );
                    }
                });
                clearInterval(interval);
            } else {
                setDueDate(distance);
            }
        }, 1000);

        return () => clearInterval(interval);
    };

    const { notification } = usePage().props;

    useEffect(() => {
        countdown();
        if (notification) {
            Notification(notification);
        }
    }, [data_ticket.expiration_time, notification]);

    return (
        <UserLayout title={"Pilih Pembayaran"}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <form action="" onSubmit={handleSubmit} method="POST">
                <div className="mt-8 grid grid-cols-12 gap-8 min-h-[80vh]">
                    <div className="col-span-8 h-fit flex flex-col gap-5">
                        <div
                            className="flex items-center justify-between p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                            role="alert"
                        >
                            <div className="flex items-center">
                                <svg
                                    className="flex-shrink-0 inline w-4 h-4 me-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div className="">
                                    <span className="font-medium">
                                        Batas Waktu Pengisian Data
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <span className="poppins-semibold">
                                    {dueDate}
                                </span>
                            </div>
                        </div>
                        <MethodPaymentContainer
                            type={"Virtual Account"}
                            methods={method_payment.virtual_account}
                            setData={setData}
                        />
                        <MethodPaymentContainer
                            type={"E-Wallet & QRIS"}
                            methods={method_payment.e_wallet}
                            setData={setData}
                        />
                    </div>
                    <EventDetailPanel
                        ticketCount={data_ticket.pengunjung.length}
                        event={event}
                        subTotal={data_ticket.sub_total}
                        tax={data_ticket.tax}
                        taxAmount={data_ticket.tax_amount}
                        total={data_ticket.total}
                        processing={processing}
                    />
                </div>
            </form>
        </UserLayout>
    );
}

export default EventPayment;
