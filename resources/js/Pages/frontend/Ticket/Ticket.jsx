import BreadCrumb from "@/Components/BreadCrumb";
import TicketTabs from "@/Components/Ticket/TicketList/TicketTabs";
import TicketTabsItem from "@/Components/Ticket/TicketList/TicketTabsItem";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function Ticket({ title, tickets }) {
    const breadCrumbData = {
        before: [
            {
                url: route("home"),
                name: "Beranda",
            },
        ],
        active: title,
    };

    const { ticketCommings, ticketPasts } = tickets;

    return (
        <UserLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-10 min-h-[50vh]">
                <h1 className="text-center text-3xl poppins-bold text-teal-700">
                    Tiket
                </h1>
                <TicketTabs
                    dataTabsTarget={{
                        ticketCommings: "ticket-commings",
                        ticketPasts: "ticket-pasts",
                    }}
                />
                <div id="default-styled-tab-content">
                    <TicketTabsItem
                        dataTabsTarget={"ticket-commings"}
                        tickets={ticketCommings}
                    />
                    <TicketTabsItem
                        dataTabsTarget={"ticket-pasts"}
                        tickets={ticketPasts}
                    />
                </div>
            </div>
        </UserLayout>
    );
}

export default Ticket;
