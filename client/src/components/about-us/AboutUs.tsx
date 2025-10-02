import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-[#0F0F31]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0F31] dark:text-white mb-6 relative inline-block">
          About Us
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#0065FE] -translate-x-1/2 rounded-full"></span>
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-[#0F0F31]/80 dark:text-white/70">
          At <span className="font-semibold text-[#0065FE]">YE77I</span>, we are
          a hub of innovation and reliable IT solutions. Our team of experienced
          professionals is committed to delivering high-quality results and
          exceeding client expectations. We combine technical expertise with a
          client-focused approach to ensure your success.
        </p>
      </div>
    </section>
  );
};

export default React.memo(AboutUs);
