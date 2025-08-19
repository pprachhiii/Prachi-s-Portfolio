import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-white/10 border-b border-white/20">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto text-white">
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-xl shadow-md">
          PY
        </div>

        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <ul
          className={`${
            isOpen ? "block mt-4" : "hidden"
          } lg:flex lg:items-center gap-4 text-base font-semibold transition-all duration-300`}
        >
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="relative px-3 py-1.5 text-white transition duration-300 rounded-full hover:text-white hover:bg-gradient-to-r from-yellow-400 to-orange-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarSection;
