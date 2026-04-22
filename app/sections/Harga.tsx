"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const paketHarga = [
  {
    kategori: "Cuci AC",
    paket: [
      {
        nama: "AC Split 1/2 - 1 PK",
        harga: "Rp 80.000",
        fitur: ["Cuci filter indoor", "Bersihkan evaporator", "Cuci kondensor outdoor", "Cek freon", "Laporan kondisi AC"],
      },
      {
        nama: "AC Split 1.5 - 2 PK",
        harga: "Rp 100.000",
        highlight: true,
        fitur: ["Semua layanan 1 PK", "Cuci blower", "Pembersihan talang air", "Cek arus listrik", "Garansi 30 hari"],
      },
      {
        nama: "AC Split 2.5 PK ke atas",
        harga: "Rp 150.000",
        fitur: ["Semua layanan 2 PK", "Chemical wash", "Desinfektan", "Cek kapasitas pendinginan", "Prioritas jadwal"],
      },
    ],
  },
  {
    kategori: "Bongkar / Pasang AC",
    paket: [
      {
        nama: "Bongkar AC",
        harga: "Rp 200.000",
        fitur: ["Pembongkaran unit indoor", "Pembongkaran unit outdoor", "Pelepasan pipa freon", "Pengemasan aman", "Tidak termasuk pasang"],
      },
      {
        nama: "Pasang AC Baru",
        harga: "Rp 350.000",
        highlight: true,
        fitur: ["Instalasi unit indoor & outdoor", "Pipa 3 meter termasuk", "Kabel 4 meter termasuk", "Vacuum freon", "Garansi instalasi 90 hari"],
      },
      {
        nama: "Pindah AC",
        harga: "Rp 450.000",
        fitur: ["Bongkar unit lama", "Pasang di lokasi baru", "Pipa & kabel tambahan", "Isi ulang freon", "Garansi instalasi 60 hari"],
      },
    ],
  },
  {
    kategori: "Isi / Tambah Freon",
    paket: [
      {
        nama: "Freon R22",
        harga: "Rp 150.000",
        fitur: ["Cek tekanan freon", "Tambah freon R22", "Cek kebocoran", "Cek suhu pendinginan", "Laporan kondisi AC"],
      },
      {
        nama: "Freon R32 / R410A",
        harga: "Rp 200.000",
        highlight: true,
        fitur: ["Cek tekanan freon", "Tambah freon R32/R410A", "Cek kebocoran", "Cek suhu pendinginan", "Garansi 30 hari"],
      },
      {
        nama: "Isi Penuh Freon",
        harga: "Rp 350.000",
        fitur: ["Vacuum freon lama", "Isi freon baru penuh", "Cek seluruh sistem", "Perbaikan kebocoran minor", "Garansi 60 hari"],
      },
    ],
  },
];

export default function Harga() {
  const [active, setActive] = useState(0);

  return (
    <section id="harga" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Harga Layanan
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Harga Transparan & Kompetitif
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tidak ada biaya tersembunyi. Semua harga sudah termasuk biaya kunjungan dan tenaga kerja.
          </p>
        </div>

        {/* Tab */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {paketHarga.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === i
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p.kategori}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paketHarga[active].paket.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border-2 p-6 transition-all ${
                p.highlight
                  ? "border-blue-600 shadow-xl shadow-blue-100 scale-105"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-1 rounded-full">
                  ⭐ Paling Populer
                </div>
              )}
              <h3 className="font-bold text-gray-900 text-xl mb-1">{p.nama}</h3>
              <p className="text-3xl font-extrabold text-blue-700 mb-6">{p.harga}</p>
              <ul className="space-y-3 mb-8">
                {p.fitur.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20pesan%20layanan%20AC"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  p.highlight
                    ? "bg-blue-700 hover:bg-blue-800 text-white"
                    : "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                }`}
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          * Harga sudah termasuk biaya kunjungan dalam radius 15 km. Hubungi kami untuk lokasi lebih jauh.
        </p>
      </div>
    </section>
  );
}
