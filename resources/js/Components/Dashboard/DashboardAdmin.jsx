import React from "react";

function DashboardAdmin({ dashboard_admin }) {
    return (
        <div className="mt-5 grid grid-cols-4 gap-5">
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-teal-600 border border-teal-600">
                <div className="flex flex-col gap-2 ">
                    <i className="fa-solid fa-users-viewfinder text-3xl"></i>
                    <span className="poppins-medium">Pengunjung Website</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_admin.visitor_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-rose-600 border border-rose-600">
                <div className="flex flex-col gap-2">
                    <i className="fa-solid fa-users text-3xl"></i>
                    <span className="poppins-medium">Jumlah User</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_admin.user_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-blue-600 border border-blue-600">
                <div className="flex flex-col gap-2">
                    <i className="fa-solid fa-users text-3xl"></i>
                    <span className="poppins-medium">Jumlah Vendor</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_admin.vendor_count}
                    </span>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-5 flex items-center justify-between text-yellow-600 border border-yellow-600 ">
                <div className="flex flex-col gap-2">
                    <i className="fa-solid fa-cart-shopping text-3xl"></i>
                    <span className="poppins-medium">Data Transaksi</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl poppins-bold">
                        {dashboard_admin.transaction_count}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;
