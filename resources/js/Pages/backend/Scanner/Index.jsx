import BreadCrumb from "@/Components/BreadCrumb";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import scannerTicket from "@/utils/scannerTicket";
import sendRequest from "@/utils/sendRequest";
import showLoading from "@/utils/showLoading";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Html5Qrcode } from "html5-qrcode";
import CameraScan from "@/Components/Scanner/CameraScan";
import FoundETicket from "./FoundETicket";
import showConfirmation from "@/utils/showConfirmation";

function Index({ title }) {
    const [isFound, setIsFound] = useState(false);
    const [transaction, setTransaction] = useState({});
    const [isChecked, setIsChecked] = useState(false);

    const disableButton = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        invoice: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        showConfirmation({
            title: "Konfirmasi",
            text: "Ticket Akan diaktivasi, QRCODE ini tidak akan bisa digunakan lagi, apakah yakin?",
            onConfirm: () => {
                post(route("admin.activateTicket"), {
                    onSuccess: () => {
                        setIsFound(false);
                    },
                });
            },
        });
    };

    const { notification } = usePage().props;
    useEffect(() => {
        scannerTicket(async (decodedText, html5QrCode, scannedCodes) => {
            showLoading();
            const invoice = decodedText;
            await sendRequest({
                url: route("find-transaction-by-invoice", invoice),
                method: "GET",
                onSuccess: (result) => {
                    const tr = result.transaction;
                    if (tr != null) {
                        setTransaction(tr);
                        setData("invoice", invoice);
                        setIsFound(true);
                        Swal.close();
                    } else {
                        Notification({
                            title: "Gagal",
                            text: "E-Tiket tidak ditemukan",
                            icon: "error",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                html5QrCode.resume();
                                scannedCodes.clear();
                            }
                        });
                    }
                },
            });
        });

        if (notification) {
            Notification(notification);
        }
    }, [notification]);
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={{ active: title }} />

            <div className="mt-5">
                <CameraScan isFound={isFound} />
                <FoundETicket
                    isFound={isFound}
                    transaction={transaction}
                    handleSubmit={handleSubmit}
                    disableButton={disableButton}
                    isChecked={isChecked}
                />
            </div>
        </AdminLayout>
    );
}

export default Index;
