import getDistance from "@/utils/getDistance";
import React, { useEffect, useState } from "react";

function PaymentHeader({ transaction }) {
    const { expiration_date, expiration_time, expiration_date_raw } =
        transaction.payment;

    const countdown = () => {
        const distance = getDistance({ expiration_date: expiration_date_raw });

        if (distance < 0) {
            window.location.reload();
            return;
        }

        setDueDate(distance);
    };

    const [dueDate, setDueDate] = useState(
        getDistance({ expiration_date: expiration_date_raw })
    );
    useEffect(() => {
        if (transaction.status === "Menunggu Pembayaran") {
            setInterval(countdown, 1000);
        }
    }, []);

    return (
        <div className="flex flex-col items-center text-center gap-1">
            {transaction.status === "Menunggu Pembayaran" ? (
                <>
                    <h1 className="poppins-semibold lg:text-xl text-lg">
                        Selesaikan pembayaran dalam
                    </h1>
                    <span
                        className="poppins-semibold tlg:ext-2xl text-xl text-teal-700 w-[200px] text-center"
                        id="countdown"
                    >
                        {dueDate}
                    </span>
                    <span className="text-gray-700 mt-2 lg:text-base text-sm">
                        Batas Akhir Pembayaran
                    </span>
                    <h1 className="poppins-semibold lg:text-xl text-[15px] text-teal-700">
                        {expiration_date} - {expiration_time} WIB
                    </h1>
                </>
            ) : (
                <>
                    <h1 className="poppins-semibold lg:text-xl text-lg">
                        Pembayaran Berhasil Diselesaikan
                    </h1>
                    <span className="text-gray-700 lg:text-base text-sm w-[70%]">
                        Terima kasih telah melakukan pembayaran, anda bisa
                        melakukan pengecekan E-Ticket melalui menu Tiket
                    </span>
                </>
            )}
        </div>
    );
}

export default PaymentHeader;
