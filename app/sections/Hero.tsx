"use client";

import { Star, Shield, Clock, Users } from "lucide-react";

const stats = [
  { icon: <Shield className="w-5 h-5" />, value: "5+", label: "Tahun Pengalaman" },
  { icon: <Users className="w-5 h-5" />, value: "74+", label: "Ulasan Google" },
  { icon: <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />, value: "4.7", label: "Rating Google" },
  { icon: <Clock className="w-5 h-5" />, value: "08-17", label: "Jam Layanan" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">Teknisi Siap & Terpercaya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Service AC{" "}
              <span className="text-yellow-400">Profesional</span>{" "}
              <br className="hidden sm:block" />
              di Probolinggo & Sekitarnya
            </h1>

            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              CV. Berlian Karya Mandiri hadir memberikan solusi AC & kulkas Anda. 
              Teknisi bersertifikat, harga transparan, garansi pekerjaan.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/6282333575111?text=Halo,%20saya%20ingin%20order%20service%20AC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30"
              >
                🔧 Pesan Sekarang
              </a>
              <a
                href="tel:+6282333575111"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10"
              >
                📞 0823-3357-5111
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center">
                  <div className="flex justify-center text-yellow-400 mb-2">{s.icon}</div>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-blue-200 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-700 to-blue-900 h-[480px] flex items-center justify-center">
              {/* Stylized illustration */}
              <div className="text-center p-8">
                <div className="text-8xl mb-4">❄️</div>
                <p className="text-white text-2xl font-bold">Diamond Teknik AC</p>
                <p className="text-blue-200 mt-2">Sejuk • Nyaman • Terpercaya</p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <p className="text-yellow-400 text-2xl font-bold">4.7★</p>
                    <p className="text-white text-xs">Rating</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <p className="text-yellow-400 text-2xl font-bold">74+</p>
                    <p className="text-white text-xs">Ulasan</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center">
                    <p className="text-yellow-400 text-2xl font-bold">✓</p>
                    <p className="text-white text-xs">Garansi</p>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">✅</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Garansi Servis</p>
                <p className="text-gray-500 text-xs">30 Hari Garansi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
