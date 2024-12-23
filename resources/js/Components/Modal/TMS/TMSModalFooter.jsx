import React from "react";

function TMSModalFooter() {
    return (
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=62895364711840&text&type=phone_number&app_absent=0"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                <i className="fa-brands fa-whatsapp mr-2"></i>
                Mulai obrolan di Whatsapp
            </a>
        </div>
    );
}

export default TMSModalFooter;
