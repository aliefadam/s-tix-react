import React from "react";

function TransactionDetailModalHeader({
    closeModal = null,
    setLoading = null,
    setTransactionID = null,
}) {
    return (
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="lg:text-lg text-sm font-semibold text-gray-900 dark:text-white">
                Detail Transaksi
            </h3>
            <button
                type="button"
                onClick={() => {
                    setTransactionID(null);
                    setLoading(true);
                    closeModal();
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="detail-transaksi-modal"
            >
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    );
}

export default TransactionDetailModalHeader;
