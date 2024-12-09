import React from "react";

function Button({ type, name, processing = false, color, onClick = () => {} }) {
    return (
        <button
            onClick={onClick}
            disabled={processing}
            type={type}
            className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800 ${
                processing ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {name}
        </button>
    );
}

export default Button;
