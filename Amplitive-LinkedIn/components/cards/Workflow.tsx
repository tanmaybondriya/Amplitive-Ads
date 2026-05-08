"use client";
import FeatureCard from "../FeatureCard";

function OpenRateBox() {
  return (
    <div
      className="rounded-[9.33px] p-[3px] min-w-[140px]"
      style={{
        background: "#FFFFFF26",
        boxShadow: "0px 4px 22px 0px #75BAFF73",
      }}
    >
      <div
        className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(60.63deg, rgba(185, 205, 255, 0.42) -8.01%, rgba(238, 233, 255, 0.42) 90.19%)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
          <rect
            width="25.1515"
            height="25.1515"
            rx="3.77273"
            fill="url(#or_grad)"
          />
          <path
            d="M7.33594 12.5758C7.33594 12.5758 8.90791 8.90784 12.5758 8.90784C16.2438 8.90784 17.8157 12.5758 17.8157 12.5758C17.8157 12.5758 16.2438 16.2437 12.5758 16.2437C8.90791 16.2437 7.33594 12.5758 7.33594 12.5758Z"
            stroke="white"
            strokeWidth="1.04798"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5759 14.1477C13.4441 14.1477 14.1478 13.4439 14.1478 12.5758C14.1478 11.7076 13.4441 11.0038 12.5759 11.0038C11.7077 11.0038 11.0039 11.7076 11.0039 12.5758C11.0039 13.4439 11.7077 14.1477 12.5759 14.1477Z"
            stroke="white"
            strokeWidth="1.04798"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="or_grad"
              x1="25.1515"
              y1="-1.55537e-06"
              x2="-0.943182"
              y2="25.1515"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8A4FF" />
              <stop offset="1" stopColor="#6B31B6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col gap-0.5">
          <span
            className="font-urbanist font-medium text-[8px] leading-tight text-left"
            style={{ color: "#3E3E3E" }}
          >
            Open Rate
          </span>
          <span
            className="font-urbanist font-medium text-[12px] leading-tight text-left"
            style={{ color: "#3E3E3E" }}
          >
            58%
          </span>
        </div>
      </div>
    </div>
  );
}

function EmailsSentCard() {
  return (
    <div
      className="rounded-[9.33px] p-[1px] min-w-[130px]"
      style={{
        background: "#FFFFFF26",
        boxShadow: "0px 4px 22px 0px #75BAFF73",
      }}
    >
      <div
        className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(60.63deg, rgba(255, 175, 163, 0.42) -8.01%, rgba(255, 230, 207, 0.42) 90.19%)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none">
          <rect
            width="24.543"
            height="24.543"
            rx="3.68145"
            fill="url(#es_grad)"
          />
          <g clipPath="url(#es_clip)">
            <path
              d="M16.3693 8.18097H10.2336C9.66878 8.18097 9.21094 8.63881 9.21094 9.20359V13.8054C9.21094 14.3702 9.66878 14.828 10.2336 14.828H16.3693C16.9341 14.828 17.3919 14.3702 17.3919 13.8054V9.20359C17.3919 8.63881 16.9341 8.18097 16.3693 8.18097Z"
              stroke="white"
              strokeWidth="1.02262"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3919 9.7149L13.7616 11.6477C13.4702 11.8011 13.1327 11.8011 12.8413 11.6477L9.21094 9.7149"
              stroke="white"
              strokeWidth="1.02262"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.16406 10.2261V15.8506C7.16406 16.413 7.62424 16.8732 8.18669 16.8732H15.3451"
              stroke="white"
              strokeWidth="1.02262"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="es_grad"
              x1="24.543"
              y1="-1.51773e-06"
              x2="-0.920362"
              y2="24.543"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA9CF" />
              <stop offset="1" stopColor="#C62943" />
            </linearGradient>
            <clipPath id="es_clip">
              <rect
                width="12.2715"
                height="12.2715"
                fill="white"
                transform="translate(6.13672 6.13574)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="flex flex-col gap-0.5">
          <span
            className="font-urbanist font-medium text-[8px] leading-tight"
            style={{ color: "#3E3E3E" }}
          >
            Emails Sent
          </span>
          <span
            className="font-urbanist font-medium text-[12px] text-left leading-tight"
            style={{ color: "#3E3E3E" }}
          >
            87
          </span>
        </div>
      </div>
    </div>
  );
}

