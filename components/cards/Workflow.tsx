import React from "react";
import { FileText, Settings, ImageIcon, Rocket } from "lucide-react";
import FeatureCard from "../FeatureCard";
import Dot from "../Dot";

const CAMPAIGN_STEPS = [
  {
    label: "Campaign Details",
    top: 30,
    lineWidth: 80,
    icon: <FileText size={14} className="text-white" />,
    iconGrad: "linear-gradient(135deg, #FF7EB3 0%, #FF758C 100%)",
  },
  {
    label: "Ad Setup",
    top: 108,
    lineWidth: 160,
    icon: <Settings size={14} className="text-white" />,
    iconGrad: "linear-gradient(135deg, #8AD4FF 0%, #419EFF 100%)",
  },
  {
    label: "Ad Creative",
    top: 186,
    lineWidth: 240,
    icon: <ImageIcon size={14} className="text-white" />,
    iconGrad: "linear-gradient(135deg, #FFB382 0%, #F07537 100%)",
  },
  {
    label: "Review & Launch",
    top: 264,
    lineWidth: 320,
    icon: <Rocket size={14} className="text-white" />,
    iconGrad: "linear-gradient(135deg, #70F3B7 0%, #39D0D3 100%)",
  },
];

function CampaignSteps() {
  return (
    <div className="absolute -top-7.5 left-0 md:left-20 z-30 w-full md:w-100 h-87.5 scale-[0.65] md:scale-100 origin-top-left">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-7.5 w-px"
          style={{
            height: "234px",
            background:
              "linear-gradient(180deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
          }}
        />
        {CAMPAIGN_STEPS.map((step, i) => (
          <React.Fragment key={`branch-${i}`}>
            <div
              className="absolute h-px"
              style={{
                top: `${step.top}px`,
                left: "0px",
                width: `${step.lineWidth}px`,
                background:
                  "linear-gradient(90deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
              }}
            />
            <Dot
              top={`${step.top - 6.25}px`}
              left={`${step.lineWidth - 6.25}px`}
            />
          </React.Fragment>
        ))}
      </div>

      {CAMPAIGN_STEPS.map((step) => (
        <div
          key={step.label}
          className="absolute flex items-center -translate-y-1/2"
          style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}
        >
          <div
            className="absolute flex items-center justify-center rounded-[9.16px] p-px bg-[#FFFFFF26]"
            style={{ width: "162.67px", height: "58.06px" }}
          >
            <div
              className="rounded-[8.79px] bg-white backdrop-blur-md flex items-center gap-[11.3px] px-[11.3px]"
              style={{ width: "153.5px", height: "48.9px" }}
            >
              <div
                className="shrink-0 flex items-center justify-center rounded-[3.77px]"
                style={{
                  width: "26.3px",
                  height: "26.3px",
                  background: step.iconGrad,
                }}
              >
                {step.icon}
              </div>
              <span className="font-urbanist text-[11.46px] font-medium text-[#1F1F1F] leading-none whitespace-nowrap">
                {step.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const WorkflowAlignmentCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Workflow Alignment"
      description="Coordinate launch steps, deadlines, and stakeholders with fewer disconnected handoffs."
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
            fill="url(#paint0_linear_123_1255)"
          />
          <g clipPath="url(#clip0_123_1255)">
            <path
              d="M21.5 10.6666H16.5V15.6666H21.5V10.6666Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.3333 22.3334H22.3333V27.3334H27.3333V22.3334Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6667 22.3334H10.6667V27.3334H15.6667V22.3334Z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.1667 22.3333V19H24.8333V22.3333"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 19V15.6666"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_123_1255"
              x1="38"
              y1="-1.20327e-06"
              x2="4.75"
              y2="40.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ACD5FF" />
              <stop offset="1" stopColor="#003F9D" />
            </linearGradient>
            <clipPath id="clip0_123_1255">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(9 9)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      iconBg=""
    >
      <div
        className="absolute left-[-140px] bottom-[-180px] w-[320px] h-[320px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(49.66% 53.44% at 50.05% 48.11%, #5BEC71 0%, #0F72D7 100%)",
          filter: "blur(100px)",
          WebkitFilter: "blur(100px)",
          borderRadius: "9999px",
        }}
      />
      <div
        className="absolute left-0 bottom-0 pointer-events-none w-[70%] h-[85%] opacity-60"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at 0% 100%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 0% 100%, black, transparent 75%)",
        }}
      />
      <div className="relative -top-15 md:top-0 w-full h-full flex justify-center md:block scale-[0.9] md:scale-[0.85] origin-top">
        {" "}
        <CampaignSteps />
      </div>
    </FeatureCard>
  </div>
);

export default WorkflowAlignmentCard;
