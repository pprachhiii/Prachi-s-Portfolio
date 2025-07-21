import { useState, useEffect, useRef } from 'react';
import { Calendar, Heart, Code, Lightbulb, Star, Mountain } from 'lucide-react';

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
  feeling: string;
  icon: any;
  mood: 'growth' | 'challenge' | 'discovery' | 'healing';
}

export const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const journeyEvents: JourneyEvent[] = [
    {
      year: '2023',
      title: 'Foundations Built',
      description:
        'Started my coding journey in college. Focused on HTML, CSS, C, and core CS subjects like DSA and OS. No big skills yet — but the spark was real.',
      feeling: 'Laying bricks with curiosity',
      icon: Lightbulb,
      mood: 'discovery',
    },
    {
      year: '2024',
      title: 'Full-Stack Fire',
      description:
        'Learned JavaScript and MERN stack through YouTube, courses, and raw hustle. Started building small projects, learned by doing, kept pushing through bugs and burnout.',
      feeling: 'Momentum in motion',
      icon: Code,
      mood: 'growth',
    },
    {
      year: '2025',
      title: 'Level Up & First Internship',
      description:
        'Started building real MERN projects, followed advanced tutorials, and finally landed my first internship in June. Joined tech programs via LinkedIn and built a dev routine.',
      feeling: 'Confidence, finally',
      icon: Star,
      mood: 'growth',
    },
    {
      year: 'Now',
      title: 'Thinking Bigger',
      description:
        'Looking to build real-world impactful projects — not just for the resume, but for people. Brainstorming ideas that solve actual problems and learning by shipping.',
      feeling: 'Ready for the next leap',
      icon: Mountain,
      mood: 'healing',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getMoodStyles = (mood: JourneyEvent['mood']) => {
    const styles = {
      growth: 'from-green-400/30 to-green-700/10 border-green-400/40 shadow-green-400/30',
      challenge: 'from-rose-500/30 to-red-800/10 border-rose-500/40 shadow-rose-500/30',
      discovery: 'from-blue-400/30 to-indigo-800/10 border-blue-400/40 shadow-blue-400/30',
      healing: 'from-yellow-300/30 to-yellow-600/10 border-yellow-400/40 shadow-yellow-300/30',
    };
    return styles[mood];
  };

  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Journey</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto font-serif">
            It's been a mix of bugs, breakthroughs, and late-night debugging — and somehow, it all adds up.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-500 to-pink-500 opacity-30" />

          <div className="space-y-16">
            {journeyEvents.map((event, index) => {
              const Icon = event.icon;
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  ref={(el) => { itemRefs.current[index] = el }}
                  data-index={index}
                  className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16 space-y-8 lg:space-y-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 lg:relative lg:left-auto lg:transform-none lg:order-2">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${getMoodStyles(event.mood)} border 
                        flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-700 
                        ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 lg:order-${isLeft ? '1' : '3'}`}>
                    <div
                      className={`transition-all duration-700 delay-300 max-w-md mx-auto lg:mx-0 
                        ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition group`}
                    >
                      <div className="inline-flex items-center space-x-2 mb-4">
                        <Calendar className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm font-semibold text-yellow-300 bg-yellow-300/10 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-playfair font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-blue-100 leading-relaxed mb-4">{event.description}</p>

                      <div className="flex items-center space-x-2 text-sm text-yellow-200">
                        <Heart className="w-4 h-4" />
                        <span className="italic">"{event.feeling}"</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className={`flex-1 lg:order-${isLeft ? '3' : '1'} hidden lg:block`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-blue-300 font-mono text-sm max-w-lg mx-auto">
            This journey continues with every project, every line of code, every bug that makes me cry and then proud.
          </p>
        </div>
      </div>
    </section>
  );
};
