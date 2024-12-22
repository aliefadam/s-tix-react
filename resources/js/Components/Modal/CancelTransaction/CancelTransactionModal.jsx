import React from "react";
import CancelTransactionModalHeader from "./CancelTransactionModalHeader";
import CancelTransactionModalBody from "./CancelTransactionModalBody";

function CancelTransactionModal({ handleSubmit, setData }) {
    return (
        <div
            id="pembatalan-transaksi-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <CancelTransactionModalHeader />
                    {/* Modal body */}
                    <CancelTransactionModalBody
                        handleSubmit={handleSubmit}
                        setData={setData}
                    />
                </div>
            </div>
        </div>
    );
}

export default CancelTransactionModal;
