import React from "react";

function TransactionHistoryTickets({ tickets }) {
    return (
        <span className="text-sm text-gray-600">
            <ul className="flex flex-col gap-1 mt-1">
                {tickets.map((ticket, j) => (
                    <li key={j}>
                        <span>{ticket.ticket_name}</span>
                        {" x "}
                        <span>{ticket.ticket_count}</span>
                        {" : "}
                        <span>{ticket.ticket_price}</span>
                    </li>
                ))}
            </ul>
        </span>
    );
}

export default TransactionHistoryTickets;
