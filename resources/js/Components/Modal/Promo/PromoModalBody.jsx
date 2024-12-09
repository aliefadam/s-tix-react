import Button from "@/Components/Global/Button";
import InputGroup from "@/Components/Profile/InputGroup";
import { data } from "autoprefixer";
import React from "react";

function PromoModalBody({ errors, processing, data, setData, handleCekPromo }) {
    return (
        <>
            <div className="p-4 md:p-5 space-y-4 -mb-5">
                <InputGroup
                    id={"promo"}
                    label={"Masukkan Kode Promo"}
                    type={"text"}
                    onChange={(e) => setData("promo", e.target.value)}
                    value={data.promo}
                    error={errors.promo}
                />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Button
                    onClick={handleCekPromo}
                    processing={processing}
                    type="submit"
                    color={"teal"}
                    name={"Cek"}
                />
                <button
                    data-modal-hide="show-promo-modal"
                    type="button"
                    id="btn-close-modal-show-promo"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Batal
                </button>
            </div>
        </>
    );
}

export default PromoModalBody;
