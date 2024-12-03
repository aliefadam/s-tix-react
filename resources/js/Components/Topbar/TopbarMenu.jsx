import React, { useEffect } from "react";
import TopbarDropdown from "./TopbarDropdown";
import TopbarDropdownList from "./TopbarDropdownList";
import { initDropdowns, initFlowbite } from "flowbite";

function TopbarMenu({ auth }) {
    return (
        <div className="">
            <TopbarDropdown auth={auth} />
            <TopbarDropdownList auth={auth} />
        </div>
    );
}

export default TopbarMenu;
