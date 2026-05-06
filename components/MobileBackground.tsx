export default function MobileBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-[1076px] pointer-events-none z-0 flex lg:hidden justify-center overflow-hidden">
      {/* SVG */}
      <svg
        width="430"
        height="776"
        viewBox="0 0 430 1076"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-1/2 -translate-x-1/2"
      >
        <g
          opacity="0.6"
          filter="url(#filter0_f_123_75770)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M722.608 -553.896C995.95 -273.424 990.169 175.53 709.697 448.872C429.224 722.213 -19.7305 716.432 -293.072 435.96C-566.413 155.488 -560.632 -293.467 -280.16 -566.808C0.312524 -840.15 449.267 -834.369 722.608 -553.896Z"
            fill="url(#paint0_radial_123_75770)"
          />
        </g>

        <defs>
          <filter
            id="filter0_f_123_75770"
            x="-1099.19"
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
              result="effect1_foregroundBlur_123_75770"
            />
          </filter>

          <radialGradient
            id="paint0_radial_123_75770"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(196.511 -78.6694) rotate(45.7377) scale(757.944 704.321)"
          >
            <stop offset="0.303662" stopColor="#5BEC71" />
            <stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-[300px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(1,9,30,0) 0%, #01091E 100%)",
        }}
      />
    </div>
  );
}
