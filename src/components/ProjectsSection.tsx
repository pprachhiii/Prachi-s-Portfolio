import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FaReact, FaNodeJs, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShadcnui, SiMongodb, SiPostgresql, SiSocketdotio, SiExpress, SiTypescript, SiVite, SiPaypal, SiEjs } from "react-icons/si";
import { WiDayCloudy } from "react-icons/wi"; 

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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "DHARA",
      description:
        "A community-driven civic platform that empowers citizens to report neglected spaces, engage in community voting, and organize volunteer-driven cleanups, tree planting, and beautification drives. Features authority contact tracking, evidence-based reporting, and sustained monitoring to ensure long-term impact. Built with Next.js, TailwindCSS, ShadCN/UI, Node.js, and PostgreSQL to deliver a scalable, inclusive solution for environmental stewardship in India.",
      tech: [SiNextdotjs, SiTailwindcss, SiShadcnui, FaNodeJs, SiPostgresql],
      github: "https://github.com/pprachhiii/dhara",
      live: "https://dhara-six.vercel.app/",
    },
    {
      title: "2070 Wildlife & Environmental Dashboard",
      description:
        "An interactive React + TypeScript application for wildlife tracking, environmental monitoring, and conservation planning. Includes real-time alerts, predictive species projections, ecological simulations, and interactive maps with heatmaps, choropleths, and migration paths. Built with React, TypeScript, TailwindCSS, Leaflet, and Recharts, it demonstrates advanced data visualization, responsive design, and ecological insight for researchers and policymakers.",
      tech: [FaReact, SiTypescript, SiTailwindcss],
      github: "https://github.com/pprachhiii/2070",
      live: "https://2070-ten.vercel.app/",
    },
    {
      title: "Chat App",
      description:
        "Full-stack real-time chat application with JWT authentication, media sharing, online presence tracking, and cloud-based file storage. Designed with a responsive interface and scalable architecture using React, Express, and Socket.IO for instant one-to-one messaging.",
      tech: [FaReact, SiExpress, SiSocketdotio, SiMongodb],
      github: "https://github.com/pprachhiii/chat-app",
      live: "https://chat-app-somd.onrender.com/login",
    },
    {
      title: "Rental Listing Platform",
      description:
        "Rental marketplace featuring secure session-based authentication, advanced property search, and optimized image upload/delivery pipelines. Built with Next.js and MongoDB, it provides a seamless browsing experience with dynamic listings and responsive UI.",
      tech: [FaReact, SiNextdotjs, SiMongodb, SiTailwindcss],
      github: "https://github.com/pprachhiii/StayEase",
      live: "https://stayease-smsm.onrender.com/listings",
    },
    {
      title: "Item-Manager",
      description:
        "Scalable CRUD web application with modular code architecture for easy feature expansion. Implements global state synchronization to ensure consistency across sessions, responsive UI with Tailwind, and efficient state management using React.",
      tech: [FaReact, SiTailwindcss, SiVite, FaNodeJs],
      github: "https://github.com/pprachhiii/item-manager",
      live: "https://item-manager-cee0.onrender.com/",
    },
    {
      title: "Ecommerce-App",
      description:
        "End-to-end ecommerce solution with product catalog, secure authentication, PayPal payment integration, and live order tracking. Features admin product management, responsive layouts, and a scalable MERN stack backend for real-world use cases.",
      tech: [SiMongodb, SiExpress, FaReact, FaNodeJs, SiPaypal],
      github: "https://github.com/pprachhiii/MERN-ecommerce-app",
      live: "https://e-commerce-app-1-652v.onrender.com",
    },
    {
      title: "FasalForecast – Crop Recommender",
      description:
        "AgriTech tool that leverages weather APIs, soil data, and recommend the most suitable crops for farmers. Designed with Node.js and Express for API handling, the platform integrates data-driven insights to improve agricultural planning.",
      tech: [FaNodeJs, SiExpress, WiDayCloudy],
      github: "https://github.com/pprachhiii/fasalforecast",
      live: "https://farming-agriculture-assistant-production.up.railway.app/",
    },
    {
      title: "Ta-Da – To-Do Web App",
      description:
        "Lightweight yet feature-rich task manager with task CRUD, filters, and responsive layouts. Built using Express.js and EJS templating, with MongoDB for persistence and Bootstrap for quick UI design, ensuring simplicity and usability.",
      tech: [SiExpress, SiEjs, SiMongodb, FaBootstrap],
      github: "https://github.com/pprachhiii/To-Do-App",
      live: "https://ta-da.onrender.com/",
    },
  ];


  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-10 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
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
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((Icon, i) => (
                        <Icon
                          key={i}
                          className="w-6 h-6 text-yellow-300 hover:scale-110 transition-transform"
                        />
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
