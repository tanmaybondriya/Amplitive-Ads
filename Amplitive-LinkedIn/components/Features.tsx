// Features.tsx  (or app/features/page.tsx — wherever this lives)
// Hero is now its own component. Remaining sections (tagline block + feature cards)
// will be split out in subsequent steps.

import HeroBackground from "@/components/Herobackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "./FeatureSection";
import MobileBackground from "./MobileBackground";
import Grid from "./Grid";

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
      <HeroBackground />
      <MobileBackground />
      <Grid />
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
    </div>
  );
}
