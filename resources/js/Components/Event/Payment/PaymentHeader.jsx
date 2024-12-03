import React, { useEffect, useState } from "react";

function PaymentHeader({ transaction }) {
    const { expiration_date, expiration_time, expiration_date_raw } =
        transaction.payment;

    const getDistace = () => {
        const now = new Date().getTime();
        const expired = new Date(expiration_date_raw).getTime();
        const distance = expired - now;

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const countdown = () => {
        const distance = getDistace();

        if (distance < 0) {
            window.location.reload();
            return;
        }

        setDueDate(distance);
    };

    const [dueDate, setDueDate] = useState(getDistace);
    useEffect(() => {
        setInterval(countdown, 1000);
    }, []);

    return (
        <div className="flex flex-col items-center text-center gap-1">
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
        </div>
    );
}

export default PaymentHeader;
