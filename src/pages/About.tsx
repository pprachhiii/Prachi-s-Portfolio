import NavbarSection from '@/components/NavbarSection';
import AboutSection from '@/components/AboutSection';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
      <NavbarSection />
      <AboutSection />
    </div>
  );
}
