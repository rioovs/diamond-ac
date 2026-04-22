"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan cuci AC?",
    a: "Cuci AC biasanya membutuhkan waktu 45–90 menit per unit, tergantung kondisi kebersihan dan jenis AC. Untuk AC split standar, umumnya selesai dalam 1 jam.",
  },
  {
    q: "Apakah ada biaya kunjungan?",
    a: "Biaya kunjungan sudah termasuk dalam harga layanan untuk radius 15 km dari pusat Jakarta. Untuk lokasi lebih dari 15 km, ada biaya transportasi tambahan yang akan dikonfirmasi sebelumnya.",
  },
  {
    q: "Berapa lama garansi setelah service?",
    a: "Kami memberikan garansi 30 hari untuk cuci AC dan isi freon, 60–90 hari untuk bongkar pasang, dan 7 hari untuk perbaikan. Jika ada masalah dalam masa garansi, kami akan datang kembali tanpa biaya tambahan.",
  },
  {
    q: "Apakah teknisi membawa spare part?",
    a: "Teknisi kami membawa spare part umum seperti kapasitor, thermostat, dan komponen minor lainnya. Untuk spare part khusus atau mahal, kami akan konfirmasi harga terlebih dahulu.",
  },
  {
    q: "Bisa service malam hari atau hari Minggu?",
    a: "Ya! Kami beroperasi setiap hari Senin–Minggu pukul 07.00–21.00. Untuk kondisi darurat di luar jam tersebut, Anda bisa menghubungi kami via WhatsApp dan kami akan berusaha mengakomodasi.",
  },
  {
    q: "Merek AC apa saja yang bisa ditangani?",
    a: "Kami menangani semua merek AC dan kulkas, termasuk Samsung, LG, Daikin, Panasonic, Sharp, Mitsubishi, Hitachi, Toshiba, Aqua, Gree, dan merek lainnya.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
