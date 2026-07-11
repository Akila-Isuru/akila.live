import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import TechMarquee from "@/app/components/TechMarquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechMarquee />
    </main>
  );
}
