import { Routes, Route } from "react-router-dom";
import NavbarSection from "@/components/NavbarSection";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievement";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <NavbarSection />

      <main className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}