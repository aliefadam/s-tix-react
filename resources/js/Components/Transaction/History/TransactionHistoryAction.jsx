import React from "react";
import TransactionHistoryButton from "./TransactionHistoryButton";

function TransactionHistoryAction({ status, id, openModal, setData = null }) {
    return (
        <div className="flex justify-end gap-2 mt-5">
            <TransactionHistoryButton
                color={"green"}
                id={id}
                name={"Lihat Detail Transaksi"}
                modalId={"detail-transaksi-modal"}
                openModal={openModal}
                icon={"fa-regular fa-eye"}
            />
            {status === "Menunggu Pembayaran" && (
                <TransactionHistoryButton
                    setData={setData}
                    color={"red"}
                    id={id}
                    name={"Batalkan Transaksi"}
                    modalId={"pembatalan-transaksi-modal"}
                    openModal={openModal}
                    icon={"fa-regular fa-xmark"}
                />
            )}
        </div>
    );
}

export default TransactionHistoryAction;
