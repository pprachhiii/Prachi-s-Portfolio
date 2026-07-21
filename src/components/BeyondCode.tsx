import React from 'react';

const BeyondCode = () => {
  return (
    <section id="beyond-code" className="py-6 px-6 bg-[#1f2937] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2           className="
      rotate-180
      [writing-mode:vertical-rl]

      text-yellow-400
      leading-[0.85]
      whitespace-pre-line"
          style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(2rem,5vw,4rem)',
          }}>Who am I when I’m not on laptop</h2>

          <p className="max-w-3xl mx-auto mt-8 text-blue-200 leading-8">
            I'm probably dancing, painting, trying a new recipe, getting my hands dirty with
            pottery, or lost in a playlist that changes every week, or dreaming about landing that
            perfect job so I can own my space and buy endless plants and fill every corner of my
            room with them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
