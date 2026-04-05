import React, { useState, useEffect } from 'react';

function Footer() {

  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
  
    const userAgent = navigator.userAgent;
    let browserName = "Unknown Browser";
    let osName = "Unknown OS";

    if (userAgent.match(/chrome|chromium|crios/i)) browserName = "Chrome";
    else if (userAgent.match(/firefox|fxios/i)) browserName = "Firefox";
    else if (userAgent.match(/safari/i)) browserName = "Safari";
    else if (userAgent.match(/opr\//i)) browserName = "Opera";
    else if (userAgent.match(/edg/i)) browserName = "Edge";

    if (userAgent.indexOf("Win") !== -1) osName = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) osName = "MacOS";
    else if (userAgent.indexOf("Linux") !== -1) osName = "Linux";
    else if (userAgent.indexOf("Android") !== -1) osName = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) osName = "iOS";

    const infoString = `OS: ${osName} | Browser: ${browserName}`;

    localStorage.setItem('systemInfo', infoString);

    setSysInfo(localStorage.getItem('systemInfo'));
  }, []); 

  return (
    <footer className="p-6 bg-[#166534] dark:bg-slate-950 text-[#f0fdf4] text-center border-t-5 border-[#b44747] dark:border-[#adff2f] transition-colors duration-300">
      <p className="font-bold tracking-wider mb-2">
        &copy; {new Date().getFullYear()} LEONTII MAZANYI. All rights reserved.
      </p>
 
      {sysInfo && (
        <div className="mt-4 p-2 border border-[#f0fdf4]/30 dark:border-[#adff2f]/30 rounded inline-block">
          <p className="text-xs text-[#f0fdf4]/80 dark:text-[#adff2f]/80 uppercase tracking-widest">
            Saved in localStorage:
          </p>
          <p className="text-sm font-mono mt-1 dark:text-slate-300">
            {sysInfo}
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;