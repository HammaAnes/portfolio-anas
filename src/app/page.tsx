export default function Home() {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 bg-scroll" />

      {/* Navigation */}
      <nav className="mx-3 flex justify-evenly py-4 gap-4">
        <a href="#introduction" className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
          Self-Introduction
        </a>
        <a href="#experience" className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
          My Experience
        </a>
        <a href="#projects" className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition">
          My Projects
        </a>
      </nav>

      {/* Main content (scrollable) */}
      <div className="flex justify-center">
        <div className="px-8 py-16 flex flex-col gap-y-16">
          {/* HERO SECTION */}
          <div className="flex justify-evenly gap-x-20 flex-wrap">
            <div className="max-w-[300px]">
              <img src="/me.jpg" alt="anas" className="rounded-xl w-full" />
            </div>
            <div className="self-center">
              <h1 className="font-bold text-3xl">
                Welcome to <span className="text-red-200">Anas</span>
              </h1>
              <h1 className="font-bold text-3xl">
                <span className="text-green-200">Hamma</span>'s Portfolio
              </h1>
            </div>
          </div>

          {/* INTRODUCTION SECTION */}
          <h2 id="introduction" className="text-2xl font-bold mb-2">Self-Introduction</h2>
          <div className="h-[400px] bg-white/10 rounded-xl p-6 flex gap-7">
            <div className="max-w-[400px]">
              <img src="/host_anas.JPG" alt="anas" className="rounded-xl w-full h-full" />
              </div>
          <div className="self-center">
              <div className="mb-5">
                <h1>
                  My name is Hamma Abdurahman Anas, currently 22 years old but age is a variable. <br />
                  Studied at Numidia Institute of Technology and graduated with an AI Bachelor (hmdlh). <br />
                  I learnt numerous things, but I will let what follows showcase it to you. <br />
                  Hope you enjoy it!
                </h1>
              </div>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <h2 id="experience" className="text-2xl font-bold">Experience</h2>
          <div className="h-[400px] bg-white/10 rounded-xl p-4 flex gap-7">
            <div className="max-w-[400px]">
              <img src="/me_with_club.jpg" alt="anas" className="rounded-xl w-full" />
            </div>
            <div className="self-center">
              <div className="mb-5">
                <h2 className="font-bold">NCS Vice-President</h2>
                <h1>
                  I actively contributed to the management of club activities. <br />
                  I helped organize events such as hackathons, workshops, <br />
                  and networking sessions for students passionate about IT.
                </h1>
              </div>
              <div>
                <h2 className="font-bold">Internship at AI UNIVERSE</h2>
                <h1>
                  During my time at an AI startup, I gained hands-on experience <br />
                  working with Retrieval-Augmented Generation (RAG) systems and AI agents. <br />
                  I helped design pipelines that combined LLMs with external data to deliver <br />
                  more accurate and context-aware responses.
                </h1>
              </div>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <h2 id="projects" className="text-2xl font-bold mb-2">Projects</h2>
          <div className="h-[400px] bg-white/10 rounded-xl p-6 flex gap-7">
            <div className="max-w-[400px]">
              <img src="/me_at_intern.jpg" alt="anas" className="rounded-xl w-full h-full" />
            </div>
            <div className="self-center">
              <div className="mb-5">
                <h2 className="font-bold">End of study Project</h2>
                <h1>
                  For my final year project, I designed and developed a diet recommendation system powered by AI. 
                  It provided personalized nutrition plans based on user profiles, goals, and dietary restrictions, combining machine learning with health data for smart decision-making.
                </h1>
              </div>
              <div>
                <h2 className="font-bold">Freelance Project</h2>
                <h1>
                  As a freelance developer, I worked on an AI-based computer vision system that could identify and classify recyclable materials using image data.
                  The project focused on improving sorting efficiency and promoting sustainable recycling through automated detection.
                </h1>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="pt-10 text-center text-sm text-white/70">
            © 2025 Anas Hamma
          </footer>
        </div>
      </div>
    </div>
  );
}
