import React from 'react';

const OurDevelopersTeam = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#0F0F31]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F0F31] dark:text-white mb-6 relative inline-block">
          Our Developers Team
          <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-[#0065FE] -translate-x-1/2 rounded-full"></span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-[#0F0F31]/80 dark:text-white/70 max-w-3xl mx-auto mb-12">
          Our team comprises highly skilled full-stack developers, mobile app
          developers, and AI specialists. Each member brings a wealth of
          experience and a passion for technology, ensuring we deliver
          innovative and effective solutions.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Full-Stack Developers',
              desc: 'Expertise in front-end and back-end development, creating seamless web applications.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7EPu-UOVCX_P61taEyL7mTH5vCFfFi2e6eKpNsjb1GxRwDAMeOMva-k3_-0oQxztqSeVrzUbq2UIIU2Z7gLvFDpcrQcaSOfX-Pw8WQdNbxKZrS3Km8L_jrbMJm5xh2UfbIbCDvooCGLIIxJcA0sI4n0_obM2RlF081a-gIRsyhIp-q48IETmAiCXg9tQaZjkF5NrZjh3VvR2IoG6jmSt1QhUjsVGhQyF1-4abGRgroC3aTSgU3VyzzWA_gcfFiCYaTA85JDirnk',
            },
            {
              title: 'Mobile App Developers',
              desc: 'Specialized in developing native and cross-platform mobile applications for iOS and Android.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdpjvWO2EU1rLB1UlNDRJqwWOX3ZoKVJoq49pGOoNvW41Dm59iB9YPH1v03jt919I_OTZ8CVqLxpntusA97fhxmWZE8EQtyTJm1FLXJaCRLsZP_wSG8usPTB4fEqJwizCEL4uONZd_mbXfUZxdGJphWWCLbPHPATvx3x9CTu3DqHObOVIai4nQPa-B1vCJvAnGJmVqORHobKfxUFU6y5QkkVLwo2JLUf--Zr4yVkOey1mp_XJv8XXeN3h9Kg6_i_dzajH-xePMJds',
            },
            {
              title: 'AI Specialists',
              desc: 'Focused on creating intelligent systems and solutions using the latest AI technologies.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHQeOky-IBefsJHgJD0KquXmLVqdWs2-AobU7rcry3NcmN3ICGyu1X2BRStF008_2bzAIhcu8usOUT3emPPRomX-0PtDY98NwXWVcSqu1NVhWT_1HFrGptM2GgHFJ_A1GPKulN3CRdayiVekWG0RCy9h6PRs5gf3q7B--PuuwZTk6-Q4bib-MJL-hF3M7pRiqZ4PApvfW2VALFKHOcpIyFo7vwcUQJ8PWpO-e2MdSc2zxWab5gWLuTjdov-YtsSrMI77fEv8S-iUM',
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1a1a3d] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div
                className="w-full aspect-square bg-center bg-cover transform hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${member.img})` }}
              ></div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-[#0F0F31] dark:text-white mb-2">
                  {member.title}
                </h3>
                <p className="text-sm text-[#0F0F31]/70 dark:text-white/70">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurDevelopersTeam);
