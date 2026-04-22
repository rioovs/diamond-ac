"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Diamond } from "lucide-react";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Wilayah", href: "#wilayah" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <Diamond className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="leading-tight">
              <p className={`text-xs font-semibold ${scrolled ? "text-gray-500" : "text-blue-200"}`}>
                CV. Berlian Karya Mandiri
              </p>
              <p className={`text-sm font-bold ${scrolled ? "text-blue-700" : "text-white"}`}>
                Diamond Teknik AC
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+6282333575111"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              0823-3357-5111
            </a>
            <a
              href="https://wa.me/6282333575111?text=Halo,%20saya%20ingin%20order%20service%20AC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Hubungi via WA
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/6282333575111?text=Halo,%20saya%20ingin%20order%20service%20AC"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-5 py-3 rounded-full mt-3"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
