function Header() {
  return (
  
    <header className="flex justify-between items-center p-10 bg-[#166534] dark:bg-slate-950 text-[#f0fdf4] border-b-5 border-[#b44747] dark:border-[#adff2f] text-left transition-colors duration-300">
      
      <div className="flex flex-col gap-2.5 text-[0.85rem] border-r-2 border-[rgba(173,255,47,0.3)] dark:border-[#adff2f]/30 pr-5 max-w-[250px]">
        <p className="dark:text-slate-300">Varash, Ukraine</p>
        <p className="dark:text-slate-300">+38(097) 205 39 80</p>
        <p className="lowercase dark:text-slate-300">mazleon777@gmail.com</p>
        <nav>
          <ul className="flex flex-wrap gap-2.5 list-none mt-2.5">
            <li>
              <a href="#" className="bg-[#b44747] dark:bg-slate-800 text-white dark:text-[#adff2f] px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] dark:hover:bg-[#adff2f] dark:hover:text-black hover:scale-110 border dark:border-[#adff2f]/50">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="bg-[#b44747] dark:bg-slate-800 text-white dark:text-[#adff2f] px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] dark:hover:bg-[#adff2f] dark:hover:text-black hover:scale-110 border dark:border-[#adff2f]/50">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="bg-[#b44747] dark:bg-slate-800 text-white dark:text-[#adff2f] px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold no-underline transition-all duration-300 hover:bg-[#adff2f] hover:text-[#166534] dark:hover:bg-[#adff2f] dark:hover:text-black hover:scale-110 border dark:border-[#adff2f]/50">
                Telegram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 text-right">
        <h1 className="text-[3rem] font-[900] leading-none uppercase mb-2.5 text-[#adff2f] tracking-tight drop-shadow-[0_2px_10px_rgba(173,255,47,0.2)]">
          LEONTII MAZANYI
        </h1>
        <p className="text-white dark:text-slate-300 font-bold uppercase tracking-widest">
          Full Stack Developer
        </p>
      </div>
    </header>
  );
}

export default Header;