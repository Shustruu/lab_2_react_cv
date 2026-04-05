function TechSkills() {
  return (
    <section className="p-6 transition-colors duration-300">
      <h2 className="text-[1.2rem] text-[#b44747] dark:text-[#adff2f] uppercase border-l-5 border-[#166534] dark:border-[#adff2f] pl-2.5 mb-5 bg-[#f0fdf4] dark:bg-slate-800 font-bold transition-colors">
        Tech Skills
      </h2>

      <ul className="list-none p-0 space-y-2">

        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] p-2.5 rounded-md font-bold border border-[#166534] dark:border-[#adff2f]/50 text-sm shadow-[2px_2px_0px_#166534] dark:shadow-[2px_2px_0px_#adff2f] hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors duration-200">
          HTML5 / CSS3
        </li>

        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] p-2.5 rounded-md font-bold border border-[#166534] dark:border-[#adff2f]/50 text-sm shadow-[2px_2px_0px_#166534] dark:shadow-[2px_2px_0px_#adff2f] hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors duration-200">
          JavaScript / React / Next.js
        </li>

        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] p-2.5 rounded-md font-bold border border-[#166534] dark:border-[#adff2f]/50 text-sm shadow-[2px_2px_0px_#166534] dark:shadow-[2px_2px_0px_#adff2f] hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors duration-200">
          Git <span className="font-normal opacity-80 dark:text-slate-300">(branches, commits, merge)</span>
        </li>
      </ul>
    </section>
  );
}

export default TechSkills;