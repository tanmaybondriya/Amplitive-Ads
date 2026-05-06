// components/HeroBackground.tsx
// Shared full-page background: radial glow SVG + subtle dot grid.
// Render this once at the top of your page wrapper — it sits behind everything.

export default function HeroBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <>
      {/* ── Radial glow ── */}
      <div
        className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center overflow-hidden ${className}`}
      >
        {" "}
        <svg
          width="1728"
          height="1205"
          viewBox="0 0 1728 1205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1728px] max-w-none opacity-80 sticky top-0"
        >
          <g
            opacity="0.6"
            filter="url(#filter0_f_1_27129)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              d="M1318.28 -553.896C1591.62 -273.424 1585.84 175.53 1305.36 448.872C1024.89 722.213 575.937 716.432 302.596 435.96C29.2549 155.488 35.0357 -293.467 315.508 -566.808C595.98 -840.15 1044.94 -834.369 1318.28 -553.896Z"
              fill="url(#paint0_radial_1_27129)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_27129"
              x="-503.518"
              y="-1372.92"
              width="2627.91"
              height="2627.91"
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
              <feGaussianBlur
                stdDeviation="302.415"
                result="effect1_foregroundBlur_1_27129"
              />
            </filter>
            <radialGradient
              id="paint0_radial_1_27129"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(792.179 -78.6694) rotate(45.7377) scale(757.944 704.321)"
            >
              <stop offset="0.303662" stopColor="#5BEC71" />
              <stop offset="0.870122" stopColor="#0F72D7" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />
    </>
  );
}
