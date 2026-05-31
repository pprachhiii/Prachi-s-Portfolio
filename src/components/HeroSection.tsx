import React from 'react';

const HeroSection = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-stretch px-12 md:px-24 pt-24 pb-10 gap-0 bg-[#1f2937] text-white relative"
>
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 z-10">
        <h1 className="text-6xl md:text-5xl font-bold leading-snug">
          <span className="bg-yellow-400 bg-clip-text text-transparent">Hello!</span>
          <br />
          I'm <span className="bg-yellow-400 bg-clip-text text-transparent">Prachi Yadav</span>
          ,<br />a{' '}
          <span className="bg-yellow-400 bg-clip-text text-transparent">Software Developer.</span>
        </h1>

        <p className="text-xl md:text-xl font-normal  text-blue-200 ">
          Seeking internships to apply my skills, collaborate with experienced developers, and
          contribute to meaningful software solutions.
        </p>
        {/* BUTTONS */}
        <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
          {/* HIRE ME */}
          <a
            href="#contact"
            className="
      inline-block
      w-fit

      bg-[#b85c38]
      border
      border-[#b85c38]
      text-white

      tracking-[0.18em]
      text-[0.72rem]
      font-medium

      px-6
      py-3

      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-[#a14f2f]
    "
          >
            Hire Me
          </a>

          {/* VIEW WORK */}
          <a
            href="#projects"
            className="
      inline-block
      w-fit

      border
      border-[#b85c38]
      text-[#b85c38]

      tracking-[0.18em]
      text-[0.72rem]
      font-medium

      px-6
      py-3

      transition-all
      duration-300

      hover:bg-[#b85c38]
      hover:text-white
      hover:-translate-y-1
    "
          >
            View Work
          </a>
        </div>
      </div>

      {/* Right: Video */}
      <div className="flex-1 flex items-end justify-center relative">
        <video
          src="/hero-video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-[22rem] h-[36rem] object-contain "
        />
      </div>
    </section>
  );
};

export default HeroSection;
