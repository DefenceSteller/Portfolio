import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { Skills } from "@/components/skills";
import { TechMarquee } from "@/components/tech-marquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="top" className="relative">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
