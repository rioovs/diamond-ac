const layanan = [
  { emoji: "🧹", title: "Cuci AC", desc: "Pembersihan menyeluruh filter, evaporator, dan kondensor agar AC bersih dan dingin maksimal." },
  { emoji: "🔧", title: "Bongkar Pasang AC", desc: "Instalasi AC baru maupun pemindahan unit AC dengan rapih dan aman." },
  { emoji: "🔨", title: "Perbaikan AC", desc: "Diagnosa dan perbaikan kerusakan AC — tidak dingin, bocor air, bunyi berisik, dll." },
  { emoji: "💧", title: "Isi Freon AC", desc: "Pengisian freon R22, R32, dan R410A untuk semua jenis dan kapasitas AC." },
  { emoji: "🧊", title: "Service Kulkas", desc: "Perbaikan kulkas tidak dingin, bocor, bunyi, dan komponen lainnya." },
  { emoji: "⚡", title: "Instalasi Listrik AC", desc: "Instalasi kabel dan stop kontak khusus AC sesuai standar keamanan." },
  { emoji: "📅", title: "Service Berkala", desc: "Program perawatan rutin AC agar performa tetap optimal sepanjang tahun." },
  { emoji: "💬", title: "Konsultasi Gratis", desc: "Konsultasi kebutuhan AC, estimasi biaya, dan rekomendasi solusi terbaik tanpa biaya." },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solusi Lengkap untuk AC & Kulkas Anda
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami menyediakan layanan lengkap dari pemasangan hingga perawatan berkala dengan teknisi profesional bergaransi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layanan.map((l, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-colors">
                {l.emoji}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{l.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
