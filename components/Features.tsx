// Features.tsx  (or app/features/page.tsx — wherever this lives)
// Hero is now its own component. Remaining sections (tagline block + feature cards)
// will be split out in subsequent steps.

import HeroBackground from "@/components/Herobackground";
import HeroSection from "@/components/HeroSection";

// ── Assets still needed by the inline sections below ──
import Image from "next/image";
import React from "react";
import content1 from "@/public/content1.png";
import content2 from "@/public/content2.png";
import content3 from "@/public/content3.png";
import content4 from "@/public/content4.png";
import desktop from "@/public/Desktop - 19.png";
import linkedIn from "@/public/linkedin.png";
import studio from "@/public/studio.png";
import automation from "@/public/automation.png";
import scrollBar from "@/public/bar.png";
import FeaturesSection from "./FeatureSection";
// import CampaignOrganizationCard from "./cards/Campaignorganizationcard";
export default function Features() {
  return (
    <div
      className="relative w-full min-h-screen bg-[#020a16] text-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* ── Shared background (glow + grid) ── */}
      <HeroBackground className=" md:-top-24 lg:top-0" />

      {/* ── Hero ── */}
      <HeroSection />

      {/* ══════════════════════════════════════════════
          SECTION 2 — TAGLINE BLOCK
          TODO: extract to components/TaglineSection.tsx
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 py-10 lg:py-16 px-5 lg:px-6 max-w-[1300px] mx-auto text-center lg:-mt-10">
        <h2 className="text-[22px] sm:text-[26px] lg:text-[38px] font-medium leading-[1.35] text-white mb-5">
          Paid campaigns become harder to manage when briefs, assets,{" "}
          <br className="hidden lg:block" />
          approvals, and follow-up are spread{" "}
          <span className="font-semibold bg-clip-text text-transparent bg-[linear-gradient(89.27deg,#5BEC71_-5.41%,#0F72D7_48.34%,#003F9D_107.27%)]">
            across separate tools.
          </span>
        </h2>
        <p className="text-[13px] lg:text-[15.5px] font-light text-white/60 leading-[1.8] max-w-[1300px] mx-auto">
          Ads do not fail because teams lack media buying access. They fail
          because the surrounding operation is disorganized. Amplitive keeps
          campaign planning, asset readiness, execution tasks, and downstream
          lead visibility more connected so paid work is easier to coordinate.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURE CARDS
          TODO: extract to components/FeatureCards.tsx
      ══════════════════════════════════════════════ */}
      <FeaturesSection />
    </div>
  );
}

{
  /* // ── Card sub-components (will move to their own file with FeatureCards) ───────

function CardGlow({ id }: { id: string }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 394 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40"
      >
        <g opacity="0.2" filter={`url(#glow_${id})`}>
          <path
            d="M667.947 373C667.947 516.042 551.989 632 408.947 632C265.906 632 149.947 516.042 149.947 373C149.947 229.958 265.906 114 408.947 114C551.989 114 667.947 229.958 667.947 373Z"
            fill={`url(#grad_${id})`}
          />
        </g>
        <defs>
          <filter
            id={`glow_${id}`}
            x="0"
            y="-35.9474"
            width="817.895"
            height="817.895"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="74.9737" result={`blur_${id}`} />
          </filter>
          <radialGradient
            id={`grad_${id}`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(409.194 363.193) rotate(90) scale(276.831 257.246)"
          >
            <stop stopColor="#5BEC71" />
            <stop offset="1" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function CardHeader({
  icon,
  color,
  title,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold">{title}</h3>
    </div>
  );
} */
}
