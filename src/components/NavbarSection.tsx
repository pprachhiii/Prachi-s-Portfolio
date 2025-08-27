import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md"
      >
        <Menu className="h-6 w-6" />
      </button>
    );
  }

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-white/10 border-b border-white/20">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto text-white">
        {/* Logo */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-xl shadow-md">
          PY
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Nav + Close */}
        <div className="flex items-center gap-4">
          <ul
            className={`${
              isOpen ? "block mt-4" : "hidden"
            } lg:flex lg:items-center gap-4 text-base font-semibold transition-all duration-300`}
          >
            {navItems.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-3 py-1.5 transition duration-300 rounded-full 
                      ${isActive 
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white" 
                        : "text-white hover:text-white hover:bg-gradient-to-r from-yellow-400 to-orange-400"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-yellow-400 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
