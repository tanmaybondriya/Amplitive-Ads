"use client";

import Image from "next/image";
import studioImage from "../public/studioColor.png";

export default function StudioSection() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
      `}</style>

      {/* ── 1. RAW BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={studioImage}
          alt="Studio Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── 2. GEOMETRIC SVG OVERLAY ── */}
      <div className="absolute right-[-15%] top-[8%] z-[1] pointer-events-none opacity-40 select-none mix-blend-overlay">
        <svg
          width="650"
          height="450"
          viewBox="0 0 828 938"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60vw] h-auto lg:w-[828px]"
        >
          <path
            d="M10.1752 571.093L510.957 13.4553C535.627 -14.0066 581.159 3.37623 581.159 40.2599V334.526L817.386 572.334C824.193 579.2 828 588.476 828 598.117V884.86C828 920.648 784.591 938.469 759.336 913.052L591.847 744.41C585.039 737.544 581.232 728.268 581.232 718.628V334.526L70.2018 903.484C45.6055 930.946 0 913.563 0 876.68V597.678C0 587.891 3.58695 578.47 10.1752 571.166V571.093Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* ── 3. DIAGONAL GRID OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "skewY(-5deg) scale(1.2)",
        }}
      />

      {/* ── 4. CONTENT ── */}
      {/* Mobile viewport height adjustment for better centering */}
      <div className="relative z-10 flex items-center min-h-[90vh] md:min-h-[480px] px-8 md:px-24 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="max-w-[550px] w-full">
          {/* Heading: Hides the hard line break on mobile so it wraps naturally like Figma. 
              (Also fixed your "text-bold" typo to "font-bold"!) */}
          <h2 className="text-[27px] md:text-[40px] text-center md:text-left font-medium tracking-tight leading-[1.1] md:leading-[1.05] text-white mb-6 md:mb-8">
            See Content Studio
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>inside Amplitive.
          </h2>

          {/* Subtext: Adjusted slightly for mobile readability */}
          <p className="text-[12px] text-center md:text-left items-center md:text-[12px] font-medium text-white/60 leading-relaxed mb-10 md:mb-12 max-w-[280px] md:max-w-[480px]">
            Book a walkthrough to see how content studio fits into a more
            connected marketing operation.
          </p>

          {/* CTAs: Stacked as a column on mobile, row on desktop */}
          <div className="flex flex-col  md:flex-row items-start md:items-center gap-4 md:gap-5">
            {/* Added set widths for mobile buttons so they perfectly match the width in Figma */}
            <button className="w-[240px] md:w-auto px-8 py-3.5 md:py-3 rounded-[12px] md:rounded-lg border border-white/30 text-[15px] md:text-[14px] font-semibold text-white bg-transparent hover:bg-white/10 transition-all text-center">
              View Pricing
            </button>
            <button className="w-[240px] md:w-auto flex items-center justify-center gap-3 px-10 py-3.5 md:py-3 rounded-[12px] md:rounded-lg text-[15px] md:text-[14px] font-bold text-[#040d1e] bg-white hover:bg-gray-100 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
              Book Demo
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