function BounceRateCard() {
  return (
    <div
      className="rounded-[9.33px] p-[3px] min-w-[130px]"
      style={{
        background: "#FFFFFF26",
        boxShadow: "0px 4px 22px 0px #75BAFF73",
      }}
    >
      <div
        className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(60.63deg, rgba(255, 220, 163, 0.42) -8.01%, rgba(255, 245, 207, 0.42) 90.19%)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
          <rect
            width="25.1515"
            height="25.1515"
            rx="3.77273"
            fill="url(#br_grad)"
          />
          <path
            d="M12.5 8.5V13.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.5 16.5V17.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5.5 19.5L12.5 7.5L19.5 19.5H5.5Z"
            stroke="white"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="br_grad"
              x1="25.1515"
              y1="0"
              x2="0"
              y2="25.1515"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD580" />
              <stop offset="1" stopColor="#FF8C42" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col gap-0.5">
          <span
            className="font-urbanist font-medium text-[8px] leading-tight text-left"
            style={{ color: "#3E3E3E" }}
          >
            Bounce Rate
          </span>
          <span
            className="font-urbanist font-medium text-[12px] leading-tight text-left"
            style={{ color: "#3E3E3E" }}
          >
            1.2%
          </span>
        </div>
      </div>
    </div>
  );
}

