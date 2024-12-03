const liveClock = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
    ];

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const day = days[date.getDay()];
    const dateFormat = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()].padStart(2, "0");
    const year = date.getFullYear();

    const liveClock = `${day}, ${dateFormat} ${month} ${year} - ${hours}:${minutes}:${seconds}`;
    return liveClock;
};

export default liveClock;
