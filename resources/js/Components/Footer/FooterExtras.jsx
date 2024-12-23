import React from "react";
import FooterItem from "./FooterItem";
import FooterFollowUs from "./FooterFollowUs";

function FooterExtras() {
    return (
        <div className="md:p-10 p-5 bg-teal-700 bg-opacity-5">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
                <FooterItem
                    title={"S-TIX"}
                    links={[
                        {
                            name: "Tentang Kami",
                            url: "home",
                            type: "button",
                            modalId: "about-us-modal",
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
                            type: "button",
                            modalId: "tms-modal",
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
                            type: "button",
                            modalId: "how-to-buy-modal",
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
