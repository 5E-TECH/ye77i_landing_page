import AboutUs from '@/components/about-us/AboutUs';
import Footer from '@/components/footer/Footer';
import FrequentlyAskedQuestions from '@/components/frequently-asked-questions/FrequentlyAskedQuestions';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import OurDevelopersTeam from '@/components/our-developers-team/OurDevelopersTeam';
import ReadytoTransformYourBusiness from '@/components/ready-to-transform-your-business/ReadytoTransformYourBusiness';
import WhatOurClientsSay from '@/components/what-our-clients-say/WhatOurClientsSay';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';
import React from 'react';

const Page = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden 
      bg-gradient-to-br from-[#6C63FF] to-[#1E1E2F] 
      dark:from-[#1E1E2F] dark:via-[#6C63FF]"
    >
      {/* Global Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-11">
        <h1
          className="text-[200px] md:text-[260px] font-extrabold tracking-widest select-none 
               bg-gradient-to-r from-[#0065FE] via-[#4C8DFF] to-[#00D4FF] 
               bg-clip-text text-transparent 
               opacity-10 drop-shadow-[0_0_25px_rgba(0,101,254,0.4)]"
        >
          YE77I
        </h1>
      </div>

      {/* Page Content */}
      <div className="relative z-10 layout-container flex h-full grow flex-col bg-white/80 dark:bg-black/70 backdrop-blur-sm">
        <Header />
        <main className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1440px] flex-1">
            <Hero />
            <AboutUs />
            <OurDevelopersTeam />
            <WhatOurClientsSay />
            <WhyChooseUs />
            <FrequentlyAskedQuestions />
            <ReadytoTransformYourBusiness />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Page);
