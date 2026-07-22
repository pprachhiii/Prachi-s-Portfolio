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
<div className="flex justify-center md:justify-start mb-20">
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
    WORK EXPERIENCE
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
<div className="mt-4">
  <ul
    className="pl-5 opacity-75 text-[0.9rem] leading-[1.8] space-y-2"
    style={{
      fontFamily: 'var(--sans)',
      color: 'var(--ink)',
    }}
  >
    <li>
      • Built responsive <strong>Next.js</strong> interfaces using <strong>TypeScript</strong> and
      <strong> Tailwind CSS</strong>, integrating <strong>REST APIs</strong> across production features.
    </li>

    <li>
      • Improved backend performance with <strong>Upstash Redis</strong> caching and implemented
      <strong> rate limiting (5 requests/minute)</strong> on authentication APIs.
    </li>

    <li>
      • Collaborated across <strong>frontend, backend, and API integration</strong> to deliver
      production-ready features using modern full-stack workflows.
    </li>

    <li>
      • Validated and tested APIs using <strong>Postman</strong>, improving API reliability and
      development efficiency.
    </li>
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

<div className="mt-4">
  <ul
    className="pl-5 opacity-75 text-[0.9rem] leading-[1.8] space-y-2"
    style={{
      fontFamily: 'var(--sans)',
      color: 'var(--ink)',
    }}
  >
    <li>
      • Built backend <strong>REST APIs</strong> using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong> for production applications.
    </li>

    <li>
      • Implemented secure <strong>JWT authentication</strong> and <strong>Role-Based Access Control (RBAC)</strong> for <strong>2 user roles</strong>.
    </li>

    <li>
      • Integrated <strong>Razorpay</strong> payment gateway and <strong>SMTP</strong> email services for transactional workflows.
    </li>

    <li>
      • Optimized <strong>MySQL</strong> queries across <strong>4+ API endpoints</strong>, improving backend performance and database efficiency.
    </li>
  </ul>
</div>

          
        </div>
      </div>
    </section>
  );
}
