import { motion } from 'framer-motion';
import { Calendar, Trophy, BookOpen, Link } from 'lucide-react';

const activities = [
  {
    title: '1st Runner-Up',
    org: 'HackWavl Hackathon',
    date: 'Feb 2026',
    type: 'certificate',
    description:'Secured 2nd Runner-Up in my first inter-college hackathon, HackWavl (SMSOTSAV), competing against 20+ teams. Led a 4-member team to build a campus energy monitoring and optimization system focused on real-time energy tracking and efficiency improvement during the 8-hour hackathon.',
    link: 'https://drive.google.com/file/d/15Wu4J7wxHA40EdOKDh9KWhUELbfoQKJS/view?usp=sharing',
  },
  
  {
    title: 'Arcade Participant',
    org: 'Google Cloud Skills Boost',
    date: 'Apr 2025 – Jun 2025',
    type: 'certificate',
    description:
    'Completed the Google Cloud Skills Boost Arcade program, achieved the Arcade Trooper tier through hands-on cloud labs and challenges, and received official Google Cloud swag rewards.'
  },
  {
  title: 'Samsung Innovation Campus (C&P Track)',
  org: 'Samsung Innovation Campus',
  date: 'Aug 2025- Sep 2025',
  type: 'certificate',
  description:
    'Completed SIC training in Coding & Programming (C&P), covering programming fundamentals and problem solving. Led a 6-member team during the final 3-day hackathon, contributing across frontend, backend, and database development.',
  link: 'https://drive.google.com/file/d/1FxYIMvyRpeUpzrcG3vrafIYxBYX1C-Uj/view?usp=sharing',
},{
    title: 'ML Cohort Trainee',
    org: 'Girls Leading Tech',
    date: 'Jul 2025 – Aug 2025',
    type: 'certificate',
  description:
    'Completed a 4-week Machine Learning Cohort by Girls Leading Tech, focused on machine learning, AI development, mentorship sessions, weekly assignments, and hands-on projects. Independently participated in the final-week online hackathon.',
    link: 'https://drive.google.com/file/d/1wDMX8CtoFmpj-BIQmTS6fcK6RylyB7LD/view?usp=sharing',
  },
  {
    title: 'TechX26 Hackathon',
    org: 'GDG Lucknow',
    date: 'Feb 2026',
    type: 'certificate',
    description:
      'Participated in the 2-day TechX26 Hackathon organized by GDG Lucknow. Worked in a 4-member team, contributing mainly to frontend development.',
    link: 'https://drive.google.com/file/d/1Zx6-mluSxPxn9o_omgQDLXmjJqPWn1uD/view?usp=sharing',
  },
{
  title: 'DevFest 2025',
  org: 'Google Developer Group (GDG) Lucknow',
  date: 'Nov 2025',
  type: 'tech fest',
  description:
    'Participated in DevFest 2025 by GDG Lucknow, attending workshops on cloud computing, Kubernetes, UI/UX, and product development while networking with industry mentors and developers.'
},
 {
  title: 'SIH Internal Round Qualifier',
  org: 'Smart India Hackathon (SIH)',
  date: '2026',
  type: 'certificate',
  description: 'Qualified for the Smart India Hackathon (SIH) Internal Round, with our team selected among the top 20 out of 60+ participating teams. Built an AI-powered document verification application to determine the authenticity and legal validity of documents.',
},
  
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-8 bg-[#1f2937] text-white">
      {/* HEADER */}{' '}
      <div className="px-8 md:px-24 mb-16 flex justify-center md:justify-start">
  <h2
    className="
      text-center
      md:text-left
      uppercase
      tracking-[0.2em]
      text-yellow-400
      leading-[0.85]
      whitespace-pre-line
    "
    style={{
      fontFamily: 'var(--serif-display)',
      fontSize: 'clamp(2rem,5vw,4rem)',
    }}
  >
    ACTIVITIES
  </h2>
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

              {item.link && (
  <a
    href={item.link}
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
    {item.type === 'certificate' ? 'View Certificate ↗' : 'View Project ↗'}
  </a>
)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
