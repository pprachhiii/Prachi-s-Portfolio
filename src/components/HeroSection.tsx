import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-stretch px-2 md:px-6 pt-10 pb-10 gap-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative"
    >
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 z-10">
        <h1 className="text-4xl sm:text-6xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Hello!
          </span>
          <br />
          I'm{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Prachi Yadav
          </span>
          ,<br />a{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Software Developer.
          </span>
        </h1>

        <p className="text-lg text-blue-200 max-w-2xl">
          Seeking internships to apply my skills, collaborate with experienced developers, and
          contribute to meaningful software solutions.
        </p>
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
