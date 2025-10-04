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
      <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-white">
        {/* Logo on the left */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-xl shadow-md">
          PY
        </div>

        {/* Nav items in center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden lg:flex items-center gap-6 text-base font-semibold">
            {navItems.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative px-3 py-1.5 transition duration-300 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                        : "text-white hover:text-white hover:bg-gradient-to-r from-yellow-400 to-orange-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* X button on the extreme right */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white hover:text-yellow-400 transition z-50"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white focus:outline-none ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-black/70 backdrop-blur-sm flex flex-col items-center gap-6 py-8 lg:hidden z-40">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl px-4 py-2 hover:text-yellow-400 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavbarSection;
