import React from "react";
import FooterItem from "./FooterItem";
import FooterFollowUs from "./FooterFollowUs";

function FooterExtras() {
    return (
        <div className="p-10 bg-teal-700 bg-opacity-5">
            <div className="grid grid-cols-4 gap-5">
                <FooterItem
                    title={"S-TIX"}
                    links={[
                        {
                            name: "Tentang Kami",
                            url: "home",
                            type: "link",
                        },
                        {
                            name: "Syarat dan Ketentuan",
                            url: "home",
                            type: "button",
                            modalId: "term-condition-modal",
                        },
                    ]}
                />
                <FooterItem
                    title={"Layanan Kami"}
                    links={[
                        {
                            name: "Ticketing Management System",
                            url: "home",
                            type: "link",
                        },
                    ]}
                />
                {/* <FooterItem
                    title={"Dukungan"}
                    links={[
                        {
                            name: "Customer Service",
                            url: "home",
                            },
                            ]}
                            /> */}
                <FooterItem
                    title={"Lainnya"}
                    links={[
                        {
                            name: "Cara Membeli Tiket",
                            url: "home",
                            type: "link",
                        },
                    ]}
                />
                <div className="poppins-bold">
                    <span>Ikuti Kami</span>
                    <FooterFollowUs />
                </div>
            </div>
        </div>
    );
}

export default FooterExtras;
