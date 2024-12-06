import React from "react";

function EventShowDetail({ event }) {
    return (
        <div className="h-fit col-span-7 flex flex-col gap-5">
            <div className="bg-white shadow-md rounded-md">
                <div className="flex flex-col p-5 border-b">
                    <h1 className="text-xl poppins-semibold">{event.name}</h1>
                    <span className="text-sm">by {event.user.name}</span>
                </div>
                <div className="p-5">
                    <div className="">
                        <img className="rounded-md" src={event.banner} />
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
                        <h1 className="poppins-medium text-lg">Lokasi</h1>
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
    );
}

export default EventShowDetail;
