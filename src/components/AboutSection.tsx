import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* RIGHT: Card */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Card background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl transform rotate-6" />

              {/* Main Card */}
              <div
                className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="p-8 text-white z-10 relative space-y-4">
                  <div className="text-center">
                    {/* Gradient Circle */}
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">P</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">Prachi</h4>
                    <p className="text-blue-200">Full-Stack Developer</p>
                    <div className="space-y-2 text-sm mt-4">
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
          </div>

          {/* LEFT: Heading + Text */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h2 className="text-5xl font-bold mb-8 text-left bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="text-lg text-blue-200">
              <p className="leading-relaxed">
                Full-stack developer specializing in backend systems that prioritize performance, scalability, and maintainability. Strong collaborator with a focus on clean code and efficient development workflows.
              </p>
              <p className="leading-relaxed">
                Experienced in designing APIs, integrating services, and building robust architectures that support real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
