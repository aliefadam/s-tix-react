import { Html5Qrcode } from "html5-qrcode";
import Notification from "./notification";

// const scannerTicket = (onDone) => {
//     let scanner; // Deklarasikan scanner di luar agar bisa digunakan lintas fungsi

//     const stopScanner = () => {
//         scanner = scanner = new Instascan.Scanner({
//             video: document.getElementById("preview"),
//         });
//         if (scanner) {
//             scanner
//                 .stop()
//                 .then(() => {
//                     console.log("Camera stopped successfully.");
//                 })
//                 .catch((err) => {
//                     console.error("Failed to stop the camera:", err);
//                 });
//         }
//     };

//     const startScanner = () => {
//         scanner = new Instascan.Scanner({
//             video: document.getElementById("preview"),
//         });

//         // Event listener ketika QR code terdeteksi
//         scanner.addListener("scan", function (content) {
//             onDone(content);
//         });

//         // Mendapatkan daftar kamera yang tersedia
//         Instascan.Camera.getCameras()
//             .then(function (cameras) {
//                 if (cameras.length > 0) {
//                     scanner.start(cameras[0]);
//                 } else {
//                     console.error("No cameras found.");
//                 }
//             })
//             .catch(function (e) {
//                 Notification({
//                     title: "Error",
//                     text: "Harap Refresh Browser",
//                     icon: "error",
//                 });
//             });
//     };

//     // Hentikan scanner sebelum memulai yang baru
//     stopScanner();
//     startScanner();
// };

let lastScannedCode = null;
const scannerTicket = (onDone, isResume) => {
    const html5QrCode = new Html5Qrcode("preview");
    html5QrCode
        .start(
            { facingMode: "environment" }, // Kamera belakang
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            (decodedText, decodedResult) => {
                html5QrCode.pause();
                const result = onDone(decodedText);
                result.then((result) => {
                    console.log(result);
                    if (!result) {
                        html5QrCode.resume();
                    }
                });

                // if (!result) {
                //     html5QrCode.resume();
                // }
                // console.log(`Code scanned: ${decodedText}`);
                // if (decodedText !== lastScannedCode) {
                //     // Jika kode berbeda dari sebelumnya, proses hasil baru
                //     lastScannedCode = decodedText;
                //     onDone(decodedText);

                //     // Reset lastScannedCode setelah beberapa waktu (opsional)
                //     setTimeout(() => {
                //         lastScannedCode = null;
                //     }, 1000); // Misalnya, reset setelah 5 detik
                // }
            },
            (errorMessage) => {
                // console.warn(`Error scanning: ${errorMessage}`);
            }
        )
        .then(() => {
            // Menghapus efek mirror pada elemen video
            const videoElement = document.querySelector("#preview video");
            if (videoElement) {
                videoElement.style.transform = "scaleX(-1)"; // Menghilangkan mirror (defaultnya mirror dengan scaleX(-1))
            }
        })
        .catch((err) => {
            console.error("Camera error:", err);
        });
};

export default scannerTicket;
