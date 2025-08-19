import { ExternalLink, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const internships = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'Shreemal Technology',
      link: 'https://www.linkedin.com/company/shreemal-technology/',
      duration: 'Jun 2025 – Aug 2025',
      description: `During my internship at Shreemal Technology, I designed and implemented robust full-stack solutions using Next.js 13+ with the App Router and Server Actions. I built efficient backend services with Express.js and REST APIs while ensuring type safety through TypeScript. To improve performance and reliability, I integrated Upstash for caching, rate-limiting, and scheduled tasks, and managed relational data with Prisma ORM and PostgreSQL/MySQL. Throughout the process, I followed an agile workflow with CI/CD on GitHub, wrote automated tests, validated APIs using Postman, and deployed production-ready applications on Vercel.`,
      tech: ['Next.js 13+', 'Express.js', 'TypeScript', 'Upstash', 'Prisma', 'PostgreSQL', 'MySQL', 'Vercel', 'Postman']
    },
    {
      role: 'Backend Developer',
      company: 'GetNomik',
      link: 'https://www.linkedin.com/company/getnomik/',
      duration: 'Jul 2025 – Present',
      description: `At GetNomik, I am developing secure and modular backend systems using Node.js and Express.js. My work includes creating scalable RESTful APIs and implementing efficient server-side logic for high-performance applications. I handle authentication with JWT, set up role-based access control (RBAC), and configure transactional email workflows with SMTP. Additionally, I integrated Razorpay payment solutions to streamline user transactions and designed optimized MySQL databases to ensure data integrity and smooth operations across backend services.`,
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
            Internships and work experience are bridges - helping me master real-world backend challenges.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6 rounded-full animate-bounce" />
        </div>

        {/* Internship Cards */}
        <div className="flex flex-col gap-8">
          {internships.map((internship, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors animate-pulse">
                  {internship.role} @ {internship.company}
                </h3>
                <a
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-0 text-blue-200 hover:text-yellow-400 transition-colors"
                  title={`View ${internship.company} on LinkedIn`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-blue-300 text-sm mb-6">
                <Calendar className="w-4 h-4" />
                <span>{internship.duration}</span>
              </div>

              <p className="text-blue-100 mb-6 leading-relaxed whitespace-pre-line">{internship.description}</p>

              <div className="flex flex-wrap gap-2">
                {internship.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-yellow-300/10 text-yellow-200 rounded-full text-xs font-medium transition-all hover:bg-yellow-300/30 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
