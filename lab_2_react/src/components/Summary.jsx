function Summary() {
  return (
    <section className="p-6">
      {/* Заголовок у твоєму стилі: червоний текст, зелений маркер зліва */}
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-5 bg-[#f0fdf4] font-bold">
        Summary
      </h2>
      
      {/* Текстовий блок з легким фоном та рамкою */}
      <div className="bg-[#f0fdf4] p-4 rounded-lg border-2 border-dashed border-[#166534]/30">
        <p className="text-sm text-gray-800 leading-relaxed italic text-justify">
          Full stack developer with practical experience in creating web
          applications from idea to launch. I feel confident in both front-end
          and back-end development, and quickly navigate complex technical
          tasks. I work with a focus on code quality, user experience, and
          product stability.
        </p>
      </div>
    </section>
  );
}

export default Summary;