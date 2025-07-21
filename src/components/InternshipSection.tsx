import { Briefcase, ExternalLink, Calendar, Code } from 'lucide-react';

const InternshipSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Where I’m Growing
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
            Internships are bridges — this one helped me cross into real-world backend challenges.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
        </div>

        {/* Internship Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
              FullStack Developer Intern @ Shreemal Technology
            </h3>
            <a
            href="https://www.linkedin.com/company/shreemal-technology/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-yellow-400 transition-colors"
            title="View Shreemal Technology on LinkedIn"
            >
            <ExternalLink className="w-5 h-5" />
            </a>

          </div>

          <div className="flex items-center gap-4 text-blue-300 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            <span>June 2025 – Present</span>
          </div>

          <p className="text-blue-100 mb-6 leading-relaxed">
            Working on building scalable REST APIs for an e-commerce platform using Node.js, PostgreSQL, and Redis. 
            I’m also contributing to microservice integration and optimizing DB queries for performance.
          </p>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'Redis', 'NextJS', 'GitHub Action'].map((tech) => (
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
    </section>
  );
};

export default InternshipSection;
