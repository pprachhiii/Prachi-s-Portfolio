import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-stretch px-2 md:px-6 pt-20 pb-10 gap-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative"
    >
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Hello!
          </span>
          <br />
          I'm{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Prachi Yadav
          </span>
          ,<br />
          a{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Software Developer.
          </span>
        </h1>

        <p className="text-lg text-blue-200 max-w-2xl">
        Open to internships where I can apply my skills, learn from seasoned developers, and help build impactful software solutions.        
        </p>

        {/* Resume Buttons */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1MqWmMqvv1N6Dme55OC2pGcPiXW2FlfmZ"
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-fit"
        >
          Download Resume
        </a>

        {/* View Button */}
        <a
          href="https://drive.google.com/file/d/1MqWmMqvv1N6Dme55OC2pGcPiXW2FlfmZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-fit"
        >
          View Resume
        </a>
      </div>


      </div>

      {/* Right: Image */}
      <div className="flex-1 flex items-end justify-center">
        <img
          src="/profile_lego.png"
          alt="Prachi Yadav"
          className="w-[22rem] h-[36rem] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
