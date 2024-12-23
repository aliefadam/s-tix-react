import React from "react";

function HowToModalFooter() {
    return (
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
                data-modal-hide="how-to-buy-modal"
                type="button"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
                Baik, mengerti
            </button>
        </div>
    );
}

export default HowToModalFooter;
