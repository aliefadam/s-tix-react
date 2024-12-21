import BreadCrumb from "@/Components/BreadCrumb";
import AdminLayout from "@/Layouts/AdminLayout";
// import Instascan from "instascan";
// import stampit from "stampit";
import React, { useEffect } from "react";

function Index({ title }) {
    useEffect(() => {
        // let scanner = new Instascan.Scanner({
        //     video: document.getElementById("preview"),
        // });
        // const html5QrCode = new Html5Qrcode("preview");
        // const cameraConfig = { fps: 10, qrbox: 250 };
        // html5QrCode.start(
        //     { facingMode: "environment" },
        //     cameraConfig,
        //     (decodedText) => {
        //         console.log(`Code scanned = ${decodedText}`);
        //     },
        //     (errorMessage) => {
        //         console.warn(`QR Code no match: ${errorMessage}`);
        //     }
        // );
        // return () => {
        //     // Stop the scanner when component unmounts
        //     html5QrCode
        //         .stop()
        //         .catch((err) => console.error("Failed to stop scanner", err));
        // };
    }, []);
    return (
        <AdminLayout title={title}>
            <BreadCrumb breadCrumbData={{ active: title }} />

            <div id="preview"></div>
        </AdminLayout>
    );
}

export default Index;
