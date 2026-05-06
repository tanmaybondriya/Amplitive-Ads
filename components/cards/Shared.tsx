import React from "react";
import { Check, ImageIcon, Calendar, Bell } from "lucide-react";
import FeatureCard from "../FeatureCard";

// Before - delete the entire OrbitBackground component and replace with:
const OrbitBackground = () => (
  <>
    {/* Outer arc — existing (largest) */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 723 323"
      fill="none"
      preserveAspectRatio="xMidYMax meet"
    >
      <circle
        cx="361.5"
        cy="394"
        r="393.334"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1.33108"
        strokeDasharray="13.31 13.31"
      />
    </svg>

    {/* Middle arc */}
    <svg
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      width="552"
      height="205"
      viewBox="0 0 552 276"
      fill="none"
    >
      <circle
        cx="275.534"
        cy="275.534"
        r="274.868"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1.33108"
        strokeDasharray="13.31 13.31"
      />
    </svg>

    {/* Inner arc */}
    <svg
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      width="352"
      height="105"
      viewBox="0 0 352 176"
      fill="none"
    >
      <circle
        cx="175.703"
        cy="175.703"
        r="175.037"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1.33108"
        strokeDasharray="13.31 13.31"
      />
    </svg>
  </>
);
const OrbitBadge = ({
  children,
  className,
  glowColor = "rgba(59,130,246,0.5)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => (
  <div
    className={`absolute z-10 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg transition-transform hover:scale-105 ${className}`}
    style={{ boxShadow: `0 0 20px -5px ${glowColor}` }}
  >
    {children}
  </div>
);

const CircularIcon = ({
  icon,
  colorClass,
  glowColor,
}: {
  icon: React.ReactNode;
  colorClass: string;
  glowColor: string;
}) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg ${colorClass}`}
    style={{ boxShadow: `0 0 15px ${glowColor}` }}
  >
    {icon}
  </div>
);

const SharedVisibilityCard = () => (
  <FeatureCard
    title="Shared Visibility"
    description="Give teams a clearer view of what is being prepared, launched, and managed."
    icon={
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="38"
          height="38"
          rx="5.4"
          fill="url(#paint0_linear_123_1196)"
        />
        <path
          d="M12.332 27.3333H23.9987C24.4407 27.3333 24.8646 27.1577 25.1772 26.8451C25.4898 26.5326 25.6654 26.1087 25.6654 25.6666V15.25L21.082 10.6666H13.9987C13.5567 10.6666 13.1327 10.8422 12.8202 11.1548C12.5076 11.4673 12.332 11.8913 12.332 12.3333V18.1666"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.668 10.6666V15.6666H25.668"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.332 24L19.832 21.5L17.332 19"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.332 24V23.1667C12.332 22.7246 12.5076 22.3007 12.8202 21.9882C13.1327 21.6756 13.5567 21.5 13.9987 21.5H18.9987"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_123_1196"
            x1="30.875"
            y1="-1.64565e-06"
            x2="4.75"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC9C" />
            <stop offset="1" stopColor="#FF8853" />
          </linearGradient>
        </defs>
      </svg>
    }
    iconBg=""
  >
    <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden mt-4">
      <OrbitBackground />
      <OrbitBadge
        className="top-[15%] left-[15%]"
        glowColor="rgba(34,197,94,0.3)"
      >
        <Check size={12} className="text-green-500 stroke-3" />
        <span className="text-[10px] font-bold text-slate-800">
          Campaign Launched
        </span>
      </OrbitBadge>
      <OrbitBadge
        className="top-[45%] left-[40%]"
        glowColor="rgba(236,72,153,0.3)"
      >
        <ImageIcon size={12} className="text-pink-500" />
        <span className="text-[10px] font-bold text-slate-800">
          New Creative
        </span>
      </OrbitBadge>
      <div className="absolute top-[35%] right-[15%] bg-green-100 text-green-600 text-[9px] font-bold px-3 py-1 rounded-full border border-green-200">
        Active
      </div>
      <div className="absolute bottom-[20%] left-[25%]">
        <CircularIcon
          icon={<Calendar size={14} />}
          colorClass="bg-blue-500"
          glowColor="rgba(59,130,246,0.6)"
        />
      </div>
      <div className="absolute bottom-[10%] right-[30%]">
        <CircularIcon
          icon={<Bell size={14} />}
          colorClass="bg-purple-500"
          glowColor="rgba(168,85,247,0.6)"
        />
      </div>
    </div>
  </FeatureCard>
);

export default SharedVisibilityCard;
