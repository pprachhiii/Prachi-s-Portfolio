import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#1f2937]
        px-6
        md:px-12
        lg:px-20
        py-12
        text-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[80px_1fr_280px]
          gap-16
          items-start
        "
      >
        {/* COLUMN 1 - VERTICAL TITLE */}
        <div
          className="
    hidden
    lg:flex
    justify-center
    items-start
    overflow-visible
  "
        >
          <h2
            className="
      rotate-180
      [writing-mode:vertical-rl]

      text-yellow-400

      text-[5rem]
      leading-[0.85]
      font-medium
      whitespace-pre-line
    "
          >
            {`ABOUT ME`}
          </h2>
        </div>

        {/* COLUMN 2 - CONTENT */}
        <div>
          <h2 className="lg:hidden text-[5rem] text-center font-semibold text-yellow-400 tracking-[0.2em] mb-6">
  ABOUT ME
</h2>

          <div className="space-y-7 max-w-3xl">
            <p
              className="
                text-[1.02rem]
                leading-8
                text-blue-200
              "
            >
              I recently graduated and am currently looking for opportunities where I can
              contribute, learn, and continue growing as a software developer. I enjoy turning ideas
              into practical solutions and building software that creates meaningful impact.
            </p>

            <p
              className="
                text-[1.02rem]
                leading-8
                text-blue-200
              "
            >
              My interests span both frontend and backend development, allowing me to work across
              the full development lifecycle. From crafting intuitive user experiences to designing
              scalable APIs, databases, and production-ready systems, I enjoy building applications
              that balance usability, performance, and maintainability.
            </p>

            <p
              className="
                text-[1.02rem]
                leading-8
                text-blue-200
              "
            >
              Beyond development, I actively participate in hackathons, technical learning programs,
              and collaborative research initiatives, expanding my knowledge through
              experimentation, problem-solving, and hands-on learning.
            </p>
          </div>
        </div>

        {/* COLUMN 3 - STATS */}
        <div className="lg:pt-6">
          <div className="space-y-10">
            <div
              className="
                pt-0
              "
            >
              <div
                className="
                  text-5xl
                  font-bold
                  text-white
                  leading-none
                "
                style={{
                  fontFamily: 'var(--serif-display)',
                }}
              >
                2
              </div>

              <div
                className="
                  mt-2
                  text-[0.72rem]
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                PRODUCTION INTERNSHIPS
              </div>
            </div>

            <div
              className="
                border-t
                border-white/10
                pt-5
              "
            >
              <div
                className="
                  text-5xl
                  font-bold
                  text-white
                  leading-none
                "
                style={{
                  fontFamily: 'var(--serif-display)',
                }}
              >
                3+
              </div>

              <div
                className="
                  mt-2
                  text-[0.72rem]
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                SHIPPED PROJECTS
              </div>
            </div>

            <div
              className="
                border-t
                border-white/10
                pt-5
              "
            >
              <div
                className="
                  text-3xl
                  font-bold
                  text-white
                  leading-none
                "
                style={{
                  fontFamily: 'var(--serif-display)',
                }}
              >
                PERN & MERN
              </div>

              <div
                className="
                  mt-2
                  text-[0.72rem]
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                CORE STACK
              </div>
            </div>
            <div
              className="
                border-t
                border-white/10
                pt-5
              "
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
