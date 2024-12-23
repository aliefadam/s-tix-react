import React from "react";
import HowToModalHeader from "./HowToModalHeader";
import HowToModalBody from "./HowToModalBody";
import HowToModalFooter from "./HowToModalFooter";

function HowToModal() {
    return (
        <div
            id="how-to-buy-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <HowToModalHeader />
                    <HowToModalBody />
                    <HowToModalFooter />
                </div>
            </div>
        </div>
    );
}

export default HowToModal;
