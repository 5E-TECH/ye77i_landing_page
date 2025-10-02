import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 border-b border-[#1a1a3d] 
      bg-gradient-to-r from-[#040e4b] via-[#0F0F31] to-[#043072] shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3 text-white">
        <div className="size-7 text-[#0065FE]">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-wide">YE77I</h2>
      </div>

      {/* Navbar links */}
      <div className="hidden md:flex flex-1 justify-end gap-10">
        <nav className="flex items-center gap-8">
          {["About Us", "Services", "Team", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative text-white/80 text-sm font-medium transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0065FE] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="flex items-center justify-center h-10 px-5 rounded-lg bg-[#0065FE] text-white text-sm font-semibold shadow-lg shadow-[#0065FE]/30 hover:bg-[#0056d6] transition-all">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
