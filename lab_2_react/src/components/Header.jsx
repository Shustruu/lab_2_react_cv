function Header() {
  return (
    <header className="flex justify-between items-center p-10 bg-[#166534] text-[#f0fdf4] border-b-5 border-[#b44747] text-left">
      {/* Ліва колонка: Контакти та Навігація */}
      <div className="flex flex-col gap-2.5 text-[0.85rem] border-r-2 border-[rgba(173,255,47,0.3)] pr-5 max-w-[250px]">
        <p>Varash, Ukraine</p>
        <p>+38(097) 205 39 80</p>
        <p className="lowercase">mazleon777@gmail.com</p>
        <nav>
          <ul className="flex flex-wrap gap-2.5 list-none mt-2.5">
            <li>
              <a href="#" className="bg-[#b44747] color-white px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] hover:scale-110">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="bg-[#b44747] color-white px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] hover:scale-110">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="bg-[#b44747] color-white px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] hover:scale-110">
                Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Права колонка: Ім'я та Посада */}
      <div className="flex-1 text-right">
        <h1 className="text-[3rem] font-[900] leading-none uppercase mb-2.5 text-[#adff2f] tracking-tight">
          LEONTII MAZANYI
        </h1>
        <p className="text-white font-bold uppercase tracking-widest">
          Full Stack Developer
        </p>
      </div>
    </header>
  );
}

export default Header;