export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,100,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-300 rounded-full opacity-40" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-600 rounded-full opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl mb-4">❄️🔧</div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-900 mb-4">
          AC Bermasalah? Hubungi Kami Sekarang!
        </h2>
        <p className="text-blue-800 text-lg mb-8 max-w-2xl mx-auto">
          Teknisi siap datang ke lokasi Anda. Respon cepat, harga transparan, garansi pekerjaan.
          Jadwalkan servis hari ini dan rasakan perbedaannya!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6282333575111?text=Halo,%20saya%20ingin%20service%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            💬 Chat WhatsApp Sekarang
          </a>
          <a
            href="tel:+6282333575111"
            className="border-3 border-blue-800 text-blue-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-blue-800 hover:text-white flex items-center justify-center gap-2 border-2"
          >
            📞 0823-3357-5111
          </a>
        </div>
      </div>
    </section>
  );
}
