import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const internships = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'Shreemal Technology',
      location: 'Remote',
      link: 'https://www.linkedin.com/company/shreemal-technology/',
      duration: 'Jun 2025 – Aug 2025',
      description: `Architected and deployed scalable full-stack features using Next.js 13+ with App Router and Server Actions, along with Express.js REST APIs. Managed relational databases, optimized backend performance, and deployed production-ready apps on Vercel.`,
      achievements: [
        "Optimized backend caching and rate-limiting with Upstash",
        "Implemented CI/CD pipelines on GitHub with automated testing",
        "Validated APIs with Postman and ensured type-safe development"
      ],
      tech: ['Next.js 13+', 'Express.js', 'TypeScript', 'Upstash', 'Prisma', 'PostgreSQL', 'MySQL', 'Vercel', 'Postman']
    },
    {
      role: 'Backend Developer',
      company: 'GetNomik',
      location: 'Remote',
      link: 'https://www.linkedin.com/company/getnomik/',
      duration: 'Jul 2025 – Aug 2025',
      description: `Developed modular and scalable backend services using Node.js and Express.js. Engineered secure infrastructure and optimized MySQL databases.`,
      achievements: [
        "Built secure JWT-based authentication and RBAC system",
        "Integrated Razorpay payments and transactional emails",
        "Ensured smooth backend operations with MySQL optimization"
      ],
      tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'RBAC', 'SMTP', 'Razorpay']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
            Where I’m Growing
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto font-serif">
            Internships and work experience are bridges-helping me master real-world backend challenges.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6 rounded-full animate-bounce" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-start gap-8"
            >
              {/* Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex-1 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    {/* Position without fade */}
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {internship.role}
                    </h3>
                    <div className="flex items-center gap-4 text-blue-200 text-sm">
                      <span className="font-medium">{internship.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-300 mt-2 md:mt-0">
                    <Calendar size={14} />
                    <span>{internship.duration}</span>
                    <a
                      href={internship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 text-blue-200 hover:text-yellow-400 transition-colors"
                      title={`View ${internship.company} on LinkedIn`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-blue-100 leading-relaxed mb-4">{internship.description}</p>

                <div className="space-y-2 mb-4">
                  {internship.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-blue-200 text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-yellow-300/10 text-yellow-200 rounded-full text-xs font-medium transition-all hover:bg-yellow-300/30 hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
