import EventList from "@/Components/Event/EventList";
import Carousel from "@/Components/Promotion/Carousel";
import StaticBanner from "@/Components/Promotion/StaticBanner";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function Welcome({ events, static_banner, carousel }) {
    return (
        <UserLayout title={"Beranda"}>
            <div className="grid grid-cols-12 gap-7">
                <Carousel carousel={carousel} />
                <div className="md:col-span-5 col-span-12 flex flex-col gap-7 h-[500px]">
                    <StaticBanner image={static_banner[0]} />
                    <StaticBanner image={static_banner[1]} />
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-center text-3xl poppins-bold text-teal-700 border-b border-teal-700 pb-5">
                    Daftar Event
                </h1>

                <EventList events={events} />
            </div>
        </UserLayout>
    );
}

export default Welcome;
