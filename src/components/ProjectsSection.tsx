import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "MERN Ecommerce-App",
      description:
        "Full-featured ecommerce app with product management, user authentication, PayPal integration, and real-time order tracking.",
      tech: ["MongoDB", "Express", "React", "Node.js", "PayPal API"],
      github: "https://github.com/pprachhiii/MERN-ecommerce-app",
      live: "https://e-commerce-app-1-652v.onrender.com",
    },
    {
      title: "MERN Chat-App",
      description:
        "Real-time messaging app using WebSockets with JWT login, online user status, and scalable backend architecture.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
      github: "https://github.com/pprachhiii/MERN-Chat-App",
      live: "https://chat-app-somd.onrender.com",
    },
    {
      title: "StayEase – Booking Platform",
      description:
        "Airbnb-style app for listing and booking stays with location filters, session auth, and responsive UI.",
      tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/pprachhiii/stayease",
      live: "https://stayease-smsm.onrender.com",
    },
    {
      title: "Item-manager Website",
      description:
        "A responsive full-stack CRUD platform using React + TypeScript and efficient global state management.",
      tech: ["React", "TypeScript", "Tailwind", "Redux Toolkit", "Node.js"],
      github: "https://github.com/pprachhiii/item-manager-typescript",
      live: "https://ta-da.onrender.com",
    },
    {
      title: "FasalForecast – Crop Recommender",
      description:
        "AgriTech tool using weather APIs and soil data to recommend optimal crops using ML logic.",
      tech: ["Node.js", "Express", "Weather API", "ML Model"],
      github: "https://github.com/pprachhiii/fasalforecast",
      live: "https://farming-agriculture-assistant-production.up.railway.app/",
    },
    {
      title: "Ta-Da – To-Do Web App",
      description:
        "Minimal task manager using Express and EJS with full task CRUD, filters, and responsive layout.",
      tech: ["Express.js", "EJS", "MongoDB", "Bootstrap"],
      github: "https://github.com/pprachhiii/To-Do-App",
      live: "https://ta-da.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
              Full-stack builds focused on performance, UX, and real-world usability.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-blue-200 hover:text-yellow-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-blue-200 hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-yellow-300/10 text-yellow-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
