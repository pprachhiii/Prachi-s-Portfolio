'use client';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen relative overflow-hidden px-4 md:px-24 py-6"
      style={{
        background: 'var(--cream)',
      }}
    >
      {/* Header */}

      <div className="flex items-end gap-8 mb-20">
        
          

<h2
          className="
      rotate-180
      [writing-mode:vertical-rl]

      text-yellow-400
      leading-[0.85]
      whitespace-pre-line"
          style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(2rem,5vw,4rem)',
          }}
        >
          Work <em style={{ color: 'var(--rust)' }}>Experience</em>
        </h2>
      </div>

      {/* Timeline */}

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Timeline Line */}

        <div className="absolute md:top-0 md:left-0 md:right-0 md:h-[2px] md:w-auto top-0 left-6 bottom-0 w-[2px] md:block bg-yellow-400" />

        {/* ========================================= */}
        {/* SHREEMAL */}
        {/* ========================================= */}

        <div className="relative pt-16 pl-14 pr-4 md:pl-0 opacity-100 translate-y-0 transition-all duration-700">
          <div className="absolute top-[-6px] left-4 w-4 h-4 rounded-full z-10 bg-yellow-600" />

          <div
            className="mb-4 text-[0.65rem] tracking-[0.15em] text-yellow-400"
            style={{
              fontFamily: 'var(--mono)',
            }}
          >
            Jun–Aug 2025
          </div>

          <h3
            className="text-[1.8rem] leading-[1.1] mb-2"
            style={{
              fontFamily: 'var(--serif-display)',
            }}
          >
            Full-Stack Intern -{' '}
            <em>
              <a
                href="https://drive.google.com/file/d/17TLtzdDpjwcLY7kdwVcebjH1Adz27El6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 underline"
              >
                Shreemal Technology
              </a>
            </em>
          </h3>

          <div
            className="mb-4 text-[0.72rem] tracking-[0.08em]"
            style={{
              fontFamily: 'var(--mono)',
              color: 'var(--muted)',
            }}
          >
            Remote{' '}
            <span
              className="inline-block rounded-full px-3 py-1"
              style={{
                fontSize: '0.58rem',
                border: '1px solid rgba(0,0,0,0.08)',
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(6px)',
                opacity: 0.8,
                fontFamily: 'var(--mono)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
              }}
            >
              Internship
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              'Next.js 13+',
              'Express.js',
              'TypeScript',
              'PostgreSQL',
              'Prisma',
              'Upstash',
              'Vercel',
              'Postman',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1"
                style={{
                  fontSize: '0.72rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: 'rgba(255,255,255,0.45)',
                  backdropFilter: 'blur(6px)',
                  opacity: 0.8,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
<p
            className="mb-6 opacity-75 text-[0.95rem] leading-[1.8]"
            style={{
              fontFamily: 'var(--sans)',
              color: 'var(--ink)',
            }}
          >
            Architected and deployed scalable full-stack features using Next.js, Server Actions, and
            Express.js REST APIs. Worked across backend logic, API design, and frontend integration
            to deliver production-ready features. Improved backend performance and system
            reliability through structured optimization practices.
          </p>

          <div className="mt-4">
            <ul className="pl-5 opacity-75 text-[0.88rem] leading-[1.7]">
              <li>• Optimized backend caching and rate-limiting using Upstash</li>
              <li>• Validated APIs using Postman for production-grade reliability</li>
              <li>• Collaborated on full-stack feature delivery from API to UI integration</li>
            </ul>
          </div>

          
        </div>

        {/* ========================================= */}
        {/* GETNOMIK */}
        {/* ========================================= */}

        <div className="relative pt-16 pl-14 pr-4 md:pl-0 opacity-100 translate-y-0 transition-all duration-700">
          <div className="absolute top-[-6px] left-4 w-4 h-4 rounded-full z-10 bg-yellow-600" />
          <div
            className="mb-4 text-[0.65rem] tracking-[0.15em] text-yellow-400"
            style={{
              fontFamily: 'var(--mono)',
            }}
          >
            Jul–Aug 2025
          </div>

          <h3
            className="text-[1.8rem] leading-[1.1] mb-2"
            style={{
              fontFamily: 'var(--serif-display)',
            }}
          >
            Backend Developer -{' '}
            <em>
              <a
                href="https://drive.google.com/file/d/1pwrkcc7H7bQj1h1Hj5DPLXIAasTpfmjQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 underline"
              >
                GetNomik
              </a>
            </em>
          </h3>

          <div
            className="mb-4 text-[0.72rem] tracking-[0.08em]"
            style={{
              fontFamily: 'var(--mono)',
              color: 'var(--muted)',
            }}
          >
            Remote{' '}
            <span
              className="inline-block rounded-full px-3 py-1"
              style={{
                fontSize: '0.58rem',
                border: '1px solid rgba(0,0,0,0.08)',
                background: 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(6px)',
                opacity: 0.8,
                fontFamily: 'var(--mono)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
              }}
            >
              Internship
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Node.js', 'Express.js', 'MySQL', 'JWT', 'RBAC', 'Razorpay', 'SMTP'].map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1"
                style={{
                  fontSize: '0.72rem',
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: 'rgba(255,255,255,0.45)',
                  backdropFilter: 'blur(6px)',
                  opacity: 0.8,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

<p
            className="mb-6 opacity-75 text-[0.95rem] leading-[1.8]"
            style={{
              fontFamily: 'var(--sans)',
              color: 'var(--ink)',
            }}
          >
            Built modular backend services using Node.js and Express.js with a focus on scalability,
            security, and maintainability. Designed authentication flows, payment integrations, and
            optimized database operations for efficient transactional workflows.
          </p>

          <div className="mt-4">
            <ul className="pl-5 opacity-75 text-[0.88rem] leading-[1.7]">
              <li>• Implemented JWT-based authentication with RBAC authorization</li>
              <li>• Integrated Razorpay for secure payment processing workflows</li>
              <li>• Optimized MySQL queries for improved backend performance</li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
}
