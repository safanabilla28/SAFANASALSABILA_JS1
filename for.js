// Contoh 1: Mengulangi 5 kali
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + (i + 1));
}

// Contoh 2: Mengulangi untuk setiap elemen dalam array
let buah = ["apel", "pisang", "ceri", "mangga"];

for (let i = 0; i < buah.length; i++) {
    console.log("Saya suka " + buah[i]);
}

// Contoh 3: Mengulangi menggunakan for-in untuk properti objek
let person = {
    nama: "John",
    usia: 30,
    pekerjaan: "developer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
