import React from 'react';

export default function Projects() {
  return (
    <section className="py-12 overflow-hidden">
      {/* HEADER */}
      <div className="px-6 md:px-24 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className="text-5xl md:text-7xl font-black leading-none">Projects</h2>
      </div>
      {/* ================================================= */}
      {/* PROJECT 1 : CAR1PRO */}
      {/* ================================================= */}
      <div className="group min-h-[90vh] overflow-hidden">
        {/* FULL WIDTH HEADER */}
        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 mb-6">01 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-white">
            Car1
            <em className="italic text-cyan-600">Pro</em>
          </h3>

          <p className="italic text-[#c8dcbe]/50 mb-6 text-lg">
            A production-oriented automotive marketplace built with modern full-stack architecture.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              Car1Pro is a full-stack e-commerce platform for automotive accessories, supporting
              product listings, user workflows, and administrative management. The application was
              designed with production deployment in mind, incorporating containerization, CI/CD
              automation, and database management.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Implemented complete CRUD workflows for automotive accessories, users, orders, and
                administrative operations.
              </li>
              <li>
                • Designed database models using Prisma ORM with relational data handling and
                type-safe queries.
              </li>
              <li>
                • Automated deployment workflows using Docker and GitHub Actions for consistent
                production builds.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                'Next.js 14',
                'TypeScript',
                'Prisma',
                'PostgreSQL',
                'Tailwind CSS',
                'Docker',
                'GitHub Actions',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
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
                className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <img
              src="/car1pro.png"
              alt="CAR1PRO"
              className="
      w-[90%]
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

      {/* ================================================= */}
      {/* PROJECT 2 : DHARA */}
      {/* ================================================= */}
      <div className="group min-h-[90vh] overflow-hidden pt-20">
        {/* FULL WIDTH HEADER */}
        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 block mb-4">02 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-cyan-600">Dhara</h3>

          <p className="italic text-[#c8dcbe]/50 text-lg max-w-3xl">
            A civic platform designed to turn community reports into actionable public
            accountability.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              DHARA is a full-stack civic engagement platform that enables citizens to report
              infrastructure and environmental issues, track their resolution status, and
              participate in community-driven initiatives. The platform focuses on transparent issue
              reporting, structured workflows, and data management while maintaining a simple and
              accessible user experience.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Built a structured issue lifecycle workflow with status tracking, moderation, and
                audit visibility.
              </li>
              <li>
                • Developed RESTful APIs and optimized relational database schemas for issue
                management, reporting, and user activity.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Next.js', 'Node.js', 'PostgreSQL', 'Typescript', 'REST API'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
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
                className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <img
              src="/dhara.png"
              alt="DHARA"
              className="
      w-[90%]
  max-h-[600px]
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

      {/* ================================================= */}
      {/* PROJECT 3 : ITEM-MANAGER */}
      {/* ================================================= */}
      <div className="group min-h-[90vh] overflow-hidden pt-10">
        {/* FULL WIDTH HEADER */}
        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 mb-6">03 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-white">
            Item-
            <em className="italic text-cyan-600">Manager</em>
          </h3>

          <p className="italic text-[#c8dcbe]/50 mb-6 text-lg">
            A inventory management application focused on state consistency and modular
            architecture.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              Item Manager is a CRUD-based web application built to manage inventory records through
              a clean and maintainable architecture. The project emphasizes reusable components,
              predictable state management, and efficient data synchronization between the frontend
              and backend.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Built reusable CRUD modules with centralized state handling for predictable UI
                updates.
              </li>
              <li>
                • Implemented API-driven data synchronization to maintain consistency across
                application views.
              </li>
              <li>
                • Structured the application using modular components to improve maintainability and
                scalability.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['React', 'Vite', 'Node.js', 'JavaScript', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
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
                className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <img
              src="/item-manager.png"
              alt="Item Manager"
              className="
      w-[90%]
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

      {/* ================================================= */}
      {/* PROJECT 4 : 2070 Wildlife & Environmental Dashboard */}
      {/* ================================================= */}
      <div className="group min-h-[90vh] overflow-hidden pt-10">
        {/* FULL WIDTH HEADER */}
        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 mb-6">04 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-white">
            2070
            <em className="italic text-cyan-600">Wildlife & Environmental Dashboard</em>
          </h3>

          <p className="italic text-[#c8dcbe]/50 mb-6 text-lg">
            A data visualization platform for environmental monitoring and conservation analytics.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              The 2070 Dashboard is an interactive environmental analytics platform that visualizes
              wildlife and ecological datasets through maps, charts, and simulation-driven insights.
              The project focuses heavily on frontend engineering, geospatial visualization, and
              data-driven interfaces.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Integrated interactive maps, heatmaps, and geospatial layers for environmental
                data visualization.
              </li>
              <li>
                • Built reusable charting and dashboard components for handling large datasets
                efficiently.
              </li>
              <li>
                • Implemented predictive visualizations and simulation interfaces using dynamic
                state management.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['React', 'TypeScript', 'Tailwind CSS', 'Leaflet', 'Recharts'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
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
                className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <img
              src="/2070.png"
              alt="2070 Wildlife & Environmental Dashboard"
              className="
      w-[90%]
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

      {/* ================================================= */}
      {/* PROJECT 5 : StayEase */}
      {/* ================================================= */}
      <div className="group min-h-[90vh] overflow-hidden pt-10">
        {/* FULL WIDTH HEADER */}
        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 mb-6">05 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-white">
            Stay
            <em className="italic text-cyan-600">Ease</em>
          </h3>

          <p className="italic text-[#c8dcbe]/50 mb-6 text-lg">
            A rental marketplace engineered around search, authentication, and media management.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              StayEase is a full-stack rental listing platform that allows users to browse, create,
              and manage property listings through a secure authentication workflow. The application
              emphasizes search efficiency, session management, and optimized handling of property
              media assets.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Implemented secure session-based authentication and authorization workflows.
              </li>
              <li>
                • Built advanced filtering and search functionality for efficient property
                discovery.
              </li>
              <li>
                • Optimized image upload and asset management pipelines for listing creation and
                retrieval.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['MongoDB', 'React', 'Node.js', 'JavaScript', 'Bootstrap'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-cyan-600/10 bg-cyan-600/5 text-cyan-600 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
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
                className="px-6 py-3 text-xs uppercase tracking-widest border border-cyan-600 hover:bg-cyan-600/30 transition"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <img
              src="/stayease.png"
              alt="StayEase Rental Marketplace"
              className="
      w-[90%]
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

      {/* =============RESEARCH============================= */}
      <div className="group min-h-[90vh] overflow-hidden pt-10">
        {/* FULL WIDTH HEADER */}

        <div className="px-8 md:px-24 mb-12">
          <span className="text-[11px] tracking-[0.25em] text-[#c8dcbe]/50 mb-6">06 /</span>

          <h3 className="text-3xl md:text-4xl  font-black mb-3 text-white">
            AI Healthcare
            <em className="italic text-yellow-400"> Research</em>
          </h3>

          <p className="italic text-[#c8dcbe]/50 mb-6 text-lg">
            Exploring reliable RAG systems for medical coding and clinical documentation.
          </p>
        </div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-[60%_40%] gap-2 px-8 md:px-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#e8f0e0]/70 leading-8 max-w-2xl mb-8">
              This ongoing research initiative investigates how Retrieval-Augmented Generation (RAG)
              and clinical NLP techniques can improve healthcare documentation, medical auditing,
              and automated coding workflows. Conducted under faculty mentorship with a
              collaborative research team, the work focuses on evaluating existing architectures,
              identifying reliability challenges, and studying techniques that improve factual
              grounding and reduce hallucinations in high-stakes medical environments.
            </p>

            <ul className="space-y-2 text-[#e8f0e0]/70 mb-8">
              <li>
                • Conducted comparative analysis of research papers covering RAG architectures,
                clinical NLP pipelines, and automated medical coding systems.
              </li>

              <li>
                • Evaluated retrieval, chunking, reranking, and grounding strategies to understand
                their impact on factual consistency and response quality.
              </li>

              <li>
                • Investigated validation workflows and context-verification techniques aimed at
                reducing hallucinations in healthcare AI systems.
              </li>
            </ul>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                'RAG',
                'LLMs',
                'Clinical NLP',
                'Vector Search',
                'Literature Review',
                'Research Analysis',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full border border-yellow-400/10 bg-yellow-400/5 text-yellow-400 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center gap-5">
            <div className="border border-yellow-400/10 rounded-xl p-5 bg-yellow-400/[0.02]">
              <div className="text-yellow-400 text-xs tracking-[0.25em] mb-2">01</div>
              <h4 className="font-semibold mb-2 text-white">Research Paper Analysis</h4>
              <p className="text-sm text-white/60">
                Reviewing literature on healthcare AI, RAG systems, medical coding automation, and
                clinical language processing.
              </p>
            </div>

            <div className="border border-yellow-400/10 rounded-xl p-5 bg-yellow-400/[0.02]">
              <div className="text-yellow-400 text-xs tracking-[0.25em] mb-2">02</div>
              <h4 className="font-semibold mb-2 text-white">Identifying Limitations</h4>
              <p className="text-sm text-white/60">
                Studying hallucinations, retrieval failures, grounding issues, and reliability
                challenges in existing approaches.
              </p>
            </div>

            <div className="border border-yellow-400/10 rounded-xl p-5 bg-yellow-400/[0.02]">
              <div className="text-yellow-400 text-xs tracking-[0.25em] mb-2">03</div>
              <h4 className="font-semibold mb-2 text-white">Evaluation & Findings</h4>
              <p className="text-sm text-white/60">
                Comparing approaches and documenting observations regarding accuracy, grounding, and
                trustworthiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
