import React from "react";

function DashboardVendor({ dashboard_vendor }) {
    return (
        <div className="mt-5 grid grid-cols-4 gap-5">
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-teal-600 border border-teal-600">
                <div className="flex flex-col gap-2">
                    <i className="fa-regular fa-calendar-days text-3xl"></i>
                    <span className="poppins-medium">Total Event</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_vendor.event_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-rose-600 border border-rose-600">
                <div className="flex flex-col gap-2">
                    <i className="fa-regular fa-tag text-3xl"></i>
                    <span className="poppins-medium">Total Promo</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_vendor.promo_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-blue-600 border border-blue-600 ">
                <div className="flex flex-col gap-2">
                    <i className="fa-solid fa-cart-shopping text-3xl"></i>
                    <span className="poppins-medium">Data Transaksi</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_vendor.transaction_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-yellow-600 border border-yellow-600 ">
                <div className="flex flex-col gap-2">
                    <i className="fa-solid fa-coins text-3xl"></i>
                    <span className="poppins-medium">Pendapatan</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg poppins-bold">
                        {dashboard_vendor.revenue}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DashboardVendor;
