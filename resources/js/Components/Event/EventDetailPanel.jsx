import { formatMoney } from "@/utils/formatMoney";
import React from "react";

function EventDetailPanel({
    event,
    subTotal,
    ticketCount,
    tax,
    taxAmount,
    internetFee = null,
    total,
    processing = false,
    showPromo = false,
    discountLabel = "",
    total_after_discount = 0,
    handleDeletePromo = () => {},
}) {
    return (
        <>
            <h1 className="poppins-semibold text-teal-700 text-xl p-5 pb-0">
                Detail Pesanan
            </h1>
            <div className="p-5 pb-0">
                <img src={event.banner} className="rounded-md" alt="" />
                <div className="mt-3">
                    <span className="text-lg poppins-medium">{event.name}</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 poppins-medium p-5 border-b border-teal-700">
                <div className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar flex justify-center w-[30px]" />
                    <span className="text-[14px]">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fa-regular fa-clock flex justify-center w-[30px]" />
                    <span className="text-[14px]">{event.time} WIB</span>
                </div>
                <div className="flex gap-2">
                    <i className="fa-regular fa-location-dot flex justify-center w-[50px]" />
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] leading-[17px]">
                            {event.building_name} | {event.address}
                        </span>
                        <a
                            target="_blank"
                            href={event.maps_link}
                            className="text-sm text-teal-700 hover:underline"
                        >
                            Buka di Google Maps
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-between border-b border-teal-700">
                <span className="text-sm" id="total-ticket">
                    {ticketCount
                        ? `${ticketCount} Tiket Dipesan`
                        : "0 Tiket Dipesan"}
                </span>
                <span className="text-sm poppins-semibold" id="total">
                    {ticketCount ? `${formatMoney(subTotal)}` : "Rp 0"}
                </span>
            </div>
            {subTotal && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm poppins-semibold">
                        {formatMoney(subTotal)}
                    </span>
                </div>
            )}
            {tax && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-sm">Pajak</span>
                    <span className="text-sm poppins-semibold">
                        {tax}% (+{formatMoney(taxAmount)})
                    </span>
                </div>
            )}
            {internetFee && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-sm">Internet Fee</span>
                    <span className="text-sm poppins-semibold">
                        {formatMoney(internetFee)}
                    </span>
                </div>
            )}
            {total && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-base poppins-medium">Total</span>
                    <span className="text-sm poppins-semibold">
                        {formatMoney(total)}
                    </span>
                </div>
            )}
            {discountLabel !== "" && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-sm text-teal-700">
                        Diskon Kode Promo
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-teal-700 poppins-semibold">
                            {discountLabel}
                        </span>
                        <i
                            onClick={handleDeletePromo}
                            className="fa-solid fa-trash text-red-600 text-sm hover:scale-105 hover:text-red-700 duration-200 cursor-pointer"
                        ></i>
                    </div>
                </div>
            )}
            {total_after_discount !== 0 && (
                <div className="p-4 flex justify-between border-b border-teal-700">
                    <span className="text-base poppins-medium">Total</span>
                    <span className="text-sm poppins-semibold">
                        {formatMoney(total_after_discount)}
                    </span>
                </div>
            )}
            <div className="p-4 flex flex-col gap-4">
                <div
                    className={`flex items-center justify-between text-sm ${
                        showPromo && discountLabel === "" ? "" : "hidden"
                    }`}
                >
                    <span className="">Punya Kode Promo?</span>
                    <button
                        data-modal-target="show-promo-modal"
                        data-modal-toggle="show-promo-modal"
                        className="poppins-medium text-teal-700 hover:text-teal-800"
                        type="button"
                    >
                        Masukkan Kode
                    </button>
                </div>
                {/* {showPromo && discountLabel === "" && (
                    <div className="flex items-center justify-between text-sm">
                        <span className="">Punya Kode Promo?</span>
                        <button
                            data-modal-target="show-promo-modal"
                            data-modal-toggle="show-promo-modal"
                            className="poppins-medium text-teal-700 hover:text-teal-800"
                            type="button"
                        >
                            Masukkan Kode
                        </button>
                    </div>
                )} */}
                <div className="flex justify-center">
                    <button
                        disabled={processing}
                        type="submit"
                        className={`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full ${
                            processing ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default EventDetailPanel;
