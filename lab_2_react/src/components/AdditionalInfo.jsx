function AdditionalInfo() {
  return (
    <section className="p-6 transition-colors duration-300">
  
      <h2 className="text-[1.2rem] text-[#b44747] dark:text-[#adff2f] uppercase border-l-5 border-[#166534] dark:border-[#adff2f] pl-2.5 mb-5 bg-[#f0fdf4] dark:bg-slate-800 font-bold transition-colors">
        Additional Information
      </h2>

      <h3 className="text-[#166534] dark:text-[#adff2f] font-bold text-sm uppercase mb-3 tracking-wide transition-colors">
        Languages
      </h3>
      <ul className="list-none p-0 mb-6">
        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-slate-200 mb-2 p-2 rounded-md font-semibold border border-[#166534] dark:border-[#adff2f]/50 text-sm transition-colors">
          English - upper-intermediate
        </li>
        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-slate-200 mb-2 p-2 rounded-md font-semibold border border-[#166534] dark:border-[#adff2f]/50 text-sm transition-colors">
          Ukrainian - native
        </li>
        <li className="bg-[#dcfce7] dark:bg-slate-800 text-[#166534] dark:text-slate-200 mb-2 p-2 rounded-md font-semibold border border-[#166534] dark:border-[#adff2f]/50 text-sm transition-colors">
          Russian - native
        </li>
      </ul>

      <h3 className="text-[#166534] dark:text-[#adff2f] font-bold text-sm uppercase mb-3 tracking-wide transition-colors">
        Soft Skills
      </h3>
      <ul className="flex flex-wrap gap-2 list-none p-0">
        <li className="bg-[#f0fdf4] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] dark:border-[#adff2f]/50 hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors cursor-default">
          Problem-solving
        </li>
        <li className="bg-[#f0fdf4] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] dark:border-[#adff2f]/50 hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors cursor-default">
          Communication
        </li>
        <li className="bg-[#f0fdf4] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] dark:border-[#adff2f]/50 hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors cursor-default">
          Teamwork
        </li>
        <li className="bg-[#f0fdf4] dark:bg-slate-800 text-[#166534] dark:text-[#adff2f] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] dark:border-[#adff2f]/50 hover:bg-[#adff2f] dark:hover:bg-[#adff2f] dark:hover:text-slate-900 transition-colors cursor-default">
          Adaptability
        </li>
      </ul>
    </section>
  );
}

export default AdditionalInfo;