import BreadCrumb from "@/Components/BreadCrumb";
import VoucherTable from "@/Components/Voucher/Table/VoucherTable";
import VoucherTableTitle from "@/Components/Voucher/Table/VoucherTableTitle";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import showConfirmation from "@/utils/showConfirmation";
import showLoading from "@/utils/showLoading";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function Index({ title, vouchers }) {
    const breadCrumbData = {
        active: title,
    };
    const { notification } = usePage().props;
    useEffect(() => {
        if (notification) {
            Notification(notification);
        }
    }, [notification]);

    const form = useForm();
    const handleDeleteVoucher = (e, id) => {
        e.preventDefault();
        showConfirmation({
            title: "Hapus Voucher",
            text: "Apakah anda yakin menghapus voucher ini ?",
            onConfirm: () => {
                form.delete(route("admin.voucher.delete", id), {
                    onStart: () => {
                        showLoading();
                    },
                });
            },
        });
    };

    const handleDeactiveVoucher = (e, id) => {
        e.preventDefault();
        showConfirmation({
            title: "Hapus Voucher",
            text: "Apakah anda yakin menonaktifkan voucher ini ?",
            onConfirm: () => {
                form.put(route("admin.voucher.deactivate", id), {
                    onStart: () => {
                        showLoading();
                    },
                });
            },
        });
    };

    const handleActiveVoucher = (e, id) => {
        e.preventDefault();
        showConfirmation({
            title: "Hapus Voucher",
            text: "Apakah anda yakin mengaktifkan voucher ini ?",
            onConfirm: () => {
                form.put(route("admin.voucher.activate", id), {
                    onStart: () => {
                        showLoading();
                    },
                });
            },
        });
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white shadow-md rounded-md overflow-hiddens">
                <VoucherTableTitle />
                <VoucherTable
                    vouchers={vouchers}
                    handleDeleteVoucher={handleDeleteVoucher}
                    handleActiveVoucher={handleActiveVoucher}
                    handleDeactiveVoucher={handleDeactiveVoucher}
                />
            </div>
        </AdminLayout>
    );
}

export default Index;
