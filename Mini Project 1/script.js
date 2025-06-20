/* Projek section pertama */
const benda = ["batu", "gunting", "kertas"];

function ketik() {
  const tebakan = document.getElementById("tebakan").value;
  let rapihin = tebakan.toLowerCase().trim();

  const pilihankomputerketikan = getPilihanKomputer();
  tentukanHasil(rapihin, pilihankomputerketikan);
}

function pilihan(pilihanUser) {
  const pilihanKomputer = getPilihanKomputer();
  tentukanHasil(pilihanUser, pilihanKomputer);
}

function getPilihanKomputer() {
  const acak = Math.floor(Math.random() * benda.length);
  return benda[acak];
}

function tentukanHasil(user, komputer) {
  let pilihanKomputer = benda.indexOf(komputer);

  const outputteks = document.getElementById("outputteks");
  const outputgambar = document.getElementById("outputgambar");
  const warnanotif = document.getElementById("warnanotif");

  if (user === komputer) {
    outputgambar.innerHTML = `<img width="300px" height="300px" src="gambar/${pilihanKomputer}.jpg">`;
    outputteks.textContent = `Woww Anda lawan yang cukup kuat. Anda memilih ${user} dan sistem memilih ${komputer}. Hasil Anda seri =👀.`;
    warnanotif.style.background = "#ffffffe5";
  } else if (
    (user === "gunting" && komputer === "kertas") ||
    (user === "batu" && komputer === "gunting") ||
    (user === "kertas" && komputer === "batu")
  ) {
    outputgambar.innerHTML = `<img width="300px" height="300px" src="gambar/${pilihanKomputer}.jpg">`;
    outputteks.textContent = `Hurayy!!! Anda memilih ${user} dan sistem memilih ${komputer}. Anda menang 🏆.`;
    warnanotif.style.background = "#4aff4a";
  } else {
    outputgambar.innerHTML = `<img width="300px" height="300px" src="gambar/${pilihanKomputer}.jpg">`;
    outputteks.textContent = `Huhuhu syedihh ce 😢. Anda memilih ${user} dan sistem memilih ${komputer}. Anda kalah ❌.`;
    warnanotif.style.background = "#bc1a1a";
  }
}

/* Projek section kedua */

function kapitalisasi(nama) {
  return nama
    .toLowerCase()
    .split(" ")
    .filter((kata) => kata.length > 0)
    .map((kata) => kata[0].toUpperCase() + kata.slice(1))
    .join(" ");
}

function hitung() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const namaRapih = kapitalisasi(nama);
  const konstantakosong = "";
  let nilai = [];
  let perhitungan = 0;
  let perulangan = true;
  let nilaiAkhir = 0;

  if (nama != konstantakosong && kelas != konstantakosong) {
    do {
      let pengandaian = window.prompt(
        "Masukkan nilai siswa:  (tekan enter dalam keadaan kosong untuk selesai)"
      );
      if (pengandaian != konstantakosong) {
        let rubahkeangka = Number(pengandaian);
        nilai.push(rubahkeangka);
      } else if (pengandaian == konstantakosong) {
        perulangan = false;
      }
    } while (perulangan);

    for (i = 0; i < nilai.length; i++) {
      perhitungan += nilai[i];
    }

    nilaiAkhir = perhitungan / nilai.length;
    window.alert(
      `Nama siswa: ${namaRapih}\nKelas: ${kelas}\nNilai rata-rata: ${nilaiAkhir}`
    );
  } else {
    window.alert("Data tidak boleh kosong sama sekali");
  }
}
