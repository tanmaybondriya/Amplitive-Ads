import React from "react";
import Dot from "./Dot";

type Props = {
  className?: string;
};

const ConnectorSVG = ({ className }: Props) => (
  <div className="absolute left-[43%] top-[50%] -translate-y-1/2 flex flex-col h-32.5 pointer-events-none z-0">
    <svg
      width="48"
      height="65"
      viewBox="0 0 48 95"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 93.9389C16.485 93.9389 29.8487 80.5752 29.8487 64.0902V18.4724C29.8487 8.51923 37.9174 0.450562 47.8706 0.450562"
        stroke="url(#paint0_linear_123_1165)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_123_1165"
          x1="3.59029"
          y1="106.794"
          x2="84.4191"
          y2="57.8802"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5BEC71" />
          <stop offset="0.902778" stopColor="#0F72D7" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      width="48"
      height="65"
      viewBox="0 0 48 95"
      fill="none"
      preserveAspectRatio="none"
      className="scale-y-[-1] -mt-px"
    >
      <path
        d="M0 93.9389C16.485 93.9389 29.8487 80.5752 29.8487 64.0902V18.4724C29.8487 8.51923 37.9174 0.450562 47.8706 0.450562"
        stroke="url(#paint0_linear_123_1165)"
        strokeWidth="1.5"
      />
    </svg>
    <Dot top="calc(50% - 6.25px)" left="-6.25px" />
    <Dot top="-6.25px" left="41.75px" />
    <Dot top="calc(100% - 6.25px)" left="41.75px" />
  </div>
);

export default ConnectorSVG;
