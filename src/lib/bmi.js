// LATIHAN 2

export function hitungBMI(beratKg, tinggiCm) {
  const m = tinggiCm / 100;
  const bmi = beratKg / (m * m);

  let kategori;
  let warna;
  if (bmi < 18.5) {
    kategori = "Berat badan kurang";
    warna = "blue";
  } else if (bmi < 25) {
    kategori = "Normal";
    warna = "green";
  } else if (bmi < 30) {
    kategori = "Berat badan berlebih";
    warna = "#d4a017";
  } else {
    kategori = "Obesitas";
    warna = "red";
  }

  return { bmi: bmi.toFixed(1), kategori, warna };
}

 