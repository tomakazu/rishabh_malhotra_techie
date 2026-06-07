import Hero from "../components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EngineeringInterests from "@/components/EngineeringInterests";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <EngineeringInterests />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}