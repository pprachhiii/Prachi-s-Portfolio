'use client';

import { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';
import { initializeConstellation } from './constellation';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const cleanup = initializeConstellation({
      canvas: canvasRef.current,
      label: labelRef.current,
      hint: hintRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={isVisible ? 'visible' : ''}>
      <div className="skills-header reveal">
  
  {/* MOBILE */}
  <h2 className="block lg:hidden text-[3rem] text-center font-semibold text-white tracking-[0.2em] mb-6">
    Tools & <br />
    <em>Technologies</em>
  </h2>

  {/* LAPTOP */}
  <h2 className="hidden lg:block text-[4rem] text-left font-semibold text-white tracking-[0.2em] mb-6">
    Tools & <em>Technologies</em>
  </h2>

</div>

      <div className="skills-canvas">
        <canvas ref={canvasRef} id="constellation" />

        <div ref={labelRef} id="const-label" />
      </div>
    </section>
  );
};

export default SkillsSection;
