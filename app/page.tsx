import Hero from "../components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EngineeringInterests from "@/components/EngineeringInterests";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <EngineeringInterests />
    </main>
  );
}