import InputGroup from "@/Components/Profile/InputGroup";
import BlankLayout from "@/Layouts/BlankLayout";
import { useForm } from "@inertiajs/react";
import React from "react";

function Payment({ title }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        invoice: "",
    });

    const errorClass = () => {
        if (errors.invoice) {
            return "border border-red-500 focus:border-red-500 focus:ring-0";
        } else {
            return "border border-gray-300 focus:ring-teal-500 focus:border-teal-500";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("simulate-payment.post"), {
            onSuccess: () => reset(),
        });
    };
    return (
        <BlankLayout title={title}>
            <div className="w-1/3">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-teal-700 poppins-black text-4xl">
                        S-TIX
                    </h1>
                    <p className="text-teal-700 poppins-semibold text-lg">
                        SIMULASI PEMBAYARAN
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="w-full border-2 border-teal-700 p-10 rounded-md mt-8"
                >
                    <div className="mb-5">
                        <label
                            htmlFor="invoice"
                            className="block text-center mb-3 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Masukkan Nomor Invoice
                        </label>
                        <input
                            type="text"
                            id="invoice"
                            name="invoice"
                            autoComplete="off"
                            value={data.invoice}
                            onChange={(e) => setData("invoice", e.target.value)}
                            className={`${errorClass()} text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                        />

                        {errors.invoice && (
                            <p className="mt-2 text-sm text-center text-red-600 dark:text-red-500">
                                {errors.invoice}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 ${
                            processing ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Bayar
                    </button>
                </form>
            </div>

            <img
                src="/imgs/logo.png"
                alt=""
                className="absolute top-10 w-10 rounded-md p-1 bg-teal-700"
            />
            <span className="absolute bottom-10">
                <p className="text-sm poppins-medium text-teal-700">
                    S-TIX © 2024. All rights reserved
                </p>
            </span>
        </BlankLayout>
    );
}

export default Payment;
