import React from "react";
import VendorCredentialsModalBody from "./VendorCredentialsModalBody";
import VendorCredentialsModalFooter from "./VendorCredentialsModalFooter";
import VendorCredentialsModalHead from "./VendorCredentialsModalHead";

function VendorCredentialsModal({ email, password }) {
    return (
        <>
            <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Toggle modal
            </button>

            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full flex bg-black bg-opacity-50"
            >
                <div className="animate__animated animate__pulse relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <VendorCredentialsModalHead />
                        <VendorCredentialsModalBody
                            email={email}
                            password={password}
                        />
                        <VendorCredentialsModalFooter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VendorCredentialsModal;
