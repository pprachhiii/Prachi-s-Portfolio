import NavbarSection from '@/components/NavbarSection';

import HeroSection from './components/HeroSection';
import About from './components/AboutSection';
import Skills from './components/SkillsSection';
import Projects from './components/ProjectsSection';
import Experience from './components/ExperienceSection';
import Activities from './components/Activities';
import BeyondCode from './components/BeyondCode';

import Contact from './components/ContactSection';

export default function App() {
  return (
    <main
      className="
        bg-[#1f2937]
        text-[#f5f1ea]
        overflow-x-hidden
        scroll-smooth
      "
    >
      <NavbarSection />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="Activities">
        <Activities />
      </section>

      <section id="beyond-code">
        <BeyondCode />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
