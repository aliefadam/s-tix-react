import React from "react";

function TopbarLiveClock({ live }) {
    return (
        <div className="flex items-center gap-4 text-teal-700">
            <button className="border border-teal-700 px-3 py-1.5 rounded-md hover:bg-teal-700 hover:bg-opacity-20 duration-200 focus:ring-4 focus:ring-teal-300">
                <i className="fa-solid fa-bars text-xl" />
            </button>
            <h1 className="poppins-medium" id="live-clock">
                {live}
            </h1>
        </div>
    );
}

export default TopbarLiveClock;
