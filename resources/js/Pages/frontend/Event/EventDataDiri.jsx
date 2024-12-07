import BreadCrumb from "@/Components/BreadCrumb";
import EventDataPembeliForm from "@/Components/Event/EventDataPembeliForm";
import EventDataPengunjungForm from "@/Components/Event/EventDataPengunjungForm";
import EventDetailPanel from "@/Components/Event/EventDetailPanel";
import UserLayout from "@/Layouts/UserLayout";
import getDatePart from "@/utils/getDatePart";
import getDistance from "@/utils/getDistance";
import Notification from "@/utils/notification";
import timeToSeconds from "@/utils/timeToSeconds";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function EventDataDiri({ title, profile, event, data_ticket }) {
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
        ],
        active: title,
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

    const { data, setData, post, processing, errors } = useForm({
        data_pengunjung: [],
        data_pembeli: {
            email: profile.email,
            name: profile.name,
            date: getDatePart(profile.date_of_birth, "day"),
            month: getDatePart(profile.date_of_birth, "month"),
            year: getDatePart(profile.date_of_birth, "year"),
            gender: profile.gender,
            identity_type: profile.identity_type,
            identity_number: profile.identity_number,
        },
        sub_total: data_ticket.sub_total,
        tax: data_ticket.tax,
        tax_amount: data_ticket.tax_amount,
        total: data_ticket.total,
    });

    const handleChange = (e, type, index = null, ticket_id = null) => {
        const name = e.target.name;
        const value = e.target.value;
        if (type == "data_pembeli") {
            setData("data_pembeli", {
                ...data.data_pembeli,
                [name]: value,
            });
        } else {
            const newDataPengunjung = [...data.data_pengunjung];
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: ticket_id,
                [name]: value,
            };
            setData("data_pengunjung", newDataPengunjung);
        }
    };

    const samakanDataPembeli = (e, index, ticket_id) => {
        const newDataPengunjung = [...data.data_pengunjung];
        if (e.target.checked) {
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: ticket_id,
                email: data.data_pembeli.email,
                name: data.data_pembeli.name,
                date: data.data_pembeli.date,
                month: data.data_pembeli.month,
                year: data.data_pembeli.year,
                [`gender-${index}`]: data.data_pembeli.gender,
                identity_type: data.data_pembeli.identity_type,
                identity_number: data.data_pembeli.identity_number,
            };
        } else {
            newDataPengunjung[index] = {
                ...newDataPengunjung[index],
                [`ticket_id-${index}`]: null,
                email: "",
                name: "",
                date: "",
                month: "",
                year: "",
                [`gender-${index}`]: "",
                identity_type: "",
                identity_number: "",
            };
        }
        setData("data_pengunjung", newDataPengunjung);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("event.save-data-diri", event.slug));
    };

    return (
        <UserLayout title={"Detail Event"}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <form action="" onSubmit={handleSubmit}>
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

                        <EventDataPembeliForm
                            data_pembeli={data.data_pembeli}
                            handleChange={handleChange}
                            errors={errors}
                        />
                        <EventDataPengunjungForm
                            data_pengunjung={data.data_pengunjung}
                            handleChange={handleChange}
                            tickets={data_ticket.tickets}
                            samakanDataPembeli={samakanDataPembeli}
                        />
                    </div>
                    <div className="col-span-4 h-fit sticky top-[110px] bg-white border border-teal-700 shadow-md rounded-md">
                        <EventDetailPanel
                            processing={processing}
                            event={event}
                            subTotal={data_ticket.sub_total}
                            ticketCount={data_ticket.tickets.length}
                            tax={data_ticket.tax}
                            taxAmount={data_ticket.tax_amount}
                            total={data_ticket.total}
                        />
                    </div>
                </div>
            </form>
        </UserLayout>
    );
}

export default EventDataDiri;
