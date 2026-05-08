"use client";

import Image from "next/image";
import amplitive from "../public/amplitiveFooter.png";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-white text-[#0a0f1e]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #1ab87e 0%, #0f72d7 60%, #1ab87e 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60%",
          right: "-5%",
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(26,184,126,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── TOP SECTION ── */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-6 pt-10 pb-6 text-center sm:text-left">

          {/* Logo */}
          <div className="relative h-[28px] w-[140px]">
            <Image
              src={amplitive}
              alt="Amplitive"
              fill
              className="object-contain object-center sm:object-left"
            />
          </div>

          {/* Tagline */}
          <p className="text-[13px] text-[#3a4060] font-medium leading-snug max-w-[260px]">
            Designed to bring your entire
            <br />marketing into motion
          </p>
        </div>

        {/* ── NAV LINKS ── */}
        <div className="pb-10 border-b border-black/[0.07]">

          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 gap-y-4 text-center sm:hidden">
            {["Product", "Prices", "Solutions", "Resources"].map((link) => (
              <a
                key={link}
                href={"/" + link.toLowerCase()}
                className="text-[13px] text-[#3a4060] hover:text-[#1ab87e] font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop: row */}
          <div className="hidden sm:flex items-center gap-8">
            {["Product", "Solutions", "Prices", "Resources"].map((link) => (
              <a
                key={link}
                href={"/" + link.toLowerCase()}
                className="text-[13px] text-[#3a4060] hover:text-[#1ab87e] font-medium"
              >
                {link}
              </a>
            ))}
          </div>

        </div>

        {/* ── BOTTOM ── */}
        <div className="flex flex-col items-center sm:flex-row  gap-20 py-6 text-center sm:text-left">

          <p className="text-[11.5px] text-[#9ca3af]">
            ©2026 Amplitive. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11.5px] text-[#9ca3af] hover:text-[#1ab87e]"
              >
                {item}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}