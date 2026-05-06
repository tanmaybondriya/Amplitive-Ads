"use client";
import { useState } from "react";
import React from "react";

import Dot from "@/components/Dot";
import GlassBadge from "@/components/GlassBadge";

// ─── Data ────────────────────────────────────────────────────────────────────

const TABS = ["Image", "Video", "Scripts", "Text"] as const;

const CAMPAIGN_STEPS = [
  {
    label: "Campaign Details",
    top: 30,
    lineWidth: 15.5,
    iconGrad: "linear-gradient(226.05deg, #FFEAF3 0%, #DC486D 101.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M8.5 1H3.5C3.23 1 2.96 1.11 2.76 1.3C2.55 1.5 2.44 1.77 2.44 2.04V11.96C2.44 12.23 2.55 12.5 2.76 12.7C2.96 12.89 3.23 13 3.5 13H10.5C10.77 13 11.04 12.89 11.24 12.7C11.44 12.5 11.56 12.23 11.56 11.96V4L8.5 1Z"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 1V4H11.56"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.25 7.75H4.75"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.25 10H4.75"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.875 5.5H4.75"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Ad Setup",
    top: 108,
    lineWidth: 31,
    iconGrad: "linear-gradient(214.51deg, #B6DAFF 7.64%, #63A2FF 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="2" stroke="white" strokeWidth="1.1" />
        <path
          d="M11.2 8.6a1 1 0 0 0 .2 1.1l.03.04a1.2 1.2 0 0 1-1.7 1.7l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.92V12a1.2 1.2 0 0 1-2.4 0v-.05a1 1 0 0 0-.65-.91 1 1 0 0 0-1.1.2l-.04.03a1.2 1.2 0 0 1-1.7-1.7l.04-.04A1 1 0 0 0 2.3 8.4a1 1 0 0 0-.91-.6H1a1.2 1.2 0 0 1 0-2.4h.05a1 1 0 0 0 .91-.65 1 1 0 0 0-.2-1.1l-.03-.04a1.2 1.2 0 0 1 1.7-1.7l.04.04a1 1 0 0 0 1.1.2h.05A1 1 0 0 0 5.2 2V2a1.2 1.2 0 0 1 2.4 0v.05a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.03a1.2 1.2 0 0 1 1.7 1.7l-.04.04A1 1 0 0 0 10.8 5.6a1 1 0 0 0 .91.6H12a1.2 1.2 0 0 1 0 2.4h-.05a1 1 0 0 0-.91.6z"
          stroke="white"
          strokeWidth="1.1"
        />
      </svg>
    ),
  },
  {
    label: "Ad Creative",
    top: 183,
    lineWidth: 57.5,
    iconGrad: "linear-gradient(214.51deg, #FFCC9C 7.64%, #FF8853 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="1.5"
          y="1.5"
          width="11"
          height="11"
          rx="1.5"
          stroke="white"
          strokeWidth="1.1"
        />
        <circle cx="4.5" cy="4.5" r="1" fill="white" />
        <path
          d="M13 9.5L9.5 6L3 13"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Review & Launch",
    top: 264,
    lineWidth: 97,
    iconGrad: "linear-gradient(214.51deg, #CCFFD4 7.64%, #2EB0D7 94.91%)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="1.5"
          y="1.5"
          width="11"
          height="11"
          rx="1.5"
          stroke="white"
          strokeWidth="1.1"
        />
        <path
          d="M13 9.5L9.5 6L3 13"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 1.5V4.5L11 3"
          stroke="white"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

// ─── Private sub-components ───────────────────────────────────────────────────

function CampaignSteps() {
  return (
    <div className="absolute top-[178px] left-0 z-30 w-[400px] h-[350px]">
      {/* Connector lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical stem */}
        <div
          className="absolute left-0 top-[30px] w-[1px]"
          style={{
            height: "234px",
            background:
              "linear-gradient(180deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
          }}
        />
        {/* Horizontal branches + glow dots */}
        {CAMPAIGN_STEPS.map((step, i) => (
          <React.Fragment key={`branch-${i}`}>
            <div
              className="absolute h-[1px]"
              style={{
                top: `${step.top}px`,
                left: "0px",
                width: `${step.lineWidth}px`,
                background:
                  "linear-gradient(90deg, #5BEC71 -4.01%, #0F72D7 91.44%)",
              }}
            />
            <div
              className="absolute -translate-y-1/2 flex items-center justify-center"
              style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}
            >
              <div className="absolute w-[6px] h-[6px] bg-white/20 rounded-full blur-[1px]" />
              <div className="w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Step cards */}
      {CAMPAIGN_STEPS.map((step) => (
        <div
          key={step.label}
          className="absolute flex items-center -translate-y-1/2"
          style={{ top: `${step.top}px`, left: `${step.lineWidth}px` }}
        >
          <div
            className="absolute flex items-center justify-center rounded-[9.16px] p-[1px] bg-[#FFFFFF26]"
            style={{ width: "162.67px", height: "58.06px" }}
          >
            <div
              className="rounded-[8.79px] bg-white backdrop-blur-md flex items-center gap-[11.3px] px-[11.3px]"
              style={{ width: "153.5px", height: "48.9px" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[3.77px]"
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

function AdsAnalyticsBox() {
  const gradientId = "chart_fill_unique";
  const strokeId = "chart_stroke_unique";
  return (
    <div
      className="absolute z-20 flex flex-col overflow-hidden"
      style={{
        width: "504.47px",
        height: "356px",
        top: "71px",
        left: "129px",
        borderRadius: "18.7px",
        border: "0.85px solid rgba(255,255,255,0.1)",
        background: "rgba(0,0,0,0.16)",
        boxShadow:
          "2.66px 2.66px 23.91px 0px rgba(117,186,255,0.12) inset, 2.66px 2.66px 23.91px 0px rgba(91,236,113,0.05) inset, 0px 3.4px 20.4px 0px rgba(117,186,255,0.19)",
        backdropFilter: "blur(10.2px)",
      }}
    >
      <div
        className="absolute -top-[140px] -left-[140px] w-[320px] h-[320px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(49.66% 53.44% at 50.05% 48.11%, #5BEC71 0%, #0F72D7 100%)",
          filter: "blur(94px)",
          WebkitFilter: "blur(94px)",
          borderRadius: "9999px",
        }}
      />
      <div className="relative z-10 flex flex-col h-full font-urbanist">
        <p className="text-white text-[16px] font-medium mt-[18.7px] text-center opacity-90">
          Ads Analytics
        </p>

        <div className="relative flex-1 w-full overflow-hidden">
          {/* Y-axis labels */}
          <div
            className="absolute flex flex-col-reverse justify-between"
            style={{
              width: "12.79px",
              height: "257.55px",
              top: "35px",
              left: "18px",
            }}
          >
            {[0, 45, 90, 135, 180].map((val) => (
              <div
                key={val}
                className="text-white text-[6.68px] font-normal text-right leading-none"
              >
                {val}
              </div>
            ))}
          </div>

          {/* Axis border lines */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "431.95px",
              height: "257.55px",
              top: "35px",
              left: "36.76px",
              borderLeft: "0.56px solid #ECECED",
              borderBottom: "0.56px solid #ECECED",
            }}
          />

          <GlassBadge top="53px" left="118px">
            1288 Clicks
          </GlassBadge>

          {/* SVG chart */}
          <div
            className="absolute"
            style={{
              width: "431.81px",
              height: "221px",
              top: "70px",
              bottom: "px",
              left: "37.25px",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 432 221"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="-11.71"
                  y1="194.3"
                  x2="399.01"
                  y2="60.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BEC71" />
                  <stop offset="1" stopColor="#0F72D7" />
                </linearGradient>
                <linearGradient
                  id={strokeId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop stopColor="#0F72D7" />
                  <stop offset="1" stopColor="#5BEC71" />
                </linearGradient>
              </defs>
              <path
                d="M29.6368 57.941L0 81.9119V220.902H431.807V26.472L425.691 17.7359C408.842 -6.33445 372.321 -3.39893 359.532 23.0537L349.247 44.3296C341.095 61.1925 317.827 63.0958 307.043 47.782C298.902 36.2222 282.708 33.9024 271.649 42.7118L270.273 43.8083C257.566 53.9307 238.807 50.1829 230.965 35.9551L222.73 21.0144C208.227 -5.29777 171.168 -7.30663 153.905 17.2837L131.493 49.2106C118.993 67.0168 94.1503 70.767 76.9514 57.444C62.9734 46.6159 43.3842 46.8217 29.6368 57.941Z"
                fill={`url(#${gradientId})`}
                fillOpacity="0.15"
              />
              <path
                d="M0 81.9119L29.6368 57.941C43.3842 46.8217 62.9734 46.6159 76.9514 57.444C94.1503 70.767 118.993 67.0168 131.493 49.2106L153.905 17.2837C171.168 -7.30663 208.227 -5.29777 222.73 21.0144L230.965 35.9551C238.807 50.1829 257.566 53.9307 270.273 43.8083L271.649 42.7118C282.708 33.9024 298.902 36.2222 307.043 47.782C317.827 63.0958 341.095 61.1925 349.247 44.3296L359.532 23.0537C372.321 -3.39893 408.842 -6.33445 425.691 17.7359L431.807 26.472"
                stroke={`url(#${strokeId})`}
                strokeWidth="2.34"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <Dot top="-6px" left="180.34px" />
            <Dot top="59px" left="96px" />
            <Dot top="43.67px" left="247.34px" />
            <Dot top="52px" left="318.34px" />
            <Dot top="-4.33px" left="390px" />
          </div>

          <GlassBadge top="190px" left="83px">
            4.12% CTR
          </GlassBadge>
          <GlassBadge top="145px" left="390px" width="110px">
            51,200 Impressions
          </GlassBadge>
        </div>
      </div>
    </div>
  );
}

function DesktopAdsMockup() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: "700.5px", height: "468.32px" }}
    >
      {/* Search bar */}
      <div className="absolute top-0 left-[65px] z-30 flex h-[51.88px] w-[325px] items-center gap-3 rounded-[92.94px] border border-white/15 bg-black/15 px-4 shadow-[inset_4.65px_4.65px_41.82px_0px_rgba(117,186,255,0.12),inset_4.65px_4.65px_41.82px_0px_rgba(91,236,113,0.05)]">
        <div className="relative h-3.5 w-3.5 rounded-full border-2 border-white after:absolute after:-bottom-1 after:-right-1 after:h-1.5 after:w-[2px] after:rotate-[-45deg] after:bg-white after:content-['']" />
        <span className="font-['Urbanist'] text-[16.26px] font-normal leading-none text-white">
          Search Campaigns
        </span>
      </div>

      {/* Create Campaign button */}
      <div className="absolute top-[49px] right-0 z-40 flex h-[41.27px] w-[182px] cursor-pointer items-center justify-center gap-2 rounded-[6.58px] bg-[linear-gradient(40.24deg,#5BEC71_-4.01%,#0F72D7_91.44%)] px-[10.97px] py-[8.77px] shadow-[0px_4.39px_13.16px_0px_rgba(137,196,255,0.36)]">
        <span className="text-[30px] font-light leading-none text-white">
          +
        </span>
        <span className="font-['Urbanist'] text-[15.35px] font-normal leading-none text-white">
          Create Campaign
        </span>
      </div>

      <CampaignSteps />
      <AdsAnalyticsBox />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<string>("Image");

  return (
    <div className="relative w-full overflow-hidden">
      {/* ── DESKTOP (lg+) ── */}
      <div className="relative w-full z-10 h-auto items-center justify-center hidden lg:flex flex-col items-center text-center px-5 pt-14 pb-8">
        <div className="relative w-full max-w-[1400px] h-[600px] flex items-center justify-between px-20 z-10">
          {/* Left: copy block */}
          <div className="flex-shrink-0 flex flex-col justify-center w-[480px]">
            <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full mb-5 w-max bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-0.5px_0_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.18)] text-[12px] font-medium text-white/90 tracking-wide [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
              Ads
            </div>
            <h1 className="text-[44px] text-left font-medium leading-[1.2] text-white mb-4">
              Run ad execution as
              <br />
              part of your
              <br />
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">
                business operations
              </span>
            </h1>
            <p className="text-[13px] font-light text-white/60 leading-[1.7] max-w-[380px] mb-7">
              Connect campaigns, assets, and workflows—so execution stays
              aligned across your entire system.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-lg text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] transition-all border border-white/5 shadow-sm">
                Request Demo
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg text-[13px] font-semibold text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                See Pricing
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: ads mockup */}
          <DesktopAdsMockup />
        </div>
      </div>

      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col items-center text-center px-5 pt-14">
        {/* Ads badge */}
        <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full mb-5 bg-white/10 border border-white/20 text-[12px] text-white/80">
          Ads
        </div>

        {/* Heading */}
        <h1 className="text-[26px] font-medium leading-[1.3] text-white mb-4">
          Run ad execution as part of your business operations{" "}
          <span className="bg-gradient-to-r from-[#5BEC71] to-[#00A3FF] bg-clip-text text-transparent font-semibold">
            marketing operation
          </span>
        </h1>

        {/* Description */}
        <p className="text-[13px] text-white/60 leading-[1.7] mb-6 max-w-[320px]">
          Connect campaigns, assets, and workflows—so execution stays aligned
          across your entire system.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <button className="px-5 py-2.5 rounded-lg text-[12px] text-white bg-[#1e2e46]">
            View Pricing
          </button>

          <button className="px-5 py-2.5 rounded-lg text-[12px] font-semibold text-[#020a16] bg-white flex items-center gap-1">
            Book Demo →
          </button>
        </div>

        {/* 🔥 Reused Desktop Graph (scaled) */}
        <div className="w-full flex justify-center overflow-hidden">
          <div className="scale-[0.4] sm:scale-[0.75] origin-top ">
            <DesktopAdsMockup />
          </div>
        </div>
      </div>
    </div>
  );
}
