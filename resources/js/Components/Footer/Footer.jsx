import React from "react";
import FooterItem from "./FooterItem";
import FooterFollowUs from "./FooterFollowUs";
import FooterExtras from "./FooterExtras";
import TermConditionModal from "../Modal/TC/TermConditionModal";
import AboutUsModal from "../Modal/AboutUs/AboutUsModal";
import HowToModal from "../Modal/HowTo/HowToModal";
import TMSModal from "../Modal/TMS/TMSModal";

function Footer() {
    return (
        <footer className="mt-5 border-t">
            <FooterExtras />
            <div className="flex justify-center items-center bg-gradient-to-r from-teal-500 to-teal-700 py-4 text-white">
                <span className="text-sm poppins-medium">
                    S-Tix © 2024. All rights reserved
                </span>
            </div>

            <TermConditionModal />
            <AboutUsModal />
            <HowToModal />
            <TMSModal />
        </footer>
    );
}

export default Footer;
