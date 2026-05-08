"use client";
import Image from "next/image";
import colorMix from "../public/colorMix.png";
// import tick from "../public/tick.png";
import tick from "../public/moduleIcon.png";

export default function ModuleSection() {
  const improvements = [
    {
      title: "Better execution continuity",
      desc: "Keep search initiatives moving without losing context between tools.",
    },
    {
      title: "Stronger content coordination",
      desc: "Tie SEO priorities more directly to content planning and production.",
    },
    {
      title: "Clearer ownership",
      desc: "Make it easier to see what needs to be done and who is driving it.",
    },
    {
      title: "More connected optimization",
      desc: "Keep SEO closer to the reporting and workflow decisions to improve performance.",
    },
  ];

  return (
    <div
      className="relative w-full text-[#0a0f1e]"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ───────── TOP SECTION ───────── */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* LEFT DIV: Heading */}
        {/* Added mobile centering and specific line breaks to match Figma */}
        <div className="flex-1 w-full flex justify-center lg:justify-end lg:pr-8">
          <div className="max-w-[520px] w-full text-center lg:text-left">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[32px] font-semibold leading-[1.3] lg:leading-[1.1] tracking-tight text-[#01091E]">
              This works better because
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span> it's part of{" "}
              <br className="block lg:hidden" />
              <span className="text-[#1ab87e]">one</span>{" "}
              <span className="text-[#0f72d7]">system</span>
            </h2>
          </div>
        </div>

        {/* CENTER DIVIDER (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div
            className="w-px h-[60px]"
            style={{
              background: "linear-gradient(to bottom, transparent, #1ab87e)",
            }}
          />
          <div className="my-2">
            <svg width="14" height="32" viewBox="0 0 14 32" fill="none">
              <rect
                x="0"
                y="10"
                width="2"
                height="12"
                rx="1"
                fill="#1ab87e"
                opacity="0.5"
              />
              <rect
                x="4"
                y="4"
                width="2"
                height="24"
                rx="1"
                fill="#1ab87e"
                opacity="0.8"
              />
              <rect
                x="8"
                y="8"
                width="2"
                height="16"
                rx="1"
                fill="#1ab87e"
                opacity="0.6"
              />
              <rect
                x="12"
                y="12"
                width="2"
                height="8"
                rx="1"
                fill="#1ab87e"
                opacity="0.4"
              />
            </svg>
          </div>
          <div
            className="w-px h-[60px]"
            style={{
              background: "linear-gradient(to bottom, #0f72d7, transparent)",
            }}
          />
        </div>

        {/* RIGHT DIV: Text */}
        {/* Centered on mobile, left-aligned on desktop */}
        <div className="flex-1 w-full lg:pl-8 flex justify-center lg:justify-start">
          <div className="max-w-[480px] w-full space-y-4 lg:space-y-6 text-center lg:text-left">
            <p className="text-[13px] text-[#4b5563] leading-relaxed">
              SEO becomes part of the campaign plan, content system, and
              optimization loop inside Amplitive.
            </p>
            <p className="text-[13px] text-[#4b5563] leading-relaxed">
              That connection helps teams execute search work with less
              fragmentation between strategy, production, and follow-through.
            </p>
          </div>
        </div>
      </div>

      {/* ───────── BOTTOM SECTION ───────── */}
      <div className="max-w-[1200px] mx-auto px-6 pb-16 lg:pb-24 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* LEFT DIV: Image Container */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
          <div className="rounded-[16px] overflow-hidden shadow-2xl relative w-full sm:max-w-[400px] lg:max-w-none">
            <Image
              src={colorMix}
              alt="UI Preview"
              // Adjusted height to act as a banner on mobile, retains auto height on desktop
              className="w-full h-[140px] sm:h-[180px] lg:h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center lg:hidden bg-black/10">
              <h3 className="text-white text-[20px] font-medium text-center px-4 drop-shadow-md">
                What the platform
                <br />
                improves day to day.
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT DIV: Cards Container */}
        <div className="w-full lg:w-[60%] lg:pl-8">
          {/* Desktop heading (Hidden on mobile because the text is overlaid on the image above) */}
          <h3 className="text-[32px] font-semibold mt-10 mb-5 text-[#01091E] hidden lg:block">
            What this module improves.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-18 gap-y-6 lg:gap-y-8 mt-6 lg:mt-0 w-full">
            {improvements.map((item, i) => (
              <div
                key={i}
                // REMOVED: min-w-[310px] (This was causing your horizontal mobile scrolling)
                // ADDED: w-full (Allows it to scale perfectly on all phones)
                className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border w-full min-h-[120px] border-black/[0.03] flex flex-col items-start hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6">
                  <Image src={tick} alt="Check" width={30} height={30} />
                </div>

                <h4 className="text-[13px] font-bold mb-3 text-[#0a0f1e]">
                  {item.title}
                </h4>
                <p className="text-[12px] text-[#6b7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
