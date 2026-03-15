function TechSkills() {
  return (
    <section className="p-6">
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-5 bg-[#f0fdf4] font-bold">
        Tech Skills
      </h2>

      <ul className="list-none p-0 space-y-2">
        
        <li className="bg-[#dcfce7] text-[#166534] p-2.5 rounded-md font-bold border border-[#166534] text-sm shadow-[2px_2px_0px_#166534] hover:bg-[#adff2f] transition-colors duration-200">
          HTML5 / CSS3
        </li>
        
        <li className="bg-[#dcfce7] text-[#166534] p-2.5 rounded-md font-bold border border-[#166534] text-sm shadow-[2px_2px_0px_#166534] hover:bg-[#adff2f] transition-colors duration-200">
          JavaScript / React / Next.js
        </li>
        
        <li className="bg-[#dcfce7] text-[#166534] p-2.5 rounded-md font-bold border border-[#166534] text-sm shadow-[2px_2px_0px_#166534] hover:bg-[#adff2f] transition-colors duration-200">
          Git <span className="font-normal opacity-80">(branches, commits, merge)</span>
        </li>
      </ul>
    </section>
  );
}

export default TechSkills;