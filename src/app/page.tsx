import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Workflow from "@/components/sections/Workflow";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Research />
      <Workflow />
      <Skills />
      <Contact />
      <footer style={{ padding: "36px 0", textAlign: "center", color: "var(--muted)", fontSize: 11.5, letterSpacing: ".04em" }}>
        © 2026 Haruto Miyakawa. All rights reserved.
      </footer>
    </>
  );
}
