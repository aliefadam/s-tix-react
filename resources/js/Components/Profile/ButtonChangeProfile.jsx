import React from "react";

function ButtonChangeProfile({ processing }) {
    return (
        <div className="flex justify-center items-center col-span-2">
            <button
                type="submit"
                disabled={processing}
                className={`text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm w-1/3 px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ${
                    processing ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Simpan
            </button>
        </div>
    );
}

export default ButtonChangeProfile;
