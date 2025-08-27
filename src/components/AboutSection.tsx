import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
    >
      <div className="relative z-10 container mx-auto px-6 pt-24"> 
        {/* pt-24 ensures content clears the fixed navbar */}

        {/* Outer Glass Div */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 h-[80vh] flex flex-col">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
            About Me
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 flex-grow items-center">
            {/* LEFT: Single Big Card */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl transform rotate-3" />
              <div
                className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl w-full h-full transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="p-6 md:p-8 text-white h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">P</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold mb-1">Prachi</h4>
                    <p className="text-blue-200 text-sm md:text-base">Full-Stack Developer</p>
                    <div className="space-y-2 text-xs md:text-sm mt-4">
                      <div className="flex justify-between text-blue-300">
                        <span>Experience:</span>
                        <span>Growing Strong</span>
                      </div>
                      <div className="flex justify-between text-blue-300">
                        <span>Specialty:</span>
                        <span>Backend Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* RIGHT: Text (centered) */}
            <div className="flex flex-col justify-center h-full">
              <div className="text-base md:text-lg text-blue-200 space-y-4 leading-relaxed">
                <p>
                  Full-stack developer specializing in backend systems that
                  prioritize performance, scalability, and maintainability. Strong
                  collaborator with a focus on clean code and efficient
                  development workflows.
                </p>
                <p>
                  Experienced in designing APIs, integrating services, and
                  building robust architectures that support real-world
                  applications.
                </p>
                <p>
                  Beyond coding, I’m passionate about creating impactful 
                  solutions that connect people and bring ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
