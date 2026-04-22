import { Diamond, Phone, MapPin, Mail, Share2, ThumbsUp } from "lucide-react";

const navLinks = [
  { label: "Layanan Kami", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Wilayah", href: "#wilayah" },
];

const layananLinks = [
  "Cuci AC", "Bongkar Pasang AC", "Isi Freon", "Perbaikan AC",
  "Service Kulkas", "Instalasi Listrik AC",
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                <Diamond className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">CV. Berlian Karya Mandiri</p>
                <p className="font-bold text-white">Diamond Teknik AC</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Jasa service AC dan kulkas profesional. Teknisi berpengalaman, harga transparan, garansi pekerjaan. Melayani seluruh Jabodetabek.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors text-sm"
              >
                💬
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              {layananLinks.map((l) => (
                <li key={l}>
                  <a href="#layanan" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Jl. WR. Supratman Gg. 3 No.27, Mangunharjo, Kec. Mayangan, Kota Probolinggo, Jawa Timur 67217
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="tel:+6282333575111" className="text-slate-400 hover:text-white text-sm transition-colors">
                  0823-3357-5111
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a                 href="mailto:cvberliankarya@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  cvberliankarya@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5 bg-green-900/40 border border-green-700/50 rounded-xl p-4">
              <p className="text-green-400 font-semibold text-sm mb-1">🕐 Jam Operasional</p>
              <p className="text-slate-300 text-sm">Senin – Sabtu: 08.00 – 17.00 WIB</p>
              <p className="text-green-400 text-xs mt-1">✓ Hubungi via WhatsApp untuk hari libur</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 CV. Berlian Karya Mandiri – Diamond Teknik AC. All rights reserved.</p>
          <p>Dibuat dengan ❤️ untuk pelanggan setia kami</p>
        </div>
      </div>
    </footer>
  );
}
