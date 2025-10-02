import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Individual Approach",
      desc: "We tailor our solutions to meet your specific needs and goals, ensuring a personalized experience.",
      icon: (
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
      ),
    },
    {
      title: "Fast and High-Quality Results",
      desc: "Our efficient processes and skilled team deliver high-quality results within agreed timelines.",
      icon: (
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
      ),
    },
    {
      title: "Innovative Solutions",
      desc: "We leverage the latest technologies and creative thinking to develop innovative solutions.",
      icon: (
        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Z" />
      ),
    },
    {
      title: "Continuous Support",
      desc: "We provide ongoing support and maintenance to ensure your systems run smoothly.",
      icon: (
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Z" />
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b via-background-light to-gray-50 dark:from-background-dark dark:via-[#0F0F31] dark:to-black">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white relative inline-block">
          Why Choose Us
          <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-primary -translate-x-1/2 rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-white dark:bg-slate-900/70 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-primary bg-primary/10 p-3 rounded-xl shadow-md">
              <svg
                fill="currentColor"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                {f.icon}
              </svg>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUs);
