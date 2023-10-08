let musim = "hujan";
let waktu = "siang";
let memilikiPayung = true;

if (musim === "cerah") {
    if (waktu === "pagi") {
        console.log("Saatnya berjalan-jalan.");
    } else if (waktu === "siang") {
        if (memilikiPayung) {
            console.log("Saatnya bermain diluar, dan bawa payung.");
        } else {
            console.log("Saatnya bermain diluar.");
        }
    } else {
        console.log("Saatnya menikmati malam.");
    }
} else if (musim === "hujan") {
    if (memilikiPayung) {
        console.log("Sebaiknya bawa payung dan tinggal di dalam rumah.");
    } else {
        console.log("Sebaiknya tinggal di dalam rumah.");
    }
} else {
    console.log("Kondisi cuaca tidak diketahui.");
}
