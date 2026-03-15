function Projects() {
  return (
    <section className="p-6 bg-white">
     
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-8 bg-[#f0fdf4] font-bold">
        Projects
      </h2>

      <div className="space-y-8">
       
        <article className="group p-5 border-2 border-slate-200 rounded-xl transition-all duration-300 hover:border-[#b44747] hover:shadow-lg">
          <h3 className="text-xl font-bold text-[#166534] mb-2 group-hover:text-[#b44747] transition-colors">
            Developer Portfolio Website
          </h3>
          <p className="text-sm mb-2">
            <strong className="text-[#b44747]">Tech stack:</strong> HTML, CSS, JavaScript, third-party libraries
          </p>
          <p className="text-gray-600 text-sm mb-3">
            A team project - a portfolio website for a web developer with a demonstration of works.
          </p>
          <p className="text-sm mb-4">
            <strong className="text-[#166534]">Role:</strong> Developer - responsible for the header (structure, styling, adaptability).
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                GitHub
              </a>
            </li>
          </ul>
        </article>

        <article className="group p-5 border-2 border-slate-200 rounded-xl transition-all duration-300 hover:border-[#b44747] hover:shadow-lg">
          <h3 className="text-xl font-bold text-[#166534] mb-2 group-hover:text-[#b44747] transition-colors">
            Product Reviews Page
          </h3>
          <p className="text-sm mb-2">
            <strong className="text-[#b44747]">Tech stack:</strong> HTML, CSS
          </p>
          <p className="text-gray-600 text-sm mb-3">
            A team project - a page with customer reviews about the product, made in an easy style.
          </p>
          <p className="text-sm mb-4">
            <strong className="text-[#166534]">Role:</strong> Developer - implemented the reviews section (markup, styling).
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                GitHub
              </a>
            </li>
          </ul>
        </article>

 
        <article className="group p-5 border-2 border-slate-200 rounded-xl transition-all duration-300 hover:border-[#b44747] hover:shadow-lg">
          <h3 className="text-xl font-bold text-[#166534] mb-2 group-hover:text-[#b44747] transition-colors">
            Notes Website
          </h3>
          <p className="text-sm mb-2">
            <strong className="text-[#b44747]">Tech stack:</strong> Next.js
          </p>
          <p className="text-gray-600 text-sm mb-3">
            An individual test project — a simple note-taking web app with user authentication.
          </p>
          <p className="text-sm mb-4">
            <strong className="text-[#166534]">Role:</strong> Full Stack Developer — implemented logic, routing, and core functionality.
          </p>
          <ul className="flex gap-4 list-none p-0">
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
                Live Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold text-[#2b7cff] hover:text-[#ff4c4c] underline decoration-2 underline-offset-4">
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