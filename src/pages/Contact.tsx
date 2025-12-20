import NavbarSection from '@/components/NavbarSection';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
      <NavbarSection />
      <ContactSection />
    </div>
  );
}
