import { Link } from "@inertiajs/react";
import React from "react";

function EventItem({ events, handleDeleteEvent }) {
    return (
        <>
            {events.map((event, i) => (
                <div
                    key={i}
                    className="border border-teal-700 rounded-md overflow-hidden shadow-md"
                >
                    <img
                        src={event.banner}
                        className="object-cover w-full h-[220px]"
                        alt=""
                    />
                    <div className="p-4 flex flex-col gap-1 border-b border-teal-700 bg-white h-[110px]">
                        <span className="text-xs text-gray-500 poppins-medium">
                            {event.date}
                        </span>
                        <span className="uppercase poppins-semibold text-[15px] text-teal-700">
                            {event.name}
                        </span>
                        <div className="mt-1 flex items-center gap-1.5">
                            <i className="text-xs fa-regular fa-location-dot mr-1" />
                            <span className="text-xs poppins-medium text-ellipsis">
                                {`${event.building_name} | ${event.address
                                    .toString()
                                    .substring(0, 40)} ...`}
                            </span>
                        </div>
                    </div>
                    <div className="p-3.5 grid grid-cols-3 gap-3 items-center bg-white">
                        <Link
                            href={route("admin.event.show", event.id)}
                            className="flex justify-center items-center gap-1 text-yellow-600 hover:text-yellow-700 duration-200"
                        >
                            <i className="fa-regular fa-pen-to-square" />
                            <span className="text-xs poppins-medium">Edit</span>
                        </Link>
                        <Link
                            href={route("admin.event.detail", event.id)}
                            className="flex justify-center items-center gap-1 text-blue-600 hover:text-blue-700 duration-200"
                        >
                            <i className="fa-regular fa-circle-info" />
                            <span className="text-xs poppins-medium">
                                Detail
                            </span>
                        </Link>
                        <Link
                            onClick={() => handleDeleteEvent(event.id)}
                            href="#"
                            className="btn-delete-event flex justify-center items-center gap-1 text-red-600 hover:text-red-700 duration-200"
                        >
                            <i className="fa-regular fa-trash" />
                            <span className="text-xs poppins-medium">
                                Hapus
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default EventItem;
