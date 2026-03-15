function AdditionalInfo() {
  return (
    <section className="p-6">
      {/* Головний заголовок секції - Червоний з зеленим маркером зліва */}
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-5 bg-[#f0fdf4] font-bold">
        Additional Information
      </h2>

      {/* Підзаголовок - Мови */}
      <h3 className="text-[#166534] font-bold text-sm uppercase mb-3 tracking-wide">
        Languages
      </h3>
      <ul className="list-none p-0 mb-6">
        <li className="bg-[#dcfce7] text-[#166534] mb-2 p-2 rounded-md font-semibold border border-[#166534] text-sm">
          English - upper-intermediate
        </li>
        <li className="bg-[#dcfce7] text-[#166534] mb-2 p-2 rounded-md font-semibold border border-[#166534] text-sm">
          Ukrainian - native
        </li>
        <li className="bg-[#dcfce7] text-[#166534] mb-2 p-2 rounded-md font-semibold border border-[#166534] text-sm">
          Russian - native
        </li>
      </ul>

      {/* Підзаголовок - Soft Skills */}
      <h3 className="text-[#166534] font-bold text-sm uppercase mb-3 tracking-wide">
        Soft Skills
      </h3>
      <ul className="flex flex-wrap gap-2 list-none p-0">
        <li className="bg-[#f0fdf4] text-[#166534] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] hover:bg-[#adff2f] transition-colors cursor-default">
          Problem-solving
        </li>
        <li className="bg-[#f0fdf4] text-[#166534] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] hover:bg-[#adff2f] transition-colors cursor-default">
          Communication
        </li>
        <li className="bg-[#f0fdf4] text-[#166534] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] hover:bg-[#adff2f] transition-colors cursor-default">
          Teamwork
        </li>
        <li className="bg-[#f0fdf4] text-[#166534] px-3 py-1 rounded-full text-xs font-bold border-2 border-[#166534] hover:bg-[#adff2f] transition-colors cursor-default">
          Adaptability
        </li>
      </ul>
    </section>
  );
}

export default AdditionalInfo;