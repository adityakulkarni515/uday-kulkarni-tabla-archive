import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Biography } from "@/components/home/Biography";
import { TaalShowcase } from "@/components/home/TaalShowcase";

export default function HomePage() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <TaalShowcase />
        <Biography />
      </main>
      <Footer />
    </div>
  );
}
