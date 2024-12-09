import React from "react";
import PromoModalHeader from "./PromoModalHeader";
import PromoModalBody from "./PromoModalBody";

function PromoModal({ data, setData, errors, processing, handleCekPromo }) {
    return (
        <div
            id="show-promo-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <PromoModalHeader />
                    <PromoModalBody
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        handleCekPromo={handleCekPromo}
                    />
                </div>
            </div>
        </div>
    );
}

export default PromoModal;
