import React from 'react';

export default function Projects() {
  return (
    <section className="py-12 overflow-hidden">
      {/* HEADER */}
      <div className="px-6 md:px-24 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2           className="
      rotate-180
      [writing-mode:vertical-rl]

      text-yellow-400
      leading-[0.85]
      whitespace-pre-line"
          style={{
            fontFamily: 'var(--serif-display)',
            fontSize: 'clamp(2rem,5vw,4rem)',
          }}>Projects</h2>
      </div>
      {/* ================================================= */}
{/* PROJECT 1 : CAR1PRO */}
{/* ================================================= */}

<div className="group min-h-[90vh] overflow-hidden">

  <div className="px-8 md:px-24">

    {/* Number */}
    <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50">
      01 /
    </span>

    {/* Desktop Layout */}
    <div className="grid md:grid-cols-[60%_40%] gap-12 mt-5">

      {/* LEFT */}
      <div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
          Car1
          <em className="italic text-cyan-600">Pro</em>
        </h3>

        {/* Subtitle */}
        <p className="italic text-[#c8dcbe]/50 text-lg mb-6">
          A production-oriented automotive marketplace built with modern full-stack architecture.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://github.com/pprachhiii/car1pro"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 bg-cyan-600/20 hover:bg-cyan-600/30 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://car1pro.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
          >
            Live Demo ↗
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mb-8">
          <img
            src="/car1pro.png"
            alt="Car1Pro"
            className="w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
          Car1Pro is a full-stack automotive marketplace designed for product discovery,
          secure shopping, and administrative management, with a production-ready
          architecture focused on scalability and deployment.
        </p>

        {/* Features */}
        <ul className="space-y-3 text-[#e8f0e0]/70">
          <li>
            • Built a full-stack marketplace with <strong>12+ responsive pages</strong>
            using Next.js, React, TypeScript, and Tailwind CSS.
          </li>

          <li>
            • Developed <strong>15+ REST APIs</strong> and
            <strong> 8 relational database models</strong> supporting products,
            carts, orders, and authentication.
          </li>

          <li>
            • Automated deployment with <strong>Docker</strong>,
            <strong> GitHub Actions</strong>, and <strong>Vercel</strong>, while
            building reusable UI components with Radix UI and React Hook Form.
          </li>
        </ul>

      </div>

      {/* Desktop Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/car1pro.png"
          alt="Car1Pro"
          className="w-[90%] max-h-[700px] rounded-2xl shadow-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

    </div>
  </div>

</div>
      {/* ================================================= */}
{/* PROJECT 2 : DHARA */}
{/* ================================================= */}

<div className="group min-h-[90vh] overflow-hidden pt-20">

  <div className="px-8 md:px-24">

    {/* Number */}
    <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50">
      02 /
    </span>

    <div className="grid md:grid-cols-[60%_40%] gap-12 mt-5">

      {/* LEFT */}
      <div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black mb-3 text-cyan-600">
          Dhara
        </h3>

        {/* Subtitle */}
        <p className="italic text-[#c8dcbe]/50 text-lg mb-6">
          A civic platform designed to turn community reports into actionable public accountability.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://github.com/pprachhiii/dhara"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 bg-cyan-600/20 hover:bg-cyan-600/30 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://dhara-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
          >
            Live Demo ↗
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Next.js",
            "TypeScript",
            "Node.js",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
            "Zustand",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mb-8">
          <img
            src="/dhara.png"
            alt="Dhara"
            className="w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
          DHARA is a full-stack civic engagement platform that enables citizens to report infrastructure issues, track progress, and participate in community-driven initiatives through structured workflows and a responsive user experience.
        </p>

        {/* Features */}
        <ul className="space-y-3 text-[#e8f0e0]/70">
          <li>
            • Built a full-stack platform with <strong>7+ responsive workflows</strong> for issue reporting, tracking, voting, and volunteer participation.
          </li>

          <li>
            • Engineered <strong>20+ relational data models</strong> and <strong>30+ REST APIs</strong> using Prisma and PostgreSQL to support scalable civic workflows.
          </li>

          <li>
            • Integrated <strong>Zustand</strong>, <strong>React Hook Form</strong>, and <strong>ImageKit</strong> to deliver predictable state management, validated forms, and seamless media uploads.
          </li>
        </ul>

      </div>

      {/* Desktop Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/dhara.png"
          alt="Dhara"
          className="w-[90%] max-h-[700px] rounded-2xl shadow-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

    </div>

  </div>

</div>
      

            
              {/* ================================================= */}
{/* PROJECT 3 : ITEM MANAGER */}
{/* ================================================= */}

<div className="group min-h-[90vh] overflow-hidden pt-20">

  <div className="px-8 md:px-24">

    {/* Number */}
    <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50">
      03 /
    </span>

    <div className="grid md:grid-cols-[60%_40%] gap-12 mt-5">

      {/* LEFT */}
      <div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
          Item-
          <em className="italic text-cyan-600">Manager</em>
        </h3>

        {/* Subtitle */}
        <p className="italic text-[#c8dcbe]/50 text-lg mb-6">
          An inventory management application focused on modular architecture and efficient CRUD operations.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://github.com/pprachhiii/item-manager"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 bg-cyan-600/20 hover:bg-cyan-600/30 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://item-manager-cee0.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
          >
            Live Demo ↗
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "React",
            "Vite",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mb-8">
          <img
            src="/item-manager.png"
            alt="Item Manager"
            className="w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
          Item Manager is a full-stack inventory management application that simplifies product tracking through reusable components, API-driven data management, and a clean, maintainable architecture.
        </p>

        {/* Features */}
        <ul className="space-y-3 text-[#e8f0e0]/70">
          <li>
            • Built complete <strong>CRUD workflows</strong> for inventory management using React, Node.js, Express.js, and MongoDB.
          </li>

          <li>
            • Developed <strong>REST APIs</strong> and integrated frontend-backend data synchronization for consistent application state.
          </li>

          <li>
            • Designed a <strong>modular component architecture</strong> with reusable UI components for easier scalability and maintenance.
          </li>
        </ul>

      </div>

      {/* Desktop Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/item-manager.png"
          alt="Item Manager"
          className="w-[90%] max-h-[700px] rounded-2xl shadow-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

    </div>

  </div>

</div>
{/* PROJECT 4 : 2070 Wildlife & Environmental Dashboard */}
{/* ================================================= */}

<div className="group min-h-[90vh] overflow-hidden pt-20">

  <div className="px-8 md:px-24">

    {/* Number */}
    <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50">
      04 /
    </span>

    <div className="grid md:grid-cols-[60%_40%] gap-12 mt-5">

      {/* LEFT */}
      <div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
          2070
          <em className="italic text-cyan-600">
            {" "}Wildlife & Environmental Dashboard
          </em>
        </h3>

        {/* Subtitle */}
        <p className="italic text-[#c8dcbe]/50 text-lg mb-6">
          An interactive dashboard for environmental monitoring, geospatial insights, and data visualization.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://github.com/pprachhiii/2070"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 bg-cyan-600/20 hover:bg-cyan-600/30 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://2070-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
          >
            Live Demo ↗
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Leaflet",
            "Recharts",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mb-8">
          <img
            src="/2070.png"
            alt="2070 Wildlife & Environmental Dashboard"
            className="w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
          The 2070 Dashboard is an environmental analytics platform that transforms wildlife and ecological data into interactive maps, charts, and visual insights through a responsive dashboard experience.
        </p>

        {/* Features */}
        <ul className="space-y-3 text-[#e8f0e0]/70">
          <li>
            • Built interactive <strong>maps, heatmaps, and geospatial visualizations</strong> using Leaflet for environmental monitoring.
          </li>

          <li>
            • Developed reusable <strong>dashboard and chart components</strong> with React, Recharts, and TypeScript to visualize complex datasets.
          </li>

          <li>
            • Designed a responsive interface with <strong>Tailwind CSS</strong> and dynamic state management for smooth, data-driven user interactions.
          </li>
        </ul>

      </div>

      {/* Desktop Image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/2070.png"
          alt="2070 Wildlife & Environmental Dashboard"
          className="w-[90%] max-h-[700px] rounded-2xl shadow-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

    </div>

  </div>

</div>
{/* ================================================= */}
{/* PROJECT 5 : STAYEASE */}
{/* ================================================= */}
<div className="group min-h-[90vh] overflow-hidden pt-10">
  {/* HEADER */}
  <div className="px-8 md:px-24 mb-10">
    <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 block mb-4">
      05 /
    </span>

    <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
      Stay
      <em className="italic text-cyan-600">Ease</em>
    </h3>

    <p className="italic text-[#c8dcbe]/50 text-lg max-w-3xl mb-6">
      A rental marketplace engineered around search, authentication, and media management.
    </p>

    {/* LINKS */}
    <div className="flex flex-wrap gap-4 mb-6">
      <a
        href="https://github.com/pprachhiii/StayEase"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 bg-cyan-600/20 hover:bg-cyan-600/30 transition"
      >
        GitHub ↗
      </a>

      <a
        href="https://stayease-smsm.onrender.com/listings/"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
      >
        Live Demo ↗
      </a>
    </div>

    {/* TECH STACK */}
    <div className="flex flex-wrap gap-2">
      {[
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "REST APIs",
      ].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* CONTENT */}
  <div className="grid md:grid-cols-[60%_40%] gap-10 md:gap-2 px-8 md:px-24">
    {/* LEFT */}
    <div className="order-2 md:order-1 flex flex-col justify-center">
      <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
        StayEase is a full-stack rental marketplace that enables users to browse,
        list, and manage properties through secure authentication, advanced search,
        and media management.
      </p>

      <ul className="space-y-3 text-[#e8f0e0]/70">
        <li>
          • Built property listing, booking, and CRUD workflows with a responsive
          React interface.
        </li>
        <li>
          • Developed REST APIs, authentication, and MongoDB-backed data
          management using Node.js and Express.
        </li>
        <li>
          • Implemented property search, filtering, and image uploads for a
          seamless rental experience.
        </li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="order-1 md:order-2 flex items-center justify-center w-full">
      <img
        src="/stayease.png"
        alt="StayEase Rental Marketplace"
        className="
          w-[90%]
          mx-auto
          max-h-[700px]
          rounded-2xl
          shadow-2xl
          object-contain
          transition-transform
          duration-500
          group-hover:scale-[1.02]
        "
      />
    </div>
  </div>
</div>
      
    </section>
  );
}
