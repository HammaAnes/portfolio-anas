export default function Home() {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 bg-scroll" />
      <nav className="mx-3 flex justify-evenly">
      <button>Self-Introduction</button>
      <button>My Experince</button>
      <button>My Projects</button>
      </nav>
      <div className="flex justify-center">
      {/* Main content (scrollable) */}
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

        {/* EXPERIENCE SECTION */}
        
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="h-[400px] bg-white/10 rounded-xl p-4 flex gap-7">
          <div className="max-w-[300px]">
            <img src="/host_anas.jpg" alt="anas" className="rounded-xl w-full"/>
          </div>
          <div className="self-center">
            <div className="mb-5">
            <h2 className="font-bold">NCS Vice-President</h2>
            <h1>
              I actively contributed to the management and
              management of club activities. <br /> I contributed to the organization
              events such as hackathons, workshops,<br /> and networking sessions for students
              passionate about IT.  
            </h1>
            </div>
            <div>
            <h2 className="font-bold">Internship in AI UNIVERSE</h2>
            <h1>
              During my time at an AI startup, I gained hands-on experience working <br /> with advanced AI technologies, particularly Retrieval-Augmented Generation (RAG) systems <br /> and AI agents.
              I was involved in designing and optimizing pipelines that combined language <br /> models  with external data sources to deliver more accurate and context-aware responses. 
            </h1>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <div className="h-[400px] bg-white/10 rounded-xl p-6">
          
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
