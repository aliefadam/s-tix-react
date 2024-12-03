import React from "react";

function VendorCredentialsModalBody({ email, password }) {
    return (
        <div className="p-4 md:p-5 space-y-4">
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Vendor Berhasil Didaftarkan, silahkan berikan kredensial berikut
                kepada vendor :
            </p>
            <div className="flex flex-col gap-2 shadow-md rounded-md p-3">
                <div className="flex items-center gap-2">
                    <span className="w-[80px]">Email</span>
                    <span>:</span>
                    <span>{email}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-[80px]">Password</span>
                    <span>:</span>
                    <span>{password}</span>
                </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Anda juga dapat menginformasikan kepada vendor untuk memeriksa
                kredensial yang telah dikirimkan ke email mereka.{" "}
                <span className="text-red-500 poppins-medium">
                    Segera sarankan agar vendor mengganti kata sandi demi
                    keamanan
                </span>
                .
            </p>
        </div>
    );
}

export default VendorCredentialsModalBody;
