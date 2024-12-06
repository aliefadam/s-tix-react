import BreadCrumb from "@/Components/BreadCrumb";
import EventShowDetail from "@/Components/Event/EventShowDetail";
import EventShowTalent from "@/Components/Event/EventShowTalent";
import EventShowTicket from "@/Components/Event/EventShowTicket";
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
        putEditTalent(route("admin.talent.update", dataEditTalent.id), {
            onSuccess: () => {
                document.getElementById("close-edit-talent-modal").click();
                document.getElementById("image").value = "";
                resetEditTalent();
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
                <EventShowDetail event={event} />
                <div className="h-fit col-span-5 flex flex-col gap-5">
                    <EventShowTicket
                        tickets={tickets}
                        setTicket={setTicket}
                        handleDeleteTicket={handleDeleteTicket}
                    />
                    <EventShowTalent
                        talents={talents}
                        setTalent={setTalent}
                        handleDeleteTalent={handleDeleteTalent}
                    />
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
