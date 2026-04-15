import { motion } from 'framer-motion';
import { Calendar, Trophy, BookOpen, Github } from 'lucide-react';

const AchievementsSection = () => {
  const research = [
    {
      title: 'SYNCODE-AI - AI-based Medical Coding & Audit System',
      organization: 'University of Lucknow',
      duration: '2026 - Present',
      description:
        'Ongoing research focused on automating ICD-10 medical code extraction and audit workflows using AI-driven approaches for healthcare insurance compliance.',
      highlights: [
        'Exploring Retrieval-Augmented Generation (RAG) pipelines',
        'Working with embeddings for medical text understanding',
        'Designing compliance-focused AI audit workflows',
      ],
      github: 'https://github.com/pprachhiii/syncode-AI',
    },
  ];

  const hackathons = [
    {
      title: 'Winner - HackWave Hackathon',
      project: 'Voltonic',
      duration: 'Feb 2026',
      description:
        'Led the development of Voltonic, delivering a high-impact solution under strict time constraints through rapid prototyping and collaboration.',
      github: 'https://github.com/pprachhiii/Voltonic',
    },
    {
      title: 'Cleared Internal Round - Smart India Hackathon (SIH)',
      project: 'SynCode AI',
      duration: '2025',
      description:
        'Selected through the internal evaluation round for proposing an AI-driven medical coding and audit automation system.',
      github: 'https://github.com/pprachhiii/syncode-AI',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-10 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto font-serif">
            Research, hackathons, and competitive milestones that reflect innovation,
            problem-solving, and continuous learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= RESEARCH ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Research</h3>
          </div>

          <div className="space-y-10">
            {research.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: -10 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-blue-300 text-sm">{item.organization}</p>
                  </div>

                  <div className="flex items-center gap-3 text-blue-300 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.duration}</span>
                    </div>

                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View source code"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-blue-100 mb-4 leading-relaxed">{item.description}</p>

                <div className="space-y-2">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2" />
                      <span className="text-blue-200 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= HACKATHONS ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">Hackathons & Competitions</h3>
          </div>

          <div className="space-y-10">
            {hackathons.map((hack, index) => (
              <motion.div
                key={hack.title}
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{hack.title}</h4>
                    <p className="text-blue-300 text-sm">Project: {hack.project}</p>
                  </div>

                  <div className="flex items-center gap-3 text-blue-300 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{hack.duration}</span>
                    </div>

                    {hack.github && (
                      <a
                        href={hack.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View source code"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-blue-100 leading-relaxed">{hack.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
