import React from "react";

function TransactionHistoryButton({ id, openModal, modalId, name, color }) {
    const variant = () => {
        if (color == "green") {
            return "text-teal-700 border border-teal-700 hover:bg-teal-800";
        } else if (color == "red") {
            return "text-red-700 border border-red-700 hover:bg-red-800";
        }
    };
    return (
        <button
            onClick={(e) => openModal(e)}
            data-transaction-id={id}
            data-modal-target={modalId}
            data-modal-toggle={modalId}
            className={`btn-detail-transaksi w-[220px] text-center lg:text-sm text-xs px-3 py-2 rounded-lg poppins-semibold cursor-pointer hover:bg-opacity-20 duration-200 ${variant()}`}
        >
            <i
                data-transaction-id={id}
                className="fa-regular fa-eye mr-1"
                onClick={(e) => openModal(e)}
            />
            {name}
        </button>
    );
}

export default TransactionHistoryButton;
