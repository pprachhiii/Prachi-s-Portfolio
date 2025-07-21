import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import NavbarSection from '@/components/NavbarSection';
import InternshipSection from '@/components/InternshipSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavbarSection/>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <InternshipSection/>
      <ContactSection />
    </div>
  );
};

export default Index;
