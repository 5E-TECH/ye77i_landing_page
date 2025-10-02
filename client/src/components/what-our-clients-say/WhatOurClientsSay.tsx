import React from 'react';

const WhatOurClientsSay = () => {
  const testimonials = [
    {
      stars: 5,
      text: `"YE77I transformed our business with their innovative solutions. Their team is professional, responsive, and truly understands our needs."`,
      name: 'John Doe',
      role: 'CEO, Acme Inc.',
      initials: 'ACME',
    },
    {
      stars: 5,
      text: `"Working with YE77I has been a game-changer. Their expertise in AI and mobile development is unmatched."`,
      name: 'Jane Smith',
      role: 'CTO, Tech Solutions',
      initials: 'LOGO',
    },
    {
      stars: 4,
      text: `"The best development team we've ever worked with. They delivered a high-quality product on time and on budget."`,
      name: 'Sam Wilson',
      role: 'Head of Innovation, Innovate Corp',
      initials: 'INNO',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background-dark via-background-light to-white dark:from-background-dark dark:via-background-dark dark:to-black">
      <h2 className="text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 rounded-2xl border border-primary/30 bg-white dark:bg-slate-900/70 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 relative"
          >
            {/* Quote icon */}
            <span className="absolute top-4 left-6 text-primary text-5xl opacity-20 font-serif">
              “
            </span>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className={`w-5 h-5 ${
                    starIndex < t.stars
                      ? 'text-yellow-400'
                      : 'text-slate-300 dark:text-slate-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
                  1.371 1.24.588 1.81l-2.8 2.034a1 1 
                  0 00-.364 1.118l1.07 3.292c.3.921-.755 
                  1.688-1.54 1.118l-2.8-2.034a1 1 
                  0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 
                  0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed relative z-10">
              {t.text}
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold shadow-md">
                {t.initials}
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg">
                  {t.name}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(WhatOurClientsSay);
