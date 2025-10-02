import React from "react";


const Hero = () => {
  return (
    <section className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[90vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-10 rounded-3xl items-center justify-center px-6 pb-20 @[480px]:px-14 relative overflow-hidden"
          style={{
            backgroundImage:
              "url('/ye77i.jpg')", // fon uchun premium surat
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#040e4b]/95 via-[#0F0F31]/80 to-[#0065FE]/70 rounded-3xl"></div>

          {/* Big background text watermark */}
          {/* <h1 className="absolute inset-0 flex items-center justify-center text-white/5 text-[160px] md:text-[260px] font-extrabold tracking-widest z-0 select-none">
            YE77I
          </h1> */}

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 text-center z-10">
            {/* Brand title premium */}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0065FE] via-[#4fc3f7] to-[#7b61ff] text-5xl md:text-7xl font-extrabold tracking-wider leading-tight drop-shadow-lg">
              YE77I
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base md:text-xl max-w-2xl leading-relaxed">
              Innovating the Future of Technology with cutting-edge software
              solutions, full-stack development, and next-generation AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="h-12 px-8 rounded-xl bg-gradient-to-r from-[#0065FE] via-[#4fc3f7] to-[#7b61ff] text-white text-base font-semibold shadow-lg hover:opacity-90 transition-all">
                Explore Services
              </button>
              <button className="h-12 px-8 rounded-xl border border-white/30 text-white text-base font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
