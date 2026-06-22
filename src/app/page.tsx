"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

// ─── Sub-components ──────────────────────────────────────────────────────────

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-display text-[12px] font-medium px-3 py-1 rounded-full text-indigo-300 tracking-wide"
      style={{
        background: "rgba(99, 102, 241, 0.12)",
        border: "1px solid rgba(99, 102, 241, 0.25)",
      }}
    >
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-display text-[11px] font-medium px-2.5 py-1 rounded-full text-[#7A86A1] tracking-wide"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-indigo-400 mb-3.5">
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      className="w-full h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
      }}
    />
  );
}

function BentoCard({
  icon,
  title,
  description,
  tags,
  wide = false,
}: {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  wide?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 ${
        wide ? "col-span-2 sm:col-span-2" : ""
      }`}
      style={{
        background: "#131929",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(99,102,241,0.3)";
        (e.currentTarget as HTMLDivElement).style.background = "#182033";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.background = "#131929";
      }}
    >
      {/* top-edge glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
        aria-hidden
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg"
        style={{
          background: "rgba(99, 102, 241, 0.12)",
          border: "1px solid rgba(99,102,241,0.2)",
        }}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="font-display text-[17px] font-semibold tracking-tight text-[#E8EDF5] mb-2.5">
        {title}
      </h3>
      <p className="text-[14px] text-[#7A86A1] leading-[1.7]">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function VideoRow({
  poster,
  src,
  title,
  description,
  tags,
  reverse = false,
}: {
  poster: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center rounded-2xl p-8 transition-all duration-300`}
      style={{
        background: "#131929",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(99,102,241,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
      }}
    >
      <video
        controls
        poster={poster}
        className="w-full lg:w-1/2 rounded-xl block bg-black shrink-0"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="lg:w-1/2">
        <h3 className="font-display text-xl font-semibold tracking-tight text-[#E8EDF5] mb-3">
          {title}
        </h3>
        <p className="text-[14px] text-[#7A86A1] leading-[1.75]">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebCard({
  icon,
  title,
  description,
  tags,
}: {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div
      className="group relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "#131929",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(99,102,241,0.3)";
        (e.currentTarget as HTMLDivElement).style.background = "#182033";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.background = "#131929";
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{
            background: "rgba(99, 102, 241, 0.12)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
          aria-hidden
        >
          {icon}
        </div>
        <div>
          <h3 className="font-display text-[16px] font-semibold tracking-tight text-[#E8EDF5] mb-1.5">
            {title}
          </h3>
          <p className="text-[13px] text-[#7A86A1] leading-[1.7]">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pl-14">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  tag,
  org,
  title,
  description,
}: {
  tag: string;
  org: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="reveal grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 py-9"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="pt-1">
        <div className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-indigo-400 mb-2">
          {tag}
        </div>
        <div className="font-display text-[14px] font-medium text-[#7A86A1]">
          {org}
        </div>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-[#E8EDF5] mb-3">
          {title}
        </h3>
        <p className="text-[15px] text-[#7A86A1] leading-[1.75]">{description}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const navRef = useRef<HTMLElement>(null);

  // Sticky nav frost effect
  useEffect(() => {
    const handler = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("nav-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Global styles: fonts, animations, scroll-reveal, nav frost ── */}
      <style>{`
        :root {
          --font-display: ${spaceGrotesk.style.fontFamily};
          --font-body: ${inter.style.fontFamily};
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          overflow-x: hidden;
        }
        .font-display { font-family: var(--font-display); }

        /* Nav frost */
        .nav-scrolled {
          background: rgba(8, 12, 24, 0.85) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Ambient blobs */
        .ambient::before {
          content: '';
          position: absolute;
          top: -20%; left: -10%;
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%);
          border-radius: 50%;
          animation: drift 18s ease-in-out infinite alternate;
        }
        .ambient::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -10%;
          width: 55vw; height: 55vw;
          background: radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%);
          border-radius: 50%;
          animation: drift 24s ease-in-out infinite alternate-reverse;
        }
        @keyframes drift {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(3vw,4vh) scale(1.05); }
        }

        /* Hero photo aura */
        .photo-aura::after {
          content: '';
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%);
          z-index: -1;
          animation: breathe 5s ease-in-out infinite;
        }
        .photo-aura::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(99,102,241,0.5), transparent 60%);
          z-index: -1;
        }
        @keyframes breathe {
          0%,100% { opacity: 0.7; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.06); }
        }

        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .ambient::before, .ambient::after,
          .photo-aura::after { animation: none; }
          .reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      <div
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen text-[#E8EDF5]`}
        style={{ background: "#080C18" }}
      >
        {/* Ambient background blobs */}
        <div
          className="ambient fixed inset-0 z-0 pointer-events-none overflow-hidden"
          aria-hidden
        />

        {/* ── NAV ── */}
        <nav
          ref={navRef}
          className="sticky top-0 z-50 flex justify-center flex-wrap gap-2 px-6 py-4 transition-all duration-300"
        >
          {[
            ["#about", "About"],
            ["#experience", "Experience"],
            ["#projects", "Projects"],
            ["#web", "Web"],
            ["#ai", "AI Work"],
            ["#app", "App"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-display text-[13px] font-medium tracking-wide text-[#7A86A1] px-4 py-1.5 rounded-full border border-transparent transition-all duration-200 hover:text-[#E8EDF5] hover:border-indigo-500/40 hover:bg-indigo-500/10"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── PAGE CONTENT ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* ── HERO ── */}
          <section
            className="min-h-[92vh] flex items-center py-20"
            aria-label="Introduction"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              {/* Text */}
              <div>
                <div className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase text-indigo-400 mb-5 flex items-center gap-2.5">
                  <span
                    className="block w-7 h-px"
                    style={{ background: "#6366F1" }}
                    aria-hidden
                  />
                  AI Engineer &amp; Developer
                </div>
                <h1
                  className="font-display font-bold leading-[1.08] tracking-tight text-[#E8EDF5] mb-6"
                  style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
                >
                  <span
                    style={{
                      background: "linear-gradient(135deg, #818CF8, #A78BFA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Anas Hamma
                  </span>
                  <br />
                  builds things
                  <br />
                  with intelligence.
                </h1>
                <p className="text-[17px] text-[#7A86A1] max-w-md mb-9 leading-[1.7]">
                  Full-stack developer and AI engineer from Algeria, specializing
                  in LLMs, RAG systems, and AI-powered applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "RAG Systems",
                    "AI Agents",
                    "Flutter",
                    "Full-stack",
                  ].map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="photo-aura relative"
                  style={{ width: "clamp(220px, 28vw, 340px)" }}
                >
                  <img
                    src="/me.jpg"
                    alt="Anas Hamma"
                    className="w-full rounded-[18px] block"
                    style={{ filter: "saturate(0.9)" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── ABOUT ── */}
          <section id="about" className="py-24">
            <div className="reveal">
              <SectionLabel>Who I am</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                A bit about me
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                I studied at Numidia Institute of Technology, graduated with a
                Bachelor&apos;s in AI, and have been building ever since.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <img
                  src="/host_anas.JPG"
                  alt="Anas at an event"
                  className="w-full block rounded-2xl"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <div className="space-y-4 text-[16px] text-[#7A86A1] leading-[1.8]">
                <p>
                  My name is{" "}
                  <span className="text-[#E8EDF5] font-medium">
                    Hamma Abdurahman Anas
                  </span>
                  . I&apos;m 22 years old (age is just a variable) and I graduated
                  from Numidia Institute of Technology with a Bachelor&apos;s
                  degree in Artificial Intelligence.
                </p>
                <p>
                  I&apos;m passionate about the intersection of intelligent
                  systems and practical software — building things that not only
                  work, but reason. From LLM-powered pipelines to cross-platform
                  mobile apps, I enjoy the full stack of making ideas real.
                </p>
                <p>
                  This portfolio is a window into what I&apos;ve learned and what
                  I&apos;ve built. Hope you enjoy it.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ── EXPERIENCE ── */}
          <section id="experience" className="py-24">
            <div className="reveal">
              <SectionLabel>Background</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Experience
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                Where I&apos;ve been and what I&apos;ve done along the way.
              </p>
            </div>

            <div className="reveal mb-12">
              <img
                src="/me_with_club.jpg"
                alt="Anas with the NCS club"
                className="w-full max-w-lg rounded-2xl block"
                style={{ filter: "saturate(0.85)" }}
              />
            </div>

            <div>
              <TimelineItem
                tag="Leadership"
                org="Numidia CS Club"
                title="NCS Vice-President"
                description="Actively contributed to the management of club activities, helping organize events such as hackathons, workshops, and networking sessions for students passionate about IT. Developed skills in coordination, public speaking, and community building."
              />
              <TimelineItem
                tag="Internship"
                org="AI Universe"
                title="AI Engineer Intern"
                description="Worked with Retrieval-Augmented Generation (RAG) systems and AI agents. Helped design pipelines that combined large language models with external data sources to deliver accurate, context-aware responses — gaining hands-on experience with vector databases, prompt engineering, and agent orchestration."
              />
            </div>
          </section>

          <Divider />

          {/* ── PROJECTS ── */}
          <section id="projects" className="py-24">
            <div className="reveal">
              <SectionLabel>Work</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Projects
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                A selection of things I&apos;ve designed, trained, and shipped.
              </p>
            </div>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BentoCard
                icon="🥗"
                title="AI Diet Recommendation System"
                description="End-of-study project: a personalized nutrition planning system powered by machine learning. Takes user profiles, dietary goals, and health restrictions to generate tailored meal plans by combining ML models with structured health data."
                tags={["Machine Learning", "Health Data", "Recommendation"]}
              />
              <BentoCard
                icon="♻️"
                title="Recyclable Material Classifier"
                description="Freelance computer vision project to classify recyclable materials from images. Built to support automated waste sorting systems and promote sustainability through intelligent image recognition."
                tags={["Computer Vision", "CNN", "Sustainability"]}
              />
            </div>
          </section>

          <Divider />

          {/* ── WEB SECTION ── */}
          <section id="web" className="py-24">
            <div className="reveal">
              <SectionLabel>Full-stack</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Web Development
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                Beyond AI, I build complete web applications — from polished
                frontends to robust server-side architectures — across the full
                stack.
              </p>
            </div>

            {/* Stack overview bar */}
            <div
              className="reveal flex flex-wrap items-center gap-3 rounded-2xl px-7 py-5 mb-10"
              style={{
                background: "#131929",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="font-display text-[11px] font-semibold tracking-[0.1em] uppercase text-[#3D4F6B] mr-2">
                Stack
              </span>
              {[
                "React", "Next.js", "TypeScript", "Tailwind CSS",
                "NestJS", "Supabase", "Refine", "REST APIs", "PostgreSQL",
              ].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {/* Capability cards */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <WebCard
                icon="📊"
                title="Admin Dashboards"
                description="Built data-rich admin panels using Refine — handling complex CRUD flows, resource management, and nested routing with clean, maintainable patterns."
                tags={["Refine", "React", "TypeScript"]}
              />
              <WebCard
                icon="⚡"
                title="BaaS-Powered Apps"
                description="Shipped full-featured applications backed by Supabase — auth, real-time subscriptions, row-level security, and file storage without managing infrastructure."
                tags={["Supabase", "PostgreSQL", "Auth"]}
              />
              <WebCard
                icon="🛠️"
                title="Backend APIs"
                description="Contributed to and built NestJS-powered backends — designing modular service layers, REST endpoints, guards, and database integrations."
                tags={["NestJS", "Node.js", "REST"]}
              />
              <WebCard
                icon="🎨"
                title="Frontend Interfaces"
                description="Crafted responsive, accessible UIs with React and Next.js — from marketing pages to complex multi-step forms and dynamic data views."
                tags={["Next.js", "Tailwind CSS", "React"]}
              />
              <WebCard
                icon="🔗"
                title="API Integration"
                description="Wired frontends to third-party and internal APIs — handling authentication flows, response normalization, error boundaries, and caching strategies."
                tags={["REST APIs", "Axios", "TypeScript"]}
              />
              <WebCard
                icon="🌍"
                title="Multilingual Apps"
                description="Implemented i18n across client projects supporting Arabic, French, and English — including RTL layouts and locale-aware content rendering."
                tags={["i18n", "next-intl", "RTL"]}
              />
            </div>
          </section>

          <Divider />

          {/* ── AI SECTION ── */}
          <section id="ai" className="py-24">
            <div className="reveal">
              <SectionLabel>Specialization</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                AI Agents &amp; Chatbots
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                The work I&apos;m most proud of — building systems that don&apos;t
                just respond, but reason.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="reveal">
                <VideoRow
                  poster="/chatbot_2.avif"
                  src="/simple_chatbot.mp4"
                  title="Personal AI Chatbot"
                  description="A personalized chatbot built on top of a locally running LLM. Handles context-aware questions and reasoning tasks with custom instructions — in this case, enforcing English-only responses. A clean demonstration of LLM integration with behavioral guardrails."
                  tags={["LLM", "Local Model", "Prompt Engineering"]}
                />
              </div>
              <div className="reveal">
                <VideoRow
                  poster="/chatbot_1.avif"
                  src="/Brainy_chatbot.mp4"
                  title="RAG Chatbot — BrainyWriter"
                  description="A specialized chatbot designed exclusively to answer questions about the BrainyWriter platform. Uses Retrieval-Augmented Generation to pull relevant context from a vector database containing all platform documentation before generating responses — accurate, grounded, and hallucination-resistant."
                  tags={["RAG", "Vector DB", "Documentation"]}
                  reverse
                />
              </div>
              <div className="reveal">
                <VideoRow
                  poster="/agent.webp"
                  src="/AI_Univ_agent.mp4"
                  title="Multi-Agent Educational Pipeline"
                  description="An end-to-end AI pipeline composed of multiple coordinated agents. Input: a PDF book. Output: a rephrased teaching script ready for classroom use, plus auto-generated chapter quizzes for student assessment. Demonstrates orchestration of specialized agents around a shared goal."
                  tags={["AI Agents", "PDF Processing", "Education", "Orchestration"]}
                />
              </div>
            </div>
          </section>

          <Divider />

          {/* ── MOBILE APP ── */}
          <section id="app" className="py-24">
            <div className="reveal">
              <SectionLabel>Mobile</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight text-[#E8EDF5] leading-[1.15] mb-4"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                Mobile Application
              </h2>
              <p className="text-[16px] text-[#7A86A1] max-w-xl mb-14 leading-[1.7]">
                Cross-platform development with Flutter.
              </p>
            </div>

            <div
              className="reveal grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-14 items-center rounded-2xl p-10"
              style={{
                background: "#131929",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/mobile_app1.jpg"
                  alt="Task Management App — screen 1"
                  className="w-40 rounded-xl block"
                  style={{ filter: "saturate(0.9)" }}
                />
                <img
                  src="/mobile_app2.jpg"
                  alt="Task Management App — screen 2"
                  className="w-40 rounded-xl block"
                  style={{ filter: "saturate(0.9)" }}
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#E8EDF5] mb-3.5">
                  Task Management App
                </h3>
                <p className="text-[15px] text-[#7A86A1] leading-[1.75]">
                  A Flutter-based productivity app that helps users add, delete,
                  and organize tasks, mark them as completed, and track progress
                  through visual indicators and statistics. Built entirely in
                  Flutter for a smooth, responsive, and intuitive experience
                  across both iOS and Android.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {["Flutter", "Dart", "Cross-platform", "Productivity"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="pt-4 pb-10 text-center">
            <Divider />
            <p className="font-display text-[13px] tracking-widest mt-10 text-[#3D4F6B]">
              © 2025 <span className="text-indigo-400">Anas Hamma</span> — Built
              with intent.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}