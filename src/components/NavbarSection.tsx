// components/NavbarSection.tsx
import { useState } from "react";
import { Menu } from "lucide-react";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-white/10 border-b border-white/20">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto text-white">
        {/* Logo */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-xl shadow-md">
          PY
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block mt-4" : "hidden"
          } lg:flex lg:items-center gap-4 text-base font-semibold transition-all duration-300`}
        >
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="relative px-3 py-1.5 text-white transition duration-300 rounded-full hover:text-white hover:bg-gradient-to-r from-yellow-400 to-orange-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarSection;
