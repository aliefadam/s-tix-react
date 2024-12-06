import React from "react";

function EventShowTicketItem({ i, ticket, setTicket, handleDeleteTicket }) {
    return (
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
                        onClick={() => setTicket(ticket.id)}
                    />
                </button>
                <button
                    onClick={(e) => handleDeleteTicket(e, ticket.id)}
                    className="btn-delete-ticket border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-200 bg-white rounded-md p-2"
                >
                    <i
                        className="fa-regular fa-trash"
                        onClick={(e) => handleDeleteTicket(e, ticket.id)}
                    />
                </button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-sm text-gray-600">{ticket.name}</h1>
                    <span className="text-sm poppins-medium">
                        {ticket.format_price}
                    </span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-sm text-right text-gray-600">Target</h1>
                    <span className="text-sm text-right poppins-medium">
                        <span className="text-gray-600">{ticket.sold}</span>/
                        <span>{ticket.target}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default EventShowTicketItem;
