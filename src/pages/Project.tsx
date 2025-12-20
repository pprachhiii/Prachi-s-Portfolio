import NavbarSection from '@/components/NavbarSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
      <NavbarSection />
      <ProjectsSection />
    </div>
  );
}
