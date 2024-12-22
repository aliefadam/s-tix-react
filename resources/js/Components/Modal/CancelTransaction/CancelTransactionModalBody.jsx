import React from "react";

function CancelTransactionModalBody({ handleSubmit, setData }) {
    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="p-4 md:p-5 space-y-4">
                <label
                    htmlFor="alasan_pembatalan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Pilih Alasan Pembatalan
                </label>
                <select
                    onChange={(e) => setData("cancel_reason", e.target.value)}
                    id="alasan_pembatalan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                >
                    <option value="" disabled>
                        Pilih alasan...
                    </option>
                    <option value="Saya berubah pikiran">
                        Saya berubah pikiran
                    </option>
                    <option value="Menemukan harga lebih murah">
                        Menemukan harga lebih murah
                    </option>
                    <option value="Masalah dengan Event">
                        Masalah dengan Event
                    </option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                    type="submit"
                    className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                    Batalkan transaksi ini
                </button>
                <button
                    id="cancel-button-pembatalan-transaksi-modal"
                    data-modal-hide="pembatalan-transaksi-modal"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Kembali
                </button>
            </div>
        </form>
    );
}

export default CancelTransactionModalBody;
