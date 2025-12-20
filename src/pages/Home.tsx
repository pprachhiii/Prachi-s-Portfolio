import NavbarSection from '@/components/NavbarSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
      <NavbarSection />
      <HeroSection />
    </div>
  );
}