function Chart() {
  // Y-axis labels and X-axis dates
  const yLabels = [150, 100, 50, 0];
  const xLabels = ["4/15/26", "4/16/26", "4/17/26", "4/18/26", "4/19/26"];

  return (
    <div className="relative w-full h-full">
      {/* Y-axis line */}
      <div
        className="absolute left-[32px] top-0 bottom-[24px]"
        style={{ borderLeft: "1px solid rgba(255,255,255,0.15)" }}
      />
      {/* X-axis line */}
      <div
        className="absolute left-[32px] right-0 bottom-[24px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}
      />

      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-[24px] flex flex-col justify-between pr-1">
        {yLabels.map((l) => (
          <span
            key={l}
            className="text-[9px] text-white/40 font-urbanist text-right w-[28px]"
          >
            {l}
          </span>
        ))}
      </div>

      {/* X-axis labels */}
      <div className="absolute left-[32px] right-0 bottom-0 flex justify-between">
        {xLabels.map((l) => (
          <span key={l} className="text-[9px] text-white/40 font-urbanist">
            {l}
          </span>
        ))}
      </div>

      {/* SVG chart area */}
      <div className="absolute left-[32px] right-0 top-0 bottom-[24px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 521 186"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green fill */}
          <path
            d="M72.0656 73.534L3.07833 175.678C1.07204 178.649 0 182.151 0 185.736H520.5C520.5 182.114 519.7 178.537 518.157 175.26L453.462 37.8813C429.892 -12.1706 358.898 -12.7525 334.511 36.9063L309.407 88.0226C286.574 134.516 221.53 137.79 194.144 93.8231L182.781 75.5798C157.507 35.0035 98.8212 33.9191 72.0656 73.534Z"
            fill="url(#green_fill)"
            fillOpacity="0.12"
          />
          {/* Green line */}
          <path d="M72.0656 73.534L3.07833 175.678" stroke="transparent" />
          <path
            d="M0 185.736L72.0656 73.534C98.8212 33.9191 157.507 35.0035 182.781 75.5798L194.144 93.8231C221.53 137.79 286.574 134.516 309.407 88.0226L334.511 36.9063C358.898 -12.7525 429.892 -12.1706 453.462 37.8813L520.5 185.736"
            stroke="url(#green_line)"
            strokeWidth="2"
            fill="none"
          />

          {/* Purple fill */}
          <path
            d="M87.7531 109.616L0 0V175.5H521.5L470.366 107.89C451.932 83.5157 414.602 85.8559 399.356 112.341C383.085 140.608 342.403 140.908 325.716 112.884L309.95 86.4064C286.576 47.1517 229.853 46.807 206.004 85.7748L195.57 102.822C171.694 141.834 116.338 145.323 87.7531 109.616Z"
            fill="url(#purple_fill)"
            fillOpacity="0.12"
          />
          {/* Purple line */}
          <path
            d="M0 0L87.7531 109.616C116.338 145.323 171.694 141.834 195.57 102.822L206.004 85.7748C229.853 46.807 286.576 47.1517 309.95 86.4064L325.716 112.884C342.403 140.908 383.085 140.608 399.356 112.341C414.602 85.8559 451.932 83.5157 470.366 107.89L521.5 175.5"
            stroke="url(#purple_line)"
            strokeWidth="2"
            fill="none"
          />

          <defs>
            <linearGradient
              id="green_fill"
              x1="422.906"
              y1="-86.2642"
              x2="287.912"
              y2="277.448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CCFFD4" />
              <stop offset="1" stopColor="#2EB0D7" />
            </linearGradient>
            <linearGradient
              id="green_line"
              x1="0"
              y1="0"
              x2="521"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5BEC71" />
              <stop offset="1" stopColor="#2EB0D7" />
            </linearGradient>
            <linearGradient
              id="purple_fill"
              x1="521.5"
              y1="-1.13167e-05"
              x2="399.35"
              y2="335.511"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8A4FF" />
              <stop offset="1" stopColor="#6B31B6" />
            </linearGradient>
            <linearGradient
              id="purple_line"
              x1="0"
              y1="0"
              x2="521"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8A4FF" />
              <stop offset="1" stopColor="#6B31B6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const OperationalVisibilityCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Operational Visibility"
      description="Keep the team aligned on what has been sent, what needs attention, and what happens next."
      icon={
        <svg width="38" height="38" viewBox="0 0 26 26" fill="none">
          <rect
            width="25.1515"
            height="25.1515"
            rx="3.77273"
            fill="url(#ov_icon_grad)"
          />
          <path
            d="M7.33594 12.5758C7.33594 12.5758 8.90791 8.90784 12.5758 8.90784C16.2438 8.90784 17.8157 12.5758 17.8157 12.5758C17.8157 12.5758 16.2438 16.2437 12.5758 16.2437C8.90791 16.2437 7.33594 12.5758 7.33594 12.5758Z"
            stroke="white"
            strokeWidth="1.04798"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5759 14.1477C13.4441 14.1477 14.1478 13.4439 14.1478 12.5758C14.1478 11.7076 13.4441 11.0038 12.5759 11.0038C11.7077 11.0038 11.0039 11.7076 11.0039 12.5758C11.0039 13.4439 11.7077 14.1477 12.5759 14.1477Z"
            stroke="white"
            strokeWidth="1.04798"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="ov_icon_grad"
              x1="25.1515"
              y1="-1.55537e-06"
              x2="-0.943182"
              y2="25.1515"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B8A4FF" />
              <stop offset="1" stopColor="#6B31B6" />
            </linearGradient>
          </defs>
        </svg>
      }
      iconBg=""
    >
      {/* Chart area — fills the bottom of the card */}
      <div className="absolute inset-x-0 bottom-0 h-[55%]">
        <Chart />
      </div>

      {/* Floating stat cards */}
      {/* Open Rate — top left */}
      <div className="absolute top-[4%] left-[4%] z-10 scale-[0.85] origin-top-left">
        <OpenRateBox />
      </div>

      {/* Emails Sent — top right */}
      <div className="absolute top-[4%] right-[4%] z-10 scale-[0.85] origin-top-right">
        <EmailsSentCard />
      </div>

      {/* Bounce Rate — middle center */}
      <div className="absolute top-[38%] left-[50%] -translate-x-1/2 z-10 scale-[0.85]">
        <BounceRateCard />
      </div>
    </FeatureCard>
  </div>
);

export default OperationalVisibilityCard;
