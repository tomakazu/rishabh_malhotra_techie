import Hero from "../components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EngineeringInterests from "@/components/EngineeringInterests";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main>
      <FadeInSection> <Navbar /> </FadeInSection>
      <FadeInSection> <Hero /> </FadeInSection>
      <FadeInSection> <About /> </FadeInSection>
      <FadeInSection> <Skills /> </FadeInSection>
      <FadeInSection> <Experience /> </FadeInSection>
      <FadeInSection> <EngineeringInterests /> </FadeInSection>
      <FadeInSection> <BeyondCode /> </FadeInSection>
      <FadeInSection> <Contact /> </FadeInSection>
      <Footer />
    </main>
  );
}