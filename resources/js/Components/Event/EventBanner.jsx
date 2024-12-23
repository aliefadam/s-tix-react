import React from "react";

function EventBanner({ path }) {
    return (
        <img
            src={path}
            className="w-full md:h-[500px] h-[200px] object-cover rounded-md"
            alt=""
        />
    );
}

export default EventBanner;
