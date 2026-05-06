import Image from "next/image";
import globe from "../../public/globe.png";
import key from "../../public/key.png";
import activity from "../../public/activity.png";
import link from "../../public/link.png";
import FeatureCard from "../FeatureCard";
import ConnectorSVG from "../Connectorsvg";

const CampaignOrganizationCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Campaign Organization"
      description="Keep ad initiatives visible inside the same project and planning layer as the rest of marketing."
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
            fill="url(#paint0_linear_123_1091)"
          />
          <path
            d="M17.332 14H26.4987"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.332 19H26.4987"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.332 24H26.4987"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 14L12.3333 14.8333L14 13.1666"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 19L12.3333 19.8333L14 18.1666"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 24L12.3333 24.8333L14 23.1666"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_123_1091"
              x1="38"
              y1="-2.34991e-06"
              x2="-1.425"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA9CF" />
              <stop offset="1" stopColor="#C62943" />
            </linearGradient>
          </defs>
        </svg>
      }
      iconBg=""
    >
      <div
        // Change inset-0 to bottom-0 right-0 to anchor it correctly
        className="absolute bottom-0 right-0 pointer-events-none w-[58%] h-[58%] md:w-[70%] md:h-[120%]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
          backgroundSize: "60px 60px",
          backgroundPosition: "left bottom",
          // The mask now correctly calculates from the bottom-right of the bottom-right anchored div
          maskImage:
            "radial-gradient(circle at 100% 100%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 100%, black, transparent 80%)",
        }}
      />
      <div
        className="absolute right-[-180px] top-[85%] -translate-y-1/2 w-[420px] h-[420px] opacity-30"
        style={{
          background:
            "radial-gradient(49.66% 53.44% at 50.05% 48.11%, #5BEC71 0%, #0F72D7 100%)",
          filter: "blur(120px)",
          WebkitFilter: "blur(120px)",
          borderRadius: "9999px",
        }}
      />
      <div className="relative overflow-hidden w-full w-full flex items-center gap-9 md:gap-7 lg:gap-12 scale-[0.85] md:scale-[0.95] lg:scale-100 ">
        {/* Main Source Card */}
        <div className="relative z-10 w-[48%] sm:w-[42%] md:w-[35%] sm:ml-4 md:ml-12 self-center bg-[#FFFFFF29] p-[4.09px] rounded-[9.55px]">
          <div className="bg-white p-3 shadow-2xl rounded-[9.55px] border-[#EBEBEB] border-[0.55px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[linear-gradient(219.17deg,#FF8853_5.27%,#FF5001_108.42%)] rounded flex items-center justify-center text-white text-[10px] font-bold">
                SD
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-[10px] leading-tight">
                  Stremeline Digital
                </h4>
                <p className="text-slate-400 text-[8px]">
                  stremelinedigital.com
                </p>
              </div>
            </div>
            <div className="flex gap-1.5 mb-3">
              <span className="bg-[#F0F2FF] text-[#8C48E6] text-[8px] px-2 py-0.5 rounded-full font-bold">
                Brand
              </span>
              <span className="bg-[#D2FFD9] text-[#3AC750] text-[8px] px-2 py-0.5 rounded-full font-bold">
                Active
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] text-slate-500">
              <div className="flex items-center gap-2">
                <Image
                  src={globe}
                  alt="globe"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <span className="font-medium">DA: 0</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={key}
                  alt="key"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <span className="font-medium">Keywords: 43</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={link}
                  alt="link"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <span className="font-medium">Backlinks: 42</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={activity}
                  alt="activity"
                  width={10}
                  height={10}
                  className="object-contain"
                />
                <span className="font-medium">Health: 94%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-[48%] sm:w-[42%] md:w-[40%] ml-0 z-10 mr-2 sm:mr-4 md:mr-12">
          {[1, 2].map((i) => (
            <div key={i} className="bg-[#FFFFFF29] p-0.75 rounded-[9.55px]">
              <div className="bg-white p-2.5 shadow-xl rounded-[9.55px] border-[#EBEBEB] border-[0.55px] flex flex-col justify-between min-h-[80px] sm:min-h-[90px]">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h5 className="text-slate-900 font-bold text-[9px] leading-tight">
                      Sales Campaign {i}
                    </h5>
                    <p className="text-slate-400 text-[7px]">ID: 1202235684</p>
                  </div>
                  <span
                    className={`text-[6px] px-1.5 py-0.5 rounded font-bold uppercase ${
                      i === 1
                        ? "text-[#3AC750] bg-[#D2FFD9]"
                        : "text-[#FF5001] bg-[#FFE5D9]"
                    }`}
                  >
                    {i === 1 ? "Active" : "Paused"}
                  </span>
                </div>
                <div className="flex justify-between text-[7px] text-slate-500 border-t border-slate-50 pt-1.5 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[6px] text-slate-300 uppercase font-semibold">
                      Objective
                    </span>
                    <span className="font-medium text-slate-600">Sales</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[6px] text-slate-300 uppercase font-semibold">
                      Budget
                    </span>
                    <span className="font-medium text-slate-600">
                      $8.00/day
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[6px] text-slate-300 uppercase font-semibold">
                      Created
                    </span>
                    <span className="font-medium text-slate-600">4/3/2026</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ConnectorSVG className="absolute inset-0 w-full pointer-events-none" />
      </div>
    </FeatureCard>
  </div>
);

export default CampaignOrganizationCard;
