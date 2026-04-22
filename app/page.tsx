import Header from "./sections/Header";
import Hero from "./sections/Hero";
import JenisAC from "./sections/JenisAC";
import Layanan from "./sections/Layanan";
import Harga from "./sections/Harga";
import CaraKerja from "./sections/CaraKerja";
import Testimoni from "./sections/Testimoni";
import Wilayah from "./sections/Wilayah";
import CTABanner from "./sections/CTABanner";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import WAFloat from "./sections/WAFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JenisAC />
        <Layanan />
        <Harga />
        <CaraKerja />
        <Testimoni />
        <Wilayah />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
