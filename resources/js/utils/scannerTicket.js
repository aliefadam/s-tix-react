import { Html5Qrcode } from "html5-qrcode";
import Notification from "./notification";

const scannerTicket = (onDone) => {
    const html5QrCode = new Html5Qrcode("preview");
    const scannedCodes = new Set();
    html5QrCode
        .start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            (decodedText, decodedResult) => {
                if (!scannedCodes.has(decodedText)) {
                    scannedCodes.add(decodedText);
                    html5QrCode.pause();
                    onDone(decodedText, html5QrCode, scannedCodes);
                }
            },
            (errorMessage) => {}
        )
        .then(() => {
            const videoElement = document.querySelector("#preview video");
            if (videoElement) {
                videoElement.style.transform = "scaleX(-1)";
            }
        })
        .catch((err) => {
            console.error("Camera error:", err);
        });
};

export default scannerTicket;
