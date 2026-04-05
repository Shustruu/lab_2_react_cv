import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative dark:bg-slate-800">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500">&times;</button>
        <h2 className="text-2xl font-bold text-[#166534] mb-6 dark:text-[#adff2f]">Contact Me</h2>
        <form action="https://formspree.io/f/mykbbrwp" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Name" required className="w-full p-3 border-2 border-slate-200 rounded-lg outline-none dark:bg-slate-700 dark:text-white" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border-2 border-slate-200 rounded-lg outline-none dark:bg-slate-700 dark:text-white" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border-2 border-slate-200 rounded-lg outline-none dark:bg-slate-700 dark:text-white" />
          <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 border-2 border-slate-200 rounded-lg outline-none dark:bg-slate-700 dark:text-white"></textarea>
          <button type="submit" className="w-full bg-[#166534] text-white font-bold py-3 rounded-lg hover:bg-[#b44747] transition-colors">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;