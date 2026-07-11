import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import TechMarquee from "@/app/components/TechMarquee";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechMarquee />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
