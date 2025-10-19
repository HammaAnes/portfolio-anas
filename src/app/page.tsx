export default function Home() {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 bg-scroll min-h-screen" />

      {/* Navigation */}
      <nav className="mx-3 flex flex-col sm:flex-row justify-center gap-4 py-4 items-center text-center">
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

      {/* Main content */}
      <div className="flex justify-center">
        <div className="px-4 sm:px-8 py-10 flex flex-col gap-y-16 w-full max-w-screen-xl">
          
          {/* HERO SECTION */}
          <div className="flex flex-col lg:flex-row justify-evenly gap-8 lg:gap-x-20 items-center">
            <div className="max-w-[300px]">
              <img src="/me.jpg" alt="anas" className="rounded-xl w-full" />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl">
                Welcome to <span className="text-red-200">Anas</span>
              </h1>
              <h1 className="font-bold text-2xl sm:text-3xl">
                <span className="text-green-200">Hamma</span>'s Portfolio
              </h1>
            </div>
          </div>

          {/* INTRODUCTION SECTION */}
          <h2 id="introduction" className="text-2xl font-bold mb-2">Self-Introduction</h2>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:max-w-[400px]">
              <img src="/host_anas.JPG" alt="anas" className="rounded-xl w-full h-auto" />
            </div>
            <div className="text-center md:text-left">
              <p>
                My name is Hamma Abdurahman Anas, currently 22 years old but age is a variable. <br />
                Studied at Numidia Institute of Technology and graduated with an AI Bachelor (hmdlh). <br />
                I learnt numerous things, but I will let what follows showcase it to you. <br />
                Hope you enjoy it!
              </p>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <h2 id="experience" className="text-2xl font-bold">Experience</h2>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:max-w-[400px]">
              <img src="/me_with_club.jpg" alt="anas" className="rounded-xl w-full" />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-4">
                <h3 className="font-bold">NCS Vice-President</h3>
                <p>
                  I actively contributed to the management of club activities. <br />
                  I helped organize events such as hackathons, workshops, <br />
                  and networking sessions for students passionate about IT.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Internship at AI UNIVERSE</h3>
                <p>
                  I worked with Retrieval-Augmented Generation (RAG) systems and AI agents. <br />
                  I helped design pipelines that combined LLMs with external data <br />
                  to deliver more accurate and context-aware responses.
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTS SECTION */}
          <h2 id="projects" className="text-2xl font-bold mb-2">Projects</h2>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:max-w-[400px]">
              <img src="/me_at_intern.jpg" alt="anas" className="rounded-xl w-full h-auto" />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-4">
                <h3 className="font-bold">End of Study Project</h3>
                <p>
                  I developed a diet recommendation system powered by AI, providing personalized nutrition plans <br />
                  based on user profiles, goals, and restrictions — combining ML with health data.
                </p>
              </div>
              <div>
                <h3 className="font-bold">Freelance Project</h3>
                <p>
                  I built a computer vision system to classify recyclable materials from images. <br />
                  The goal was to support automated waste sorting and promote sustainability.
                </p>
              </div>
            </div>
          </div>

        {/* AI AGENTS & CHATBOTS SECTION */}
        <h2 id="ai-projects" className="text-2xl font-bold mb-2">AI Agents & Chatbots</h2>
        <div className="bg-white/10 rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:max-w-[500px]">
            {/* Chatbot demo video */}
            <video 
              controls 
              poster="/chatbot_2.avif" 
              className="rounded-xl w-full h-auto shadow-lg"
            >
              <source src="/simple_chatbot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold">Personal AI Chatbot</h3>
            <p>
              I built a personalized chatbot using LLMs (Large Language Models) capable of answering 
              context-aware questions and performing reasoning tasks. 
              The system integrates a local LLM, and custom instructions (in this case english answers only)
              for dynamic and adaptive interactions.
            </p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:max-w-[500px]">
            {/* Chatbot demo video */}
            <video 
              controls 
              poster="/chatbot_1.avif" 
              className="rounded-xl w-full h-auto shadow-lg"
            >
              <source src="/Brainy_chatbot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold">AI Chatbot with RAG</h3>
            <p>
              I built a specialized chatbot designed to answer questions exclusively about a platform called BrainyWriter. 
              The system leverages Retrieval-Augmented Generation (RAG) to provide accurate, 
              up-to-date responses by retrieving relevant information from a vector database (VDB) containing all the platform’s documentation and data.
            </p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:max-w-[500px]">
            {/* Chatbot demo video */}
            <video 
              controls 
              poster="/agent.webp" 
              className="rounded-xl w-full h-auto shadow-lg"
            >
              <source src="/AI_Univ_agent.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold">AI Agents Pipeline</h3>
            <p>
              built an AI-driven pipeline composed of multiple agents that process educational content end-to-end. 
              The system takes a PDF book as input, automatically rephrases and summarizes its content, then converts it into a structured teaching script ready for classroom use. 
              Additionally, it generates quizzes for each chapter, enabling teachers to assess student understanding efficiently.
            </p>
          </div>
        </div>

        {/* MOBILE APP SECTION */}
        <h2 id="mobile-app" className="text-2xl font-bold mb-2 mt-12">Mobile Application</h2>
        <div className="bg-white/10 rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:max-w-[500px]">
            <img src="/app_screenshot1.jpg" alt="mobile app 1" className="rounded-xl shadow-lg" />
            <img src="/app_screenshot2.jpg" alt="mobile app 2" className="rounded-xl shadow-lg" />
            <img src="/app_screenshot3.jpg" alt="mobile app 3" className="rounded-xl shadow-lg" />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold">Diet Recommendation App</h3>
            <p>
              A Flutter-based mobile app connected to a Django backend. 
              It uses AI models to provide personalized diet plans 
              based on user profiles, goals, and health metrics.
              <br />
              Designed with a clean UI and efficient backend integration.
            </p>
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
