import { useState, useEffect, useRef } from "react";
import {
  Code,
  Terminal,
  Globe,
  Database,
  Zap,
  GitBranch,
  Layers,
  Star,
} from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const techStack = {
    frontend: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "Bootstrap", icon: Star },
      { name: "Tailwind CSS", icon: Star },
      { name: "EJS", icon: Code },
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Globe },
    ],
    backend: [
      { name: "Node.js", icon: Terminal },
      { name: "Express.js", icon: Terminal },
      { name: "Redis", icon: Database },
    ],
    tools: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Postman", icon: Zap },
      { name: "APIDog", icon: Zap },
      { name: "VS Code", icon: Star },
    ],
    database: [
      { name: "MongoDB (Mongoose)", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
    programming: [
      { name: "Java", icon: Terminal },
      { name: "Python", icon: Terminal },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "TypeScript", icon: Terminal },
    ],
    softSkills: [
      { name: "Problem-solving", icon: Star },
      { name: "Adaptability", icon: Star },
      { name: "Collaboration", icon: Star },
      { name: "Attention to detail", icon: Star },
    ],
  };

  return (
    <section
      id="skill"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-all duration-1000 text-white relative overflow-hidden"
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools of the Trade
        </h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
          The technologies and tools I use to craft scalable, modern applications.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6 rounded-full" />
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {Object.entries(techStack).map(([category, items], i) => (
          <div
            key={category}
            style={{ transitionDelay: `${i * 150}ms` }}
            className="relative group"
          >
            <h3 className="text-xl font-semibold capitalize text-center text-blue-300 mb-4 relative z-10">
              {category}
            </h3>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:scale-105">
              {/* Glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 pointer-events-none" />

              <ul className="grid gap-3 relative z-10">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 group-hover:text-yellow-300 transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-yellow-300 shrink-0 group-hover:animate-pulse" />
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
