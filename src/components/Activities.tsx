import { motion } from 'framer-motion';
import { Calendar, Trophy, BookOpen, Github } from 'lucide-react';

const activities = [
  {
    title: 'HackWave Winner',
    org: 'HackWave Hackathon',
    date: 'Feb 2026',
    description:
      'Led development of Voltonic and secured 1st place through rapid prototyping, collaborative problem solving, and efficient feature prioritization.',
    github: 'https://github.com/pprachhiii/Voltonic',
  },
  {
    title: 'SIH Internal Round Qualifier',
    org: 'Smart India Hackathon',
    date: '2025',
    description:
      'Selected through institutional evaluation for proposing SynCode AI, an AI-powered medical coding and healthcare audit automation platform.',
    github: 'https://github.com/pprachhiii/syncode-AI',
  },
  {
    title: 'Arcade Participant',
    org: 'Google Cloud Skills Boost',
    date: 'Apr 2025 – Jun 2025',
    description:
      'Completed multiple cloud labs and hands-on challenges covering cloud infrastructure, deployment workflows, networking, and Google Cloud services.',
  },
  {
    title: 'ML Cohort Trainee',
    org: 'Girls Leading Tech',
    date: 'Jul 2025 – Aug 2025',
    description:
      'Participated in an intensive machine learning apprenticeship focused on Python, model development, AI workflows, and collaborative project building.',
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-8 bg-[#1f2937] text-white">
      {/* HEADER */}{' '}
      <div className="px-8 md:px-24 mb-16">
        <h2 className="text-5xl md:text-7xl font-black mt-3">Activities</h2>
      </div>
      {/* GRID */}
      <div className="px-8 md:px-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {activities.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="
            border
            border-white/10
            bg-white/[0.02]
            p-6
            min-h-[320px]
            flex
            flex-col
          "
            >
              <div
                className="text-[11px] tracking-[0.18em] mb-4 uppercase"
                style={{ color: '#b85c38' }}
              >
                {item.date}
              </div>

              <h3 className="text-xl font-bold mb-2">{item.title}</h3>

              <div className="text-gray-400 text-sm mb-5">{item.org}</div>

              <p className="text-gray-300 text-sm leading-7 flex-grow">{item.description}</p>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                mt-6
                text-xs
                uppercase
                tracking-[0.15em]
                border-t
                border-white/10
                pt-4
                hover:text-[#b85c38]
                transition-colors
              "
                >
                  View Project ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
