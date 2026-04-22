import { MapPin, CheckCircle } from "lucide-react";

const wilayah = [
  "Kota Probolinggo", "Kec. Mayangan", "Kec. Kanigaran",
  "Kec. Wonoasih", "Kec. Kedopok", "Kec. Kademangan",
  "Kab. Probolinggo", "Pasuruan", "Lumajang", "Situbondo",
];

const gallery = [
  { emoji: "🔧", label: "Proses Cuci AC", bg: "from-blue-400 to-blue-600" },
  { emoji: "❄️", label: "Isi Freon", bg: "from-cyan-400 to-cyan-600" },
  { emoji: "🏠", label: "Pasang AC Baru", bg: "from-indigo-400 to-indigo-600" },
  { emoji: "🔨", label: "Perbaikan Rusak", bg: "from-purple-400 to-purple-600" },
  { emoji: "⚡", label: "Instalasi Listrik", bg: "from-yellow-400 to-orange-500" },
  { emoji: "🧊", label: "Service Kulkas", bg: "from-teal-400 to-teal-600" },
];

export default function Wilayah() {
  return (
    <section id="wilayah" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Wilayah Layanan
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Melayani Probolinggo & Sekitarnya
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Berlokasi di Kota Probolinggo, kami siap datang ke lokasi Anda di seluruh wilayah Probolinggo dan kota-kota sekitarnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Coverage */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-700" />
              <h3 className="font-bold text-gray-900 text-lg">Area Jangkauan Kami</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {wilayah.map((w, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{w}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Hubungi kami untuk konfirmasi area di luar Kota Probolinggo.
            </p>

            {/* Address Card */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Alamat Bengkel</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Jl. WR. Supratman Gg. 3 No.27,<br />
                    Mangunharjo, Kec. Mayangan,<br />
                    Kota Probolinggo, Jawa Timur 67217
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-36 flex flex-col items-center justify-center border border-blue-200 mt-3">
                <span className="text-4xl mb-2">🗺️</span>
                <p className="text-blue-700 font-semibold text-sm">Kota Probolinggo, Jawa Timur</p>
                <p className="text-blue-500 text-xs mt-1">7629+2W Mangunharjo</p>
              </div>
            </div>
          </div>

          {/* Right - Gallery */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-6">
              Gallery Pekerjaan Kami
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${g.bg} rounded-2xl h-28 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer shadow-sm`}
                >
                  <span className="text-4xl mb-2">{g.emoji}</span>
                  <p className="text-xs font-medium text-white/90">{g.label}</p>
                </div>
              ))}
            </div>

            {/* Jam Operasional */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                🕐 Jam Operasional
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Senin – Sabtu</span>
                  <span className="font-semibold text-gray-900">08.00 – 17.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minggu / Hari Libur</span>
                  <span className="font-semibold text-gray-500">Hubungi via WA</span>
                </div>
              </div>
              <div className="mt-3 bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-green-700 text-xs font-medium">
                ✅ Status: Buka · Kami siap melayani Anda
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
