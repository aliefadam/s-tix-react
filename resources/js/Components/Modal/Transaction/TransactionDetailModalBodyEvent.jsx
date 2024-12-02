import React from "react";

function TransactionDetailModalBodyEvent({ transaction, tickets, event }) {
    return (
        <div className="">
            <h1 className="poppins-semibold lg:text-base text-sm">
                Detail Event
            </h1>
            <div className="mt-4 flex flex-col gap-4">
                <div className="border shadow-sm rounded-lg p-3">
                    <div className="flex gap-3">
                        <div className="flex-[3]">
                            <div className="flex gap-3">
                                <img
                                    src={event.banner}
                                    className="border w-[200px] h-[100px] object-cover rounded-md"
                                />
                                <div className="flex flex-col">
                                    <span className="poppins-medium lg:text-base text-sm block !leading-[20px]">
                                        {event.name}
                                    </span>
                                    <span className="lg:text-sm text-gray-600 text-xs mt-1">
                                        <ul className="flex flex-col gap-1 mt-1">
                                            {tickets.map((ticket, i) => (
                                                <li key={i}>
                                                    <span>
                                                        {ticket.ticket_name}
                                                    </span>
                                                    {" x "}
                                                    <span>
                                                        {ticket.ticket_count}
                                                    </span>
                                                    {" : "}
                                                    <span>
                                                        {ticket.ticket_price}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[1] flex flex-col items-end">
                            <span className="lg:text-sm text-xs text-right">
                                Total Harga
                            </span>
                            <span className="poppins-semibold leading-none lg:text-base text-sm lg:inline block lg:mt-0 mt-1">
                                {transaction.total_ticket_price}
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                        <a
                            target="_blank"
                            href={transaction.event.url}
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                        >
                            Lihat Detail Event
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionDetailModalBodyEvent;
