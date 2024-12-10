const ShowPaymentStatus = ({ status, withBackground = false }) => {
    if (status == "Menunggu Pembayaran") {
        return (
            <span
                className={`${
                    withBackground && "bg-amber-100 px-4 py-2.5 rounded-md"
                } text-amber-600 poppins-semibold`}
            >
                {status}
            </span>
        );
    } else if (status == "Pembayaran Berhasil") {
        return (
            <span
                className={`${
                    withBackground && "bg-green-100 px-4 py-2.5 rounded-md"
                } text-green-600 poppins-semibold`}
            >
                {status}
            </span>
        );
    } else if (status == "Pembayaran Dibatalkan") {
        return (
            <span
                className={`${
                    withBackground && "bg-red-100 px-4 py-2.5 rounded-md"
                } text-red-600 poppins-semibold`}
            >
                {status}
            </span>
        );
    } else if (status == "Kadaluarsa") {
        return (
            <span
                className={`${
                    withBackground && "bg-gray-100 px-4 py-2.5 rounded-md"
                } text-gray-600 poppins-semibold`}
            >
                {status}
            </span>
        );
    }
};

export default ShowPaymentStatus;
