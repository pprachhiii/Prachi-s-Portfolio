import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiVite,
  SiPrisma,
  SiDocker,
  SiGithubactions,
} from 'react-icons/si';

type TechIcon = React.ComponentType<{ className?: string }>;

type Project = {
  title: string;
  description: string;
  tech: TechIcon[];
  github: string;
  live: string;
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'DHARA',
      description:
        'A community-driven civic platform that empowers citizens to report neglected spaces, engage in community voting, and organize volunteer-driven cleanups, tree planting, and beautification drives. Features authority contact tracking, evidence-based reporting, and sustained monitoring to ensure long-term impact. Built with Next.js, TailwindCSS, ShadCN/UI, Node.js, and PostgreSQL to deliver a scalable, inclusive solution for environmental stewardship in India.',
      tech: [SiNextdotjs, SiTailwindcss, SiShadcnui, FaNodeJs, SiPostgresql],
      github: 'https://github.com/pprachhiii/dhara',
      live: 'https://dhara-six.vercel.app/',
    },
    {
      title: 'Car1Pro',
      description:
        'A full-stack automotive e-commerce and car rental marketplace with complete customer and admin workflows. Features secure authentication, dynamic vehicle listings, advanced search and filtering, date-based rentals, and streamlined booking management. Includes an admin dashboard with full CRUD operations for vehicles, users, and orders. Built with Next.js 14, TypeScript, Prisma, PostgreSQL, and Tailwind CSS. Integrated production-ready architecture with Docker containerization and CI/CD pipeline using GitHub Actions. Payment gateway integration is currently in progress; all other core features are fully dynamic and production-ready.',
      tech: [
        SiNextdotjs,
        FaReact,
        SiTypescript,
        SiTailwindcss,
        SiPrisma,
        SiPostgresql,
        SiDocker,
        SiGithubactions,
      ],
      github: 'https://github.com/pprachhiii/car1pro',
      live: 'https://car1pro.vercel.app/',
    },
    {
      title: '2070 Wildlife & Environmental Dashboard',
      description:
        'An interactive React + TypeScript application for wildlife tracking, environmental monitoring, and conservation planning. Includes real-time alerts, predictive species projections, ecological simulations, and interactive maps with heatmaps, choropleths, and migration paths. Built with React, TypeScript, TailwindCSS, Leaflet, and Recharts.',
      tech: [FaReact, SiTypescript, SiTailwindcss],
      github: 'https://github.com/pprachhiii/2070',
      live: 'https://2070-ten.vercel.app/',
    },
    {
      title: 'Rental Listing Platform',
      description:
        'Rental marketplace featuring secure session-based authentication, advanced property search, and optimized image upload pipelines. Built with Next.js and MongoDB.',
      tech: [FaReact, SiNextdotjs, SiMongodb, SiTailwindcss],
      github: 'https://github.com/pprachhiii/StayEase',
      live: 'https://stayease-smsm.onrender.com/listings',
    },
    {
      title: 'Item-Manager',
      description:
        'Scalable CRUD web application with modular architecture and global state synchronization for consistent UI behavior across sessions.',
      tech: [FaReact, SiTailwindcss, SiVite, FaNodeJs],
      github: 'https://github.com/pprachhiii/item-manager',
      live: 'https://item-manager-cee0.onrender.com/',
    },
  ];

  const renderCard = (project: Project, index: number) => (
    <div
      key={project.title}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-2xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300">
              {project.title}
            </h3>
            <div className="flex gap-3">
              <a href={project.github} className="text-blue-200 hover:text-yellow-400">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.live} className="text-blue-200 hover:text-yellow-400">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-blue-100 mb-6 leading-relaxed whitespace-pre-line">
            {project.description.split('. ').map((sentence, i, arr) => (
              <span key={i}>
                {sentence.trim()}
                {i !== arr.length - 1 ? '. ' : ''}
                {i === Math.floor(arr.length / 2) - 1 && (
                  <>
                    {'\n'}
                    {'\n'}
                  </>
                )}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((Icon, i) => (
              <Icon key={i} className="w-6 h-6 text-yellow-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
              Full-stack builds focused on performance, UX, and real-world usability.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {renderCard(projects[0], 0)} {/* DHARA */}
              {renderCard(projects[4], 4)} {/* Item */}
              {renderCard(projects[3], 3)} {/* Rental */}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              {renderCard(projects[1], 1)} {/* Car1Pro */}
              {renderCard(projects[2], 2)} {/* 2070 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
