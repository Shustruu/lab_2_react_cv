import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import AdditionalInfo from './components/AdditionalInfo';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 7 || hour >= 21) {
      setTheme('dark');
    }
  }, []);
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (

    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 p-4 md:p-10">
        
    
        <button 
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-[#adff2f] text-[#166534] px-4 py-2 rounded-full font-bold shadow-lg hover:scale-110 transition-all"
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>

        <div className="max-w-[950px] mx-auto border-3 border-[#166534] dark:border-[#adff2f] rounded-xl overflow-hidden shadow-xl">
          <Header />
          <main className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
            <aside className="bg-slate-50 dark:bg-slate-900 border-r dark:border-slate-800">
              <TechSkills />
              <Education />
              <AdditionalInfo />
            </aside>
            <div className="bg-white dark:bg-slate-900">
              <Summary />
              <Projects />
              <Reviews />
            </div>
          </main>
          <Footer />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;