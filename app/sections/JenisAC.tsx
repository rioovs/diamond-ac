const jenisAC = [
  {
    emoji: "🌬️",
    name: "AC Split",
    desc: "Semua merek & kapasitas — cuci, pasang, perbaikan",
    brands: "Samsung, LG, Daikin, Panasonic, Sharp",
    color: "from-blue-500 to-blue-700",
  },
  {
    emoji: "🏢",
    name: "AC Cassette",
    desc: "Instalasi dan perawatan AC Cassette untuk perkantoran",
    brands: "Mitsubishi, Daikin, Carrier, York",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    emoji: "🏭",
    name: "AC Standing Floor",
    desc: "Service AC standing floor kapasitas besar",
    brands: "Daikin, Hitachi, Mitsubishi Heavy",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    emoji: "❄️",
    name: "Kulkas & Freezer",
    desc: "Perbaikan kulkas dan freezer segala merek",
    brands: "Samsung, LG, Sharp, Toshiba, Aqua",
    color: "from-teal-500 to-teal-700",
  },
];

export default function JenisAC() {
  return (
    <section id="jenis-ac" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Jenis AC & Kulkas
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Jenis AC & Kulkas yang Kami Tangani
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami melayani berbagai jenis AC dan kulkas dari semua merek ternama dengan teknisi berpengalaman.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jenisAC.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${item.color} p-6 text-white`}>
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-white/80 text-sm mb-3">{item.desc}</p>
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <p className="text-white/70 text-xs font-medium">Merek:</p>
                  <p className="text-white text-xs">{item.brands}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
