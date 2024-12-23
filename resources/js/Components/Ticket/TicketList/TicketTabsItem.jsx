import { Link } from "@inertiajs/react";
import React from "react";

function TicketTabsItem({ tickets, dataTabsTarget }) {
    return (
        <div
            className="hidden py-4 rounded-lg"
            id={dataTabsTarget}
            role="tabpanel"
            aria-labelledby={dataTabsTarget}
        >
            {tickets.length === 0 && (
                <div className="mt-5">
                    <p className="text-center text-lg text-gray-500">
                        Anda belum memiliki E-Ticket untuk event{" "}
                        {dataTabsTarget == "ticket-commings"
                            ? "yang sedang berlangsung"
                            : "yang telah selesai"}
                    </p>
                </div>
            )}
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {tickets.map((ticket, i) => (
                    <div
                        key={i}
                        className="border border-teal-700 shadow-md rounded-md"
                    >
                        <div className="p-4 flex gap-4 border-b border-teal-700">
                            <div className="flex-[1]">
                                <img
                                    src={ticket.event.banner}
                                    className="rounded-md"
                                    alt=""
                                />
                            </div>
                            <div className="flex-[1]">
                                <h1 className="poppins-medium leading-[20px]">
                                    {ticket.event.name}
                                </h1>
                                <p className="text-xs mt-1">
                                    {ticket.event.date}
                                </p>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs poppins-medium text-gray-600">
                                    Jumlah
                                </span>
                                <span className="text-sm poppins-medium">
                                    {ticket.ticket_count} Tiket
                                </span>
                            </div>
                            <Link
                                href={route(
                                    "ticket.detail",
                                    ticket.invoice.replace("INV-", "")
                                )}
                                className="border poppins-medium border-teal-700 text-teal-700 bg-teal-700 bg-opacity-20 hover:bg-teal-700 hover:bg-opacity-30 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 duration-200 text-center"
                            >
                                Lihat E-Tiket
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TicketTabsItem;
