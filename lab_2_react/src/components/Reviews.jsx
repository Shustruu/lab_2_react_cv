import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/13/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-[1.2rem] text-[#b44747] uppercase border-l-5 border-[#166534] pl-2.5 mb-5 bg-[#f0fdf4] font-bold dark:bg-slate-700 dark:text-[#adff2f]">
        Employer Reviews
      </h2>
      <div className="space-y-4">
        {comments.map(item => (
          <div key={item.id} className="p-4 border-2 border-slate-100 rounded-lg dark:bg-slate-800 dark:border-slate-700">
            <strong className="text-[#b44747] text-xs block mb-1 dark:text-[#adff2f]">{item.email.toLowerCase()}</strong>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">"{item.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;