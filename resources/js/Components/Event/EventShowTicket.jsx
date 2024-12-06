import React from "react";
import EventShowTicketItem from "./EventShowTicketItem";

function EventShowTicket({ tickets, setTicket, handleDeleteTicket }) {
    return (
        <div className="p-5 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-lg poppins-semibold">Kategori Tiket</h1>
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
                    <EventShowTicketItem
                        key={i}
                        i={i}
                        ticket={ticket}
                        setTicket={setTicket}
                        handleDeleteTicket={handleDeleteTicket}
                    />
                ))}
            </div>
        </div>
    );
}

export default EventShowTicket;
