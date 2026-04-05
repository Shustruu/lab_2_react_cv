import React, { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({ os: '', browser: '', screen: '' });

  useEffect(() => {
    const data = {
      os: navigator.platform,
      browser: navigator.userAgent,
      screen: `${window.innerWidth}x${window.innerHeight}`
    };
    localStorage.setItem('userSystemInfo', JSON.stringify(data));
    setInfo(data);
  }, []);

  return (
    <footer id="main-footer" className="p-4 text-center text-[0.75rem] text-gray-500 border-t border-slate-200 bg-[#f8fafc] dark:bg-slate-800 dark:border-slate-700">
      <p>OS: {info.os} | Browser: {info.browser} | Res: {info.screen}</p>
    </footer>
  );
}

export default Footer;