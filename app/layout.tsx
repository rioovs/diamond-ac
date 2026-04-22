import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV. Berlian Karya Mandiri | Diamond Teknik AC - Service AC Probolinggo",
  description:
    "Jasa service AC profesional di Probolinggo. Cuci AC, bongkar pasang, isi freon, dan perbaikan kulkas. Rating 4.7 ⭐ dari 74 ulasan Google. Teknisi berpengalaman, harga transparan. WA: 0823-3357-5111",
  keywords:
    "service AC Probolinggo, cuci AC Probolinggo, bongkar pasang AC, isi freon Probolinggo, perbaikan AC, Diamond Teknik AC, Berlian Karya Mandiri, teknisi AC Probolinggo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
