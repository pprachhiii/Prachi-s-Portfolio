import { useState, useEffect, useRef } from 'react';
import {
  Code, Terminal, Globe, Database, Zap, GitBranch, Layers, Star
} from 'lucide-react';

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
      { name: 'HTML5', icon: Code },
      { name: 'CSS3', icon: Code },
      { name: 'JavaScript (ES6+)', icon: Code },
      { name: 'TypeScript', icon: Terminal },
      { name: 'Bootstrap', icon: Star },
      { name: 'Tailwind CSS', icon: Star },
      { name: 'EJS', icon: Code },
      { name: 'React', icon: Globe },
      { name: 'Next.js', icon: Globe },
    ],
    backend: [
      { name: 'Node.js', icon: Terminal },
      { name: 'Express.js', icon: Terminal },
      { name: 'Redis', icon: Database },
    ],
    tools: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Postman', icon: Zap },
      { name: 'APIDog', icon: Zap },
      { name: 'VS Code', icon: Star },
    ],
    database: [
      { name: 'MongoDB (Mongoose)', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ],
    programming: [
      { name: 'Java', icon: Terminal },
      { name: 'Python', icon: Terminal },
    ],
    softSkills: [
      { name: 'Problem-solving', icon: Star },
      { name: 'Adaptability', icon: Star },
      { name: 'Collaboration', icon: Star },
      { name: 'Attention to detail', icon: Star },
    ],
  };

  return (
    <section
      id="skill"
      ref={sectionRef}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-all duration-1000 text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools of the Trade
        </h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
          The technologies and tools I use to craft scalable, modern applications.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {Object.entries(techStack).map(([category, items], i) => (
          <div key={category} style={{ transitionDelay: `${i * 150}ms` }}>
            {/* Category Heading */}
            <h3 className="text-xl font-semibold capitalize text-center text-blue-300 mb-4">
              {category}
            </h3>

            {/* Skills Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <ul className="grid gap-2">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-yellow-300 shrink-0" />
                      <span className="text-white">{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
