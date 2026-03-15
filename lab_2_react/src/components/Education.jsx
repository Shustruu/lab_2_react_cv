function Education() {
  return (
    <section className="p-6">
      {/* Заголовок у твоєму стилі: червоний текст, зелений маркер зліва */}
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-5 bg-[#f0fdf4] font-bold">
        Education
      </h2>

      <ul className="list-none p-0 space-y-4">
        {/* Картка 1: Львівська Політехніка */}
        <li className="bg-white border-2 border-[#166534] rounded-lg p-3 shadow-[4px_4px_0px_#166534] hover:shadow-[4px_4px_0px_#b44747] transition-all duration-300">
          <strong className="text-[#166534] text-sm block mb-1 uppercase tracking-tight">
            National University “Lviv Polytechnic”
          </strong>
          <p className="text-xs text-gray-700 leading-relaxed">
            Bachelor's Degree / Cybersecurity <br />
            <span className="text-[#b44747] font-semibold">(September 2023 – June 2027)</span>
          </p>
        </li>

        {/* Картка 2: Навчальний центр "Гранд" */}
        <li className="bg-white border-2 border-[#166534] rounded-lg p-3 shadow-[4px_4px_0px_#166534] hover:shadow-[4px_4px_0px_#b44747] transition-all duration-300">
          <strong className="text-[#166534] text-sm block mb-1 uppercase tracking-tight">
            Training Center "Grand"
          </strong>
          <p className="text-xs text-gray-700 leading-relaxed">
            Certificate / Computer Literacy <br />
            <span className="text-[#b44747] font-semibold">(October 2017 – October 2018)</span>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Education;