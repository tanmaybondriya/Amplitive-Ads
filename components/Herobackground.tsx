export default function HeroBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:flex justify-center overflow-hidden">
      <svg
        width="1446"
        height="530"
        viewBox="0 0 1728 1168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity="0.6"
          filter="url(#filter0_f_123_48913)"
          style={{ mixBlendMode: "plus-lighter" }}
        >
          <path
            d="M1371.61 -553.896C1644.95 -273.424 1639.17 175.53 1358.7 448.872C1078.22 722.213 629.269 716.432 355.928 435.96C82.5869 155.488 88.3677 -293.467 368.84 -566.808C649.313 -840.15 1098.27 -834.369 1371.61 -553.896Z"
            fill="url(#paint0_radial_123_48913)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_123_48913"
            x="-450.186"
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
              result="effect1_foregroundBlur_123_48913"
            />
          </filter>
          <radialGradient
            id="paint0_radial_123_48913"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(845.511 -78.6694) rotate(45.7377) scale(757.944 704.321)"
          >
            <stop offset="0.303662" stopColor="#5BEC71" />
            <stop offset="0.870122" stopColor="#0F72D7" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
