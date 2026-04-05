function Education() {
  return (
    <section className="p-6 transition-colors duration-300">

      <h2 className="text-[1.2rem] text-[#b44747] dark:text-[#adff2f] uppercase border-l-5 border-[#166534] dark:border-[#adff2f] pl-2.5 mb-5 bg-[#f0fdf4] dark:bg-slate-800 font-bold transition-colors">
        Education
      </h2>

      <ul className="list-none p-0 space-y-4">

        <li className="bg-white dark:bg-slate-800 border-2 border-[#166534] dark:border-slate-700 rounded-lg p-3 shadow-[4px_4px_0px_#166534] dark:shadow-[4px_4px_0px_#adff2f] hover:shadow-[4px_4px_0px_#b44747] transition-all duration-300">
          <strong className="text-[#166534] dark:text-[#adff2f] text-sm block mb-1 uppercase tracking-tight">
            National University “Lviv Polytechnic”
          </strong>
          <p className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed">
            Bachelor's Degree / Cybersecurity <br />
            <span className="text-[#b44747] dark:text-[#ff6b6b] font-semibold">(September 2023 – June 2027)</span>
          </p>
        </li>

        <li className="bg-white dark:bg-slate-800 border-2 border-[#166534] dark:border-slate-700 rounded-lg p-3 shadow-[4px_4px_0px_#166534] dark:shadow-[4px_4px_0px_#adff2f] hover:shadow-[4px_4px_0px_#b44747] transition-all duration-300">
          <strong className="text-[#166534] dark:text-[#adff2f] text-sm block mb-1 uppercase tracking-tight">
            Training Center "Grand"
          </strong>
          <p className="text-xs text-gray-700 dark:text-slate-300 leading-relaxed">
            Certificate / Computer Literacy <br />
            <span className="text-[#b44747] dark:text-[#ff6b6b] font-semibold">(October 2017 – October 2018)</span>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Education;