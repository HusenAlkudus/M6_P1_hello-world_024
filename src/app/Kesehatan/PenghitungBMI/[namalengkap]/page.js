// // PERCOBAAN
// "use client";

// import { useState } from "react";
// import { useParams } from "next/navigation";

// function hitungBMI(beratKg, tinggiCm) {
//   const m = tinggiCm / 100;
//   const bmi = beratKg / (m * m);

//   let kategori;
//   if (bmi < 18.5) kategori = "Berat badan kurang";
//   else if (bmi < 25) kategori = "Normal";
//   else if (bmi < 30) kategori = "Berat badan berlebih";
//   else kategori = "Obesitas";

//   return { bmi: bmi.toFixed(1), kategori };
// }

// export default function Page() {
//   const params = useParams();
//   const nama = decodeURIComponent(params.namalengkap).replaceAll("-", " ");

//   const [berat, setBerat] = useState("");
//   const [tinggi, setTinggi] = useState("");
//   const [hasil, setHasil] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
//   }

//   return (
//     <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
//       <h1>Halo, {nama}</h1>
//       <p>Silakan masukkan berat badan dan tinggi kamu!</p>

//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "grid", gap: 12, marginTop: 16 }}
//       >
//         <label>
//           <label htmlFor="berat">Berat (kg)</label>
//           <input
//             type="number"
//             step="any"
//             min="1"
//             value={berat}
//             onChange={(e) => setBerat(e.target.value)}
//             required
//             style={{ display: "block", width: "100%", padding: 6 }}
//           />
//         </label>

//         <label>
//           <label htmlFor="berat">Tinggi (cm)</label>
//           <input
//             type="number"
//             step="any"
//             min="1"
//             value={tinggi}
//             onChange={(e) => setTinggi(e.target.value)}
//             required
//             style={{ display: "block", width: "100%", padding: 6 }}
//           />
//         </label>

//         <button type="submit" style={{ padding: 8 }}>
//           Hitung
//         </button>
//       </form>

//       {hasil && (
//         <p style={{ marginTop: 16 }}>
//           BMI kamu: <strong>{hasil.bmi}</strong> ({hasil.kategori})
//         </p>
//       )}
//     </main>
//   );
// }


// LATIHAN 3, 4, DAN 5
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { hitungBMI } from "../../../../lib/bmi";

export default function Page() {
  const params = useParams();
  const nama = decodeURIComponent(params.namalengkap).replaceAll("-", " ");

  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
  }

  function handleReset() {
    setBerat("");
    setTinggi("");
    setHasil(null);
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Halo, {nama}</h1>
      <p>Silakan masukkan berat badan dan tinggi kamu!</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <label htmlFor="berat">Berat (kg)</label>
          <input
            type="number"
            step="any"
            min="1"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        <label>
          <label htmlFor="tinggi">Tinggi (cm)</label>
          <input
            type="number"
            step="any"
            min="1"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        <button type="submit" style={{ padding: 8 }}>
          Hitung
        </button>

        <button type="button" onClick={handleReset} style={{ padding: 8 }}>
          Reset
        </button>
      </form>

      {hasil && (
        <p style={{ marginTop: 16, color: hasil.warna }}>
          BMI kamu: <strong>{hasil.bmi}</strong> ({hasil.kategori})
        </p>
      )}

      <p style={{ marginTop: 24 }}>
        <Link href="/">Bukan kamu? Ganti nama</Link>
      </p>
    </main>
  );
}
