import { Star } from "lucide-react";

const testimonials = [
  {
    nama: "Nanda Fitria",
    lokasi: "Probolinggo",
    rating: 5,
    teks: "Pelayanan terbaik dan ga rugi dah kalau mau membersihkan AC. Teknisinya profesional dan hasilnya memuaskan!",
    waktu: "1 bulan lalu",
    layanan: "Cuci AC",
    initial: "NF",
  },
  {
    nama: "Dini Praba",
    lokasi: "Probolinggo",
    rating: 5,
    teks: "Pekerjaannya cepat, komunikasi saat tanya-tanya jasa lancar, tidak PHP. Pekerjanya helpful, bisa ditanya-tanya masalah/kesulitan perihal AC.",
    waktu: "5 bulan lalu",
    layanan: "Service AC",
    initial: "DP",
    badge: "Local Guide",
  },
  {
    nama: "Leyly Hardhita",
    lokasi: "Probolinggo",
    rating: 5,
    teks: "Spesialis AC di kota Probolinggo 👍 Pelayanannya Satset gak pake lama. Sangat memuaskan dan recommended!",
    waktu: "1 bulan lalu",
    layanan: "Service AC",
    initial: "LH",
  },
  {
    nama: "Pelanggan Setia",
    lokasi: "Kab. Probolinggo",
    rating: 5,
    teks: "Sudah beberapa kali pakai jasa Diamond Teknik AC dan selalu puas. Teknisi datang tepat waktu, hasil kerja bersih dan rapih. AC jadi lebih dingin dan hemat listrik!",
    waktu: "2 bulan lalu",
    layanan: "Cuci AC + Isi Freon",
    initial: "PS",
  },
];

const stats = [
  { value: "4.7", label: "Rating Google", icon: "⭐" },
  { value: "74+", label: "Ulasan Google Maps", icon: "🗺️" },
  { value: "5+", label: "Tahun Pengalaman", icon: "🏆" },
  { value: "08-17", label: "Jam Operasional", icon: "🕐" },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kata Pelanggan Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Dipercaya pelanggan di Probolinggo dan sekitarnya. Rating 4.7 dari 74 ulasan di Google Maps.
          </p>
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-gray-200 rounded-2xl px-6 py-3 mt-4">
            <span className="text-3xl font-extrabold text-gray-900">4.7</span>
            <div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-200 text-yellow-300"}`} />
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-0.5">74 ulasan di Google Maps</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-5 italic">&ldquo;{t.teks}&rdquo;</p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-gray-900 text-sm">{t.nama}</p>
                      {"badge" in t && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-1.5 py-0.5 rounded font-medium">Local Guide</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs">{t.lokasi} · {t.waktu}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {t.layanan}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl mb-1">{s.icon}</p>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-blue-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
