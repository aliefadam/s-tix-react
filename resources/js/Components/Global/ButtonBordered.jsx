import React from "react";

function ButtonBordered({ type, name, props }) {
    return (
        <button
            type={type}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
            {...props}
        >
            {name}
        </button>
    );
}

export default ButtonBordered;
