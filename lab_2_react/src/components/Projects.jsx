function Projects() {
  return (
    <section className="p-6 bg-white dark:bg-slate-900 transition-colors duration-300">

      <h2 className="text-[1.2rem] text-[#b44747] dark:text-[#adff2f] uppercase border-l-5 border-[#166534] dark:border-[#adff2f] pl-2.5 mb-8 bg-[#f0fdf4] dark:bg-slate-800 font-bold transition-colors">
        Projects
      </h2>

      <div className="space-y-8">

        <article className="group p-5 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-[#b44747] dark:hover:border-[#adff2f] hover:shadow-lg dark:bg-slate-800/50">
          <h3 className="text-xl font-bold text-[#166534] dark:text-[#adff2f] mb-2 group-hover:text-[#b44747] dark:group-hover:text-[#adff2f] transition-colors">
            Developer Portfolio Website
          </h3>
          <p className="text-sm mb-2 dark:text-slate-300">
            <strong className="text-[#b44747] dark:text-[#ff6b6b]">Tech stack:</strong> HTML, CSS, JavaScript, third-party libraries
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            A team project - a portfolio website for a web developer with a demonstration of works.
          </p>
          <p className="text-sm mb-4 dark:text-slate-300">
            <strong className="text-[#166534] dark:text-[#adff2f]">Role:</strong> Developer - responsible for the header (structure, styling, adaptability).
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                GitHub
              </a>
            </li>
          </ul>
        </article>

        <article className="group p-5 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-[#b44747] dark:hover:border-[#adff2f] hover:shadow-lg dark:bg-slate-800/50">
          <h3 className="text-xl font-bold text-[#166534] dark:text-[#adff2f] mb-2 group-hover:text-[#b44747] dark:group-hover:text-[#adff2f] transition-colors">
            Product Reviews Page
          </h3>
          <p className="text-sm mb-2 dark:text-slate-300">
            <strong className="text-[#b44747] dark:text-[#ff6b6b]">Tech stack:</strong> HTML, CSS
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            A team project - a page with customer reviews about the product, made in an easy style.
          </p>
          <p className="text-sm mb-4 dark:text-slate-300">
            <strong className="text-[#166534] dark:text-[#adff2f]">Role:</strong> Developer - implemented the reviews section (markup, styling).
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                GitHub
              </a>
            </li>
          </ul>
        </article>

        <article className="group p-5 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-[#b44747] dark:hover:border-[#adff2f] hover:shadow-lg dark:bg-slate-800/50">
          <h3 className="text-xl font-bold text-[#166534] dark:text-[#adff2f] mb-2 group-hover:text-[#b44747] dark:group-hover:text-[#adff2f] transition-colors">
            Notes Website
          </h3>
          <p className="text-sm mb-2 dark:text-slate-300">
            <strong className="text-[#b44747] dark:text-[#ff6b6b]">Tech stack:</strong> Next.js
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            An individual test project — a simple note-taking web app with user authentication.
          </p>
          <p className="text-sm mb-4 dark:text-slate-300">
            <strong className="text-[#166534] dark:text-[#adff2f]">Role:</strong> Full Stack Developer — implemented logic, routing, and core functionality.
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] dark:text-[#4facfe] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                GitHub
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Projects;