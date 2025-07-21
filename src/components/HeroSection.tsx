// components/HeroSection.tsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-stretch px-2 md:px-6 pt-20 pb-0 gap-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white"
    >
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-8">
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
            Full-Stack Developer.
          </span>
        </h1>

        <p className="text-lg text-blue-200 max-w-2xl">
          Currently open to <strong>internship</strong> opportunities where I
          can bring value, learn from experienced teams, and help ship
          meaningful features that make an impact.
        </p>
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
