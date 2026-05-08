"use client";

import { useState } from "react";
import Image from "next/image";
import amplitive from "../public/amplitive.png";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper functions remain the same
  function closeMenu() { setMenuOpen(false); }
  function toggleMenu() { setMenuOpen(!menuOpen); }

  return (
    <nav className="w-full border-b border-white/10 text-white 
      /* Updated Background: Matches the gradient in image_cce0c7.png */
      bg-gradient-to-r from-[#01080B] via-[#062429] to-[#01080B]">
      
      <div className="flex items-center justify-between h-[72px] px-6 md:px-16 max-w-[1728px] mx-auto">

        {/* Logo */}
        <div className="relative h-[28px] w-[140px] flex-shrink-0">
          <Image
            src={amplitive}
            alt="Amplitive"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="/platform" className="text-[14px] text-white/80 hover:text-white transition-colors">Platform</a>
          <a href="/solutions" className="text-[14px] text-white/80 hover:text-white transition-colors">Solutions</a>
          <a href="/prices" className="text-[14px] text-white/80 hover:text-white transition-colors">Prices</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[14px] text-white/80 hover:text-white transition-colors px-3 py-1.5">
            Login
          </button>
          <button className="text-[14px] font-medium bg-white text-black rounded-md w-[110px] h-[38px] hover:bg-white/90 transition-colors">
            Get Plan
          </button>
        </div>

        {/* Mobile Hamburger Logic */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 z-50"
          onClick={toggleMenu}
        >
          <span className={"block w-6 h-0.5 bg-white rounded-full transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-white rounded-full transition-all duration-300 " + (menuOpen ? "opacity-0 scale-x-0" : "")} />
          <span className={"block w-6 h-0.5 bg-white rounded-full transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={"md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 " + (menuOpen ? "max-h-72 opacity-100 bg-[#01080B]" : "max-h-0 opacity-0")}>
        <div className="flex flex-col px-6 py-5 gap-4">
          {/* ... existing links ... */}
        </div>
      </div>
    </nav>
  );
}