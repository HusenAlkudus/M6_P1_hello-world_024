//// PERCOBAAN
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   const [nama, setNama] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     const namaBersih = nama.trim().replace(/\s+/g, " ");
//     router.push(
//       `/${"Kesehatan/PenghitungBMI/" + encodeURIComponent(namaBersih)}`,
//     );
//   }

//   return (
//     <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
//       <h1>Hai, perkenalkan dirimu</h1>

//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "grid", gap: 12, marginTop: 16 }}
//       >
//         <label>
//           <span>Nama lengkap</span>
//           <input
//             type="text"
//             value={nama}
//             onChange={(e) => setNama(e.target.value)}
//             required
//             style={{ display: "block", width: "100%", padding: 6 }}
//           />
//         </label>

//         <button type="submit" style={{ padding: 8 }}>
//           Lanjut
//         </button>
//       </form>
//     </main>
//   );
// }

// LATIHAN 1
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const namaBersih = nama.trim().replace(/\s+/g, " ");

    if (namaBersih.length < 3) {
      setError("Nama minimal 3 karakter (spasi saja tidak dihitung).");
      return;
    }

    setError("");
    router.push(
      `/${"Kesehatan/PenghitungBMI/" + encodeURIComponent(namaBersih)}`,
    );
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Hai, perkenalkan dirimu</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <span>Nama lengkap</span>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
          {error && (
            <small style={{ color: "red", display: "block", marginTop: 4 }}>
              {error}
            </small>
          )}
        </label>

        <button type="submit" style={{ padding: 8 }}>
          Lanjut
        </button>
      </form>
    </main>
  );
}
