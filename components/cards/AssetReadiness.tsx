import Image from "next/image";
import assest1 from "../../public/asset1.png";
import assest2 from "../../public/asset2.png";
import FeatureCard from "../FeatureCard";

const AssetReadinessCard = () => (
  <FeatureCard
    title="Asset Readiness"
    description="Connect paid campaigns to the assets, approvals, and files required to launch them."
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
            <stop stopColor="#CCFFD4" />
            <stop offset="1" stopColor="#2EB0D7" />
          </linearGradient>
        </defs>
      </svg>
    }
    iconBg=""
  >
    <div className="relative w-full h-full flex flex-col gap-3 items-center scale-[0.85] sm:scale-[0.9] md:scale-[0.95] lg:scale-100 origin-center overflow-hidden pt-4">
      {[
        {
          id: "1202235684",
          title: "New Traffic Ad Copy 1",
          img: assest1,
          spend: "$376.22",
          width: "w-[94%] md:w-[82%]",
        },
        {
          id: "1202235685",
          title: "New Traffic Ad Copy 2",
          img: assest2,
          spend: "$224",
          width: "w-[97%] md:w-[90%]",
        },
      ].map((ad, index) => (
        <div
          key={index}
          className={`relative z-10 ${ad.width} bg-[#FFFFFF29] p-[1.5px] rounded-lg`}
        >
          <div className="bg-white px-3 py-2.5 shadow-sm rounded-lg border-[#EBEBEB] border-[0.5px] flex items-center gap-2">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-md overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
              <Image
                src={ad.img}
                alt={ad.title}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-slate-900 font-bold text-[7px] md:text-[9px] leading-tight">
                {ad.title}
              </h4>
              <p className="text-slate-400 text-[7px] md:text-[9px] mt-0.5">
                ID: {ad.id}
              </p>
            </div>
            <div className="flex items-center gap-1.5 ml-auto shrink-0">
              <div className="flex items-center gap-1 bg-[#F8F8FA] rounded-sm px-2 py-1">
                <span className="text-[#7D7D7D] text-[7px] md:text-[9px] font-medium whitespace-nowrap">
                  Status:
                </span>
                <span className="bg-[#D2FFD9] text-[#3AC750] text-[4px] md:text-[6px] font-semibold px-1 py-px rounded-sm whitespace-nowrap">
                  Active
                </span>
              </div>
              <div className="bg-[#F8F8FA] rounded-sm px-1 py-px whitespace-nowrap">
                <span className="text-[#7D7D7D] text-[7px] md:text-[8px] font-medium">
                  Spend:{" "}
                </span>
                <span className="text-[#7D7D7D] text-[7px] md:text-[8px] font-semibold">
                  {ad.spend}
                </span>
              </div>
              <div className="bg-[#F8F8FA] rounded-sm px-1 py-px whitespace-nowrap">
                <span className="text-[#7D7D7D] text-[7px] md:text-[8px] font-medium">
                  CTR:{" "}
                </span>
                <span className="text-[#7D7D7D] text-[7px] md:text-[8px] font-semibold">
                  2.80%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </FeatureCard>
);

export default AssetReadinessCard;
