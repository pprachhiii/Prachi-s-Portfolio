import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavbarSection = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopVisible, setIsDesktopVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/achievements", label: "Achievements" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  if (!isDesktopVisible) {
    return (
      <button
        onClick={() => setIsDesktopVisible(true)}
        className="fixed top-4 right-6 z-50 hidden lg:flex text-white"
      >
        <Menu className="h-7 w-7" />
      </button>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-xl shadow-md">
            PY
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-6 font-semibold">
            {navItems.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`px-3 py-1.5 rounded-full transition ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black"
                        : "hover:bg-gradient-to-r from-yellow-400 to-orange-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP CLOSE */}
          <button
            onClick={() => setIsDesktopVisible(false)}
            className="hidden lg:flex"
          >
            <X className="h-7 w-7" />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileOpen ? "max-h-[500px] mt-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xl hover:text-yellow-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;