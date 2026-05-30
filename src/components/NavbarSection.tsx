import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NavbarSection = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isDesktopVisible, setIsDesktopVisible] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'Activities', label: 'Activities' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  if (!isDesktopVisible) {
    return (
      <button
        onClick={() => setIsDesktopVisible(true)}
        className="
          fixed
          top-4
          right-6
          z-50
          hidden
          lg:flex
          text-[#f5f1ea]
        "
      >
        <Menu className="h-7 w-7" />
      </button>
    );
  }

  return (
    <header
      className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-[#285491]
    text-[#f5f1ea]
    border-b
    border-white/10
    backdrop-blur-md
  "
    >
      <nav className="max-w-7xl mx-auto px-8 py-5">
        <div className="grid grid-cols-3 items-center">
          {/* LEFT - LOGO */}
          <div className="flex justify-start">
            <a
              href="#home"
              className="
                text-sm
                tracking-[0.25em]
                font-bold
                text-[#f5f1ea]
                hover:text-[#ffd415]
                transition-colors
                duration-300
              "
            >
              Prachi Yadav
            </a>
          </div>

          {/* CENTER - DESKTOP NAV */}
          <ul className="hidden lg:flex items-center justify-center gap-10">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="
                    relative
                    uppercase
                    tracking-[0.14em]
                    text-[0.72rem]
                    font-medium
                    text-white/70
                    hover:text-[#ffd415]
                    transition-colors
                    duration-300
                    group
                  "
                >
                  {label}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-1
                      h-px
                      w-0
                      bg-[#ffd415]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT - SOCIALS */}
          <div className="hidden lg:flex items-center justify-end gap-5">
            <a
              href="https://github.com/pprachhiii"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/60
                hover:text-[#ffd415]
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/prachi-yadav-87303231a/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/60
                hover:text-[#ffd415]
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {/* DESKTOP CLOSE */}
            <button
              onClick={() => setIsDesktopVisible(false)}
              className="
                ml-2
                text-white/60
                hover:text-[#f5f1ea]
                transition-colors
                duration-300
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="
              lg:hidden
              flex
              justify-end
              text-[#f5f1ea]
            "
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${isMobileOpen ? 'max-h-[500px] mt-6' : 'max-h-0'}
          `}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="
                    uppercase
                    tracking-[0.14em]
                    text-sm
                    transition-colors
                    duration-300
                    text-white/70
                    hover:text-[#ffd415]
                  "
                >
                  {label}
                </a>
              </li>
            ))}

            {/* MOBILE SOCIALS */}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com/pprachhiii"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-white/60
                  hover:text-[#ffd415]
                  transition-all
                  duration-300
                "
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prachi-yadav-87303231a/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-white/60
                  hover:text-[#ffd415]
                  transition-all
                  duration-300
                "
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
