import BreadCrumb from "@/Components/BreadCrumb";
import TalentModal from "@/Components/Modal/Talent/TalentModal";
import TicketModal from "@/Components/Modal/Ticket/TicketModal";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import showConfirmation from "@/utils/showConfirmation";
import showGoogleMaps from "@/utils/showGoogleMaps";
import { useForm, usePage } from "@inertiajs/react";
import { initModals } from "flowbite";
import React, { useEffect, useState } from "react";

function Detail({ title, event, tickets, talents }) {
    const breadCrumData = {
        before: [
            {
                url: route("admin.event.index"),
                name: "Event",
            },
        ],
        active: `Detail Event : ${title}`,
    };

    const { notification } = usePage().props;

    useEffect(() => {
        if (notification) {
            initModals();
            Notification(notification);
        }
        showGoogleMaps(event.maps_link);
    }, [notification]);

    const {
        data: dataAddTicket,
        setData: setAddTicket,
        post: postAddTicket,
        processing: processingAddTicket,
        errors: errorsAddTicket,
        reset: resetAddTicket,
    } = useForm({
        name: "",
        price: "",
        target: "",
    });

    const {
        data: dataEditTicket,
        setData: setEditTicket,
        put: putEditTicket,
        processing: processingEditTicket,
        errors: errorsEditTicket,
        reset: resetEditTicket,
    } = useForm({
        id: "",
        name: "",
        price: "",
        target: "",
    });

    const {
        data: dataAddTalent,
        setData: setAddTalent,
        post: postAddTalent,
        processing: processingAddTalent,
        errors: errorsAddTalent,
        reset: resetAddTalent,
    } = useForm({
        name: "",
        image: "",
    });

    const {
        data: dataEditTalent,
        setData: setEditTalent,
        post: putEditTalent,
        processing: processingEditTalent,
        errors: errorsEditTalent,
        reset: resetEditTalent,
    } = useForm({
        id: "",
        name: "",
        image: null,
    });

    const handleAddTicket = (e) => {
        e.preventDefault();
        postAddTicket(route("admin.ticket.store", event.id), {
            onSuccess: () => {
                document.getElementById("close-add-ticket-modal").click();
                resetAddTicket();
            },
        });
    };

    const handleEditTicket = (e) => {
        e.preventDefault();

        putEditTicket(route("admin.ticket.update", dataEditTicket.id), {
            onSuccess: () => {
                document.getElementById("close-edit-ticket-modal").click();
                resetEditTicket();
            },
        });
    };

    const formDeleteTicket = useForm();
    const handleDeleteTicket = (e, id) => {
        e.preventDefault();
        showConfirmation({
            title: "Apakah kamu yakin?",
            text: "Anda tidak dapat mengembalikan data ini!",
            onConfirm: () => {
                formDeleteTicket.delete(route("admin.ticket.delete", id));
            },
        });
    };

    const handleAddTalent = (e) => {
        e.preventDefault();
        postAddTalent(route("admin.talent.store", event.id), {
            onSuccess: () => {
                document.getElementById("close-add-talent-modal").click();
                document.getElementById("image").value = "";
                resetAddTalent();
            },
        });
    };

    const handleEditTalent = (e) => {
        e.preventDefault();
        putEditTalent(route("admin.talent.update", event.id), {
            onStart: () => {
                console.log(dataEditTalent);
            },
            onSuccess: () => {
                document.getElementById("close-edit-talent-modal").click();
                document.getElementById("image").value = "";
                resetEditTalent();
            },
            onError: (er) => {
                console.log(er);
            },
        });
    };

    const formDeleteTalent = useForm();
    const handleDeleteTalent = (e, id) => {
        e.preventDefault();
        showConfirmation({
            title: "Apakah kamu yakin?",
            text: "Anda tidak dapat mengembalikan data ini!",
            onConfirm: () => {
                formDeleteTalent.delete(route("admin.talent.delete", id));
            },
        });
    };

    const setTicket = (id) => {
        const ticket = tickets.find((ticket) => ticket.id === id);
        setEditTicket({
            id: ticket.id,
            name: ticket.name,
            price: ticket.price,
            target: ticket.target,
        });
    };

    const setTalent = (id) => {
        const talent = talents.find((talent) => talent.id === id);
        setEditTalent((prev) => ({
            ...prev,
            id: talent.id,
            name: talent.name,
            image: null,
            _method: "PUT",
        }));
    };

    const handleAddTalentImage = (e) => {
        const file = e.target.files[0];
        setAddTalent("image", file);
    };

    const handleEditTalentImage = (e) => {
        const file = e.target.files[0];
        setEditTalent("image", file);
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumData} />

            <div className="mt-5 grid grid-cols-12 gap-5">
                <div className="h-fit col-span-7 flex flex-col gap-5">
                    <div className="bg-white shadow-md rounded-md">
                        <div className="flex flex-col p-5 border-b">
                            <h1 className="text-xl poppins-semibold">
                                {event.name}
                            </h1>
                            <span className="text-sm">
                                by {event.user.name}
                            </span>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <img
                                    className="rounded-md"
                                    src={event.banner}
                                />
                            </div>
                            <div
                                className="mt-3 ckeditor"
                                dangerouslySetInnerHTML={{
                                    __html: event.description,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md">
                        <div className="grid grid-cols-2 gap-5 p-5 border-b">
                            <div className="flex flex-col gap-1.5">
                                <h1 className="flex items-center">
                                    <i className="fa-solid fa-circle mr-1.5 text-xs text-green-700" />{" "}
                                    Mulai
                                </h1>
                                <span className="text-sm">
                                    {event.date} | {event.time}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h1 className="flex items-center">
                                    <i className="fa-solid fa-circle mr-1.5 text-xs text-red-700" />
                                    Selesai
                                </h1>
                                <span className="text-sm">
                                    {event.date_end} | {event.time_end}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 p-5 border-b">
                            <div className="">
                                <h1 className="poppins-medium text-lg">
                                    Lokasi
                                </h1>
                                <div className="mt-5 flex gap-1 items-center">
                                    <p className="leading-5">
                                        <span className="poppins-medium">
                                            {event.building_name}
                                        </span>{" "}
                                        | {event.address}
                                    </p>
                                </div>
                                <a
                                    target="_blank"
                                    href={event.maps_link}
                                    className="mt-2 block text-sm text-blue-500 hover:text-blue-600"
                                >
                                    Buka di Google Maps
                                </a>
                            </div>
                            <div className="">
                                <div id="map" className="border h-[250px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-fit col-span-5 flex flex-col gap-5">
                    <div className="p-5 bg-white shadow-md rounded-md">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg poppins-semibold">
                                Kategori Tiket
                            </h1>
                            <button
                                data-modal-target="add-ticket-modal"
                                data-modal-toggle="add-ticket-modal"
                                className="bg-teal-700 shadow-sm text-white size-10 rounded-full focus:ring-4 focus:ring-teal-300 hover:bg-teal-800 duration-200"
                            >
                                <i className="fa-solid fa-plus" />
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col gap-6">
                            {tickets.map((ticket, i) => (
                                <div
                                    key={i}
                                    className="border rounded-md px-5 py-3 relative overflow-hiddens"
                                >
                                    <div className="absolute rounded-s-md top-0 left-0 bottom-0 w-[5px] bg-red-700" />
                                    <div className="absolute -top-[15px] left-0 flex justify-center w-full gap-2">
                                        <button
                                            onClick={() => setTicket(ticket.id)}
                                            data-modal-target="edit-ticket-modal"
                                            data-modal-toggle="edit-ticket-modal"
                                            className="btn-edit-ticket border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white duration-200 bg-white rounded-md p-2"
                                        >
                                            <i
                                                className="fa-regular fa-pen-to-square"
                                                onClick={() =>
                                                    setTicket(ticket.id)
                                                }
                                            />
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                handleDeleteTicket(e, ticket.id)
                                            }
                                            className="btn-delete-ticket border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2"
                                        >
                                            <i
                                                className="fa-regular fa-trash"
                                                onClick={(e) =>
                                                    handleDeleteTicket(
                                                        e,
                                                        ticket.id
                                                    )
                                                }
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <h1 className="text-sm text-gray-600">
                                                {ticket.name}
                                            </h1>
                                            <span className="text-sm poppins-medium">
                                                {ticket.format_price}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-sm text-right text-gray-600">
                                                Target
                                            </h1>
                                            <span className="text-sm text-right poppins-medium">
                                                <span className="text-gray-600">
                                                    {ticket.sold}
                                                </span>
                                                /<span>{ticket.target}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-5 bg-white shadow-md rounded-md">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg poppins-semibold">
                                Talents
                            </h1>
                            <button
                                data-modal-target="add-talent-modal"
                                data-modal-toggle="add-talent-modal"
                                className="bg-teal-700 shadow-sm text-white size-10 rounded-full focus:ring-4 focus:ring-teal-300 hover:bg-teal-800 duration-200"
                            >
                                <i className="fa-solid fa-plus" />
                            </button>
                        </div>
                        <div className="mt-5 flex flex-col gap-3">
                            {talents.map((talent, i) => (
                                <div
                                    key={i}
                                    className="border rounded-md px-5 py-3 relative overflow-hiddens"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <img
                                                className="w-[50px] h-[50px] rounded-full object-cover"
                                                src={talent.image}
                                                alt=""
                                            />
                                            <span className="text-sm poppins-medium">
                                                {talent.name}
                                            </span>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() =>
                                                    setTalent(talent.id)
                                                }
                                                data-modal-target="edit-talent-modal"
                                                data-modal-toggle="edit-talent-modal"
                                                className="btn-edit-talent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white duration-200 bg-white rounded-md p-2"
                                            >
                                                <i
                                                    className="fa-regular fa-pen-to-square"
                                                    onClick={() =>
                                                        setTalent(talent.id)
                                                    }
                                                />
                                            </button>
                                            <button
                                                onClick={(e) =>
                                                    handleDeleteTalent(
                                                        e,
                                                        talent.id
                                                    )
                                                }
                                                className="btn-delete-talent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2"
                                            >
                                                <i
                                                    className="fa-regular fa-trash"
                                                    onClick={(e) =>
                                                        handleDeleteTalent(
                                                            e,
                                                            talent.id
                                                        )
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <TicketModal
                id={"add-ticket-modal"}
                name={"Tambah Kategori Tiket"}
                data={dataAddTicket}
                setData={setAddTicket}
                processing={processingAddTicket}
                handleSubmit={handleAddTicket}
                errors={errorsAddTicket}
            />

            <TicketModal
                id={"edit-ticket-modal"}
                name={"Edit Kategori Tiket"}
                data={dataEditTicket}
                setData={setEditTicket}
                processing={processingEditTicket}
                handleSubmit={handleEditTicket}
                errors={errorsEditTicket}
            />

            <TalentModal
                id={"add-talent-modal"}
                name={"Tambah Talent"}
                data={dataAddTalent}
                setData={setAddTalent}
                processing={processingAddTalent}
                handleSubmit={handleAddTalent}
                errors={errorsAddTalent}
                handleFileChange={handleAddTalentImage}
            />

            <TalentModal
                id={"edit-talent-modal"}
                name={"Edit Talent"}
                data={dataEditTalent}
                setData={setEditTalent}
                processing={processingEditTalent}
                handleSubmit={handleEditTalent}
                errors={errorsEditTalent}
                handleFileChange={handleEditTalentImage}
            />
        </AdminLayout>
    );
}

export default Detail;
