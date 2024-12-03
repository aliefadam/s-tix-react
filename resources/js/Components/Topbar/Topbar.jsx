import liveClock from "@/utils/liveClock";
import React, { useEffect, useState } from "react";
import TopbarLiveClock from "./TopbarLiveClock";
import TopbarMenu from "./TopbarMenu";

function Topbar({ today, auth }) {
    const [live, setLive] = useState(today);
    useEffect(() => {
        setInterval(() => {
            setLive(liveClock());
        }, 1000);
    }, [live]);

    return (
        <nav className="fixed top-0 left-[250px] z-20 w-[calc(100%-250px)] bg-white h-[80px] px-5 flex justify-between items-center shadow-md">
            <TopbarLiveClock live={live} />
            <TopbarMenu auth={auth} />
        </nav>
    );
}

export default Topbar;
