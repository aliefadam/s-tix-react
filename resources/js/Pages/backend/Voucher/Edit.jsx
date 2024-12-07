import BreadCrumb from "@/Components/BreadCrumb";
import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import SelectUnit from "@/Components/Voucher/Form/SelectUnit";
import AdminLayout from "@/Layouts/AdminLayout";
import Notification from "@/utils/notification";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function Edit({ title, voucher }) {
    const breadCrumbData = {
        before: [
            {
                url: route("admin.voucher.index"),
                name: "Voucher",
            },
        ],
        active: title,
    };
    const { notification } = usePage().props;
    useEffect(() => {
        if (notification) {
            Notification(notification);
        }
    }, [notification]);

    const { data, setData, put, processing, errors } = useForm({
        code: voucher.code,
        unit: voucher.unit,
        nominal: voucher.nominal_raw,
        minimal_transaction: voucher.minimal_transaction_raw,
        maximal_used: voucher.maximal_used_raw,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("admin.voucher.update", voucher.id));
    };

    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={breadCrumbData} />

            <div className="mt-5 bg-white rounded-md shadow-md p-5 w-1/2">
                <form action="" onSubmit={handleSubmit}>
                    <InputGroup
                        id={"code"}
                        label={"Kode Voucher"}
                        type={"text"}
                        value={data.code}
                        onChange={(e) => setData("code", e.target.value)}
                        error={errors.code}
                        placeholder={"Gunakan huruf kapital"}
                    />
                    <SelectUnit data={data} setData={setData} errors={errors} />
                    <InputGroup
                        id={"nominal"}
                        label={"Nominal"}
                        moreLabel={
                            <span className="text-sm text-gray-500">
                                (Masukkan sesuai unit)
                            </span>
                        }
                        type={"number"}
                        value={data.nominal}
                        onChange={(e) => setData("nominal", e.target.value)}
                        error={errors.nominal}
                    />
                    <InputGroup
                        id={"minimal_transaction"}
                        label={"Minimal Pembelian (Rp)"}
                        type={"number"}
                        value={data.minimal_transaction}
                        onChange={(e) =>
                            setData("minimal_transaction", e.target.value)
                        }
                        error={errors.minimal_transaction}
                    />
                    <InputGroup
                        id={"maximal_used"}
                        label={"Maksimal Pemakaian Voucher"}
                        type={"number"}
                        value={data.maximal_used}
                        onChange={(e) =>
                            setData("maximal_used", e.target.value)
                        }
                        placeholder={"Masukkan 0 jika tidak ada batasan"}
                        error={errors.maximal_used}
                    />
                    <div className="flex justify-end">
                        <Button
                            color={"teal"}
                            name={"Simpan"}
                            processing={processing}
                            type={"submit"}
                        />
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default Edit;
