const steps = [
  {
    step: "01",
    emoji: "📱",
    title: "Hubungi Kami",
    desc: "Hubungi via WhatsApp atau telepon. Ceritakan masalah AC Anda dan lokasi. Kami siap merespon dalam 5 menit.",
    color: "bg-blue-600",
  },
  {
    step: "02",
    emoji: "📅",
    title: "Jadwal Kunjungan",
    desc: "Kami atur jadwal kunjungan sesuai waktu Anda. Teknisi datang tepat waktu dengan peralatan lengkap.",
    color: "bg-yellow-500",
  },
  {
    step: "03",
    emoji: "✅",
    title: "AC Bersih & Dingin",
    desc: "Teknisi bekerja profesional dan rapih. Selesai, AC Anda kembali bersih, sejuk, dan optimal. Garansi pekerjaan!",
    color: "bg-green-600",
  },
];

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Semudah 3 Langkah
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Proses pemesanan yang mudah dan cepat. AC Anda akan kembali sejuk dalam waktu singkat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-600 via-yellow-400 to-green-500" />

          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {/* Step circle */}
              <div className={`w-16 h-16 ${s.color} rounded-full flex flex-col items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                <span className="text-2xl">{s.emoji}</span>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${s.color} text-white`}>
                  Langkah {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20service%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <span>💬</span> Mulai via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
