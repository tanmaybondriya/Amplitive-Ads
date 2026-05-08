import FeatureCard from "../FeatureCard";

const steps = [
  {
    label: "Email",
    day: "Day 1",
    svg: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#email1_grad)"
        />
        <path
          d="M19.4575 9.72949H9.72791C9.05623 9.72949 8.51172 10.274 8.51172 10.9457V18.2428C8.51172 18.9145 9.05623 19.459 9.72791 19.459H19.4575C20.1291 19.459 20.6736 18.9145 20.6736 18.2428V10.9457C20.6736 10.274 20.1291 9.72949 19.4575 9.72949Z"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6736 11.5538L15.219 15.02C15.0313 15.1376 14.8142 15.2 14.5927 15.2C14.3711 15.2 14.1541 15.1376 13.9663 15.02L8.51172 11.5538"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="email1_grad"
            x1="23.7158"
            y1="-1.26406e-06"
            x2="3.64858"
            y2="29.1886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CCFFD4" />
            <stop offset="1" stopColor="#2EB0D7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    day: "Day 2",
    svg: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#li_grad)"
        />
        <g clipPath="url(#li_clip)">
          <path
            d="M17.0275 12.1619C17.9951 12.1619 18.9232 12.5463 19.6074 13.2305C20.2917 13.9148 20.6761 14.8428 20.6761 15.8104V20.0671H18.2437V15.8104C18.2437 15.4879 18.1155 15.1785 17.8875 14.9505C17.6594 14.7224 17.35 14.5943 17.0275 14.5943C16.7049 14.5943 16.3956 14.7224 16.1675 14.9505C15.9394 15.1785 15.8113 15.4879 15.8113 15.8104V20.0671H13.3789V15.8104C13.3789 14.8428 13.7633 13.9148 14.4476 13.2305C15.1318 12.5463 16.0598 12.1619 17.0275 12.1619Z"
            stroke="white"
            strokeWidth="1.21619"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9441 12.77H8.51172V20.0672H10.9441V12.77Z"
            stroke="white"
            strokeWidth="1.21619"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.72791 10.9457C10.3996 10.9457 10.9441 10.4012 10.9441 9.7295C10.9441 9.05781 10.3996 8.51331 9.72791 8.51331C9.05623 8.51331 8.51172 9.05781 8.51172 9.7295C8.51172 10.4012 9.05623 10.9457 9.72791 10.9457Z"
            stroke="white"
            strokeWidth="1.21619"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="li_grad"
            x1="29.1886"
            y1="-9.24257e-07"
            x2="3.64858"
            y2="31.0129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ACD5FF" />
            <stop offset="1" stopColor="#003F9D" />
          </linearGradient>
          <clipPath id="li_clip">
            <rect
              width="14.5943"
              height="14.5943"
              fill="white"
              transform="translate(7.29688 7.29712)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "Email 2",
    day: "Day 5",
    svg: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#email2_grad)"
        />
        <path
          d="M19.4575 9.72949H9.72791C9.05623 9.72949 8.51172 10.274 8.51172 10.9457V18.2428C8.51172 18.9145 9.05623 19.459 9.72791 19.459H19.4575C20.1291 19.459 20.6736 18.9145 20.6736 18.2428V10.9457C20.6736 10.274 20.1291 9.72949 19.4575 9.72949Z"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6736 11.5538L15.219 15.02C15.0313 15.1376 14.8142 15.2 14.5927 15.2C14.3711 15.2 14.1541 15.1376 13.9663 15.02L8.51172 11.5538"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="email2_grad"
            x1="23.7158"
            y1="-1.26406e-06"
            x2="3.64858"
            y2="29.1886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC9C" />
            <stop offset="1" stopColor="#FF8853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Call",
    day: "Day 6",
    svg: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#call_grad)"
        />
        <g clipPath="url(#call_clip)">
          <path
            d="M20.672 17.5862V19.4105C20.6727 19.5798 20.638 19.7474 20.5702 19.9026C20.5023 20.0578 20.4028 20.1971 20.278 20.3116C20.1532 20.4261 20.0059 20.5132 19.8455 20.5675C19.685 20.6217 19.515 20.6419 19.3464 20.6266C17.4752 20.4233 15.6777 19.7839 14.0985 18.7598C12.6292 17.8262 11.3836 16.5805 10.4499 15.1112C9.42222 13.5248 8.78266 11.7186 8.58306 9.83902C8.56786 9.67086 8.58785 9.50138 8.64174 9.34136C8.69564 9.18135 8.78226 9.03431 8.89609 8.90961C9.00992 8.78491 9.14847 8.68528 9.30292 8.61706C9.45737 8.54884 9.62433 8.51352 9.79317 8.51336H11.6175C11.9126 8.51046 12.1987 8.61496 12.4224 8.8074C12.6462 8.99983 12.7924 9.26707 12.8337 9.55929C12.9107 10.1431 13.0535 10.7163 13.2593 11.268C13.3411 11.4857 13.3588 11.7222 13.3103 11.9496C13.2618 12.177 13.1492 12.3858 12.9857 12.5511L12.2134 13.3234C13.0791 14.8458 14.3396 16.1063 15.862 16.972L16.6343 16.1997C16.7996 16.0362 17.0083 15.9235 17.2357 15.875C17.4631 15.8265 17.6997 15.8442 17.9173 15.9261C18.4691 16.1319 19.0423 16.2747 19.6261 16.3517C19.9215 16.3934 20.1913 16.5422 20.3841 16.7698C20.577 16.9974 20.6794 17.2879 20.672 17.5862Z"
            stroke="white"
            strokeWidth="1.21619"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="call_grad"
            x1="29.1886"
            y1="-1.80502e-06"
            x2="-1.09457"
            y2="29.1886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8A4FF" />
            <stop offset="1" stopColor="#6B31B6" />
          </linearGradient>
          <clipPath id="call_clip">
            <rect
              width="14.5943"
              height="14.5943"
              fill="white"
              transform="translate(7.29688 7.29712)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const Arrow = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      d="M1 5H15M15 5L11 1M15 5L11 9"
      stroke="#BDBDBD"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const perfItems = [
  {
    value: "320",
    label: "Sent",
    svg: (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#perf_email_grad)"
        />
        <path
          d="M19.4575 9.72949H9.72791C9.05623 9.72949 8.51172 10.274 8.51172 10.9457V18.2428C8.51172 18.9145 9.05623 19.459 9.72791 19.459H19.4575C20.1291 19.459 20.6736 18.9145 20.6736 18.2428V10.9457C20.6736 10.274 20.1291 9.72949 19.4575 9.72949Z"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6736 11.5538L15.219 15.02C15.0313 15.1376 14.8142 15.2 14.5927 15.2C14.3711 15.2 14.1541 15.1376 13.9663 15.02L8.51172 11.5538"
          stroke="white"
          strokeWidth="1.21619"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="perf_email_grad"
            x1="23.7158"
            y1="-1.26406e-06"
            x2="3.64858"
            y2="29.1886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC9C" />
            <stop offset="1" stopColor="#FF8853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    value: "132",
    label: "Opened",
    svg: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect
          width="25.1515"
          height="25.1515"
          rx="3.77273"
          fill="url(#perf_eye_grad)"
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
            id="perf_eye_grad"
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
    ),
  },
  {
    value: "76",
    label: "Replied",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="4.2" fill="url(#perf_reply_grad)" />
        <path
          d="M18 10L10 14L18 18"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10 14H20"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="perf_reply_grad"
            x1="28"
            y1="0"
            x2="0"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCC9C" />
            <stop offset="1" stopColor="#FF8853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    value: "23",
    label: "Meetings",
    svg: (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <rect
          width="29.1886"
          height="29.1886"
          rx="4.3783"
          fill="url(#perf_call_grad)"
        />
        <g clipPath="url(#perf_call_clip)">
          <path
            d="M20.672 17.5862V19.4105C20.6727 19.5798 20.638 19.7474 20.5702 19.9026C20.5023 20.0578 20.4028 20.1971 20.278 20.3116C20.1532 20.4261 20.0059 20.5132 19.8455 20.5675C19.685 20.6217 19.515 20.6419 19.3464 20.6266C17.4752 20.4233 15.6777 19.7839 14.0985 18.7598C12.6292 17.8262 11.3836 16.5805 10.4499 15.1112C9.42222 13.5248 8.78266 11.7186 8.58306 9.83902C8.56786 9.67086 8.58785 9.50138 8.64174 9.34136C8.69564 9.18135 8.78226 9.03431 8.89609 8.90961C9.00992 8.78491 9.14847 8.68528 9.30292 8.61706C9.45737 8.54884 9.62433 8.51352 9.79317 8.51336H11.6175C11.9126 8.51046 12.1987 8.61496 12.4224 8.8074C12.6462 8.99983 12.7924 9.26707 12.8337 9.55929C12.9107 10.1431 13.0535 10.7163 13.2593 11.268C13.3411 11.4857 13.3588 11.7222 13.3103 11.9496C13.2618 12.177 13.1492 12.3858 12.9857 12.5511L12.2134 13.3234C13.0791 14.8458 14.3396 16.1063 15.862 16.972L16.6343 16.1997C16.7996 16.0362 17.0083 15.9235 17.2357 15.875C17.4631 15.8265 17.6997 15.8442 17.9173 15.9261C18.4691 16.1319 19.0423 16.2747 19.6261 16.3517C19.9215 16.3934 20.1913 16.5422 20.3841 16.7698C20.577 16.9974 20.6794 17.2879 20.672 17.5862Z"
            stroke="white"
            strokeWidth="1.21619"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="perf_call_grad"
            x1="29.1886"
            y1="-1.80502e-06"
            x2="-1.09457"
            y2="29.1886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8A4FF" />
            <stop offset="1" stopColor="#6B31B6" />
          </linearGradient>
          <clipPath id="perf_call_clip">
            <rect
              width="14.5943"
              height="14.5943"
              fill="white"
              transform="translate(7.29688 7.29712)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const CoordinatedSequencesCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Coordinated Sequences"
      description="Run LinkedIn and email outreach with a more consistent process for messaging and follow-up."
      icon={
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <rect width="38" height="38" rx="5.4" fill="url(#coord_icon_grad)" />
          <path
            d="M12 14h14M12 19h14M12 24h8"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="coord_icon_grad"
              x1="38"
              y1="0"
              x2="0"
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
      {/* Grid background bottom-left */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none w-[60%] h-[60%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at 0% 100%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 0% 100%, black, transparent 75%)",
        }}
      />

      <div className="relative w-full flex flex-col items-start gap-3 px-3 pb-3 scale-[0.78] origin-bottom-left md:scale-[0.85] lg:scale-[0.90] -mb-6">
        {/* Outreach Workflow card */}
        <div
          className="rounded-[9.73px] p-[4.86px]"
          style={{
            background: "#FFFFFF29",
            boxShadow: "0px 4px 22px 0px #75BAFF38",
          }}
        >
          <div
            className="rounded-[6px] bg-white px-4 py-3 flex flex-col gap-3"
            style={{ width: "275.4px" }}
          >
            <span
              className="font-urbanist font-medium text-[10px]"
              style={{ color: "#7D7D7D" }}
            >
              Outreach Workflow
            </span>
            <div className="flex items-center gap-2">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-1">
                    {step.svg}
                    <span
                      className="font-urbanist text-[8px] font-medium"
                      style={{ color: "#1F1F1F" }}
                    >
                      {step.label}
                    </span>
                    <span
                      className="font-urbanist text-[7px]"
                      style={{ color: "#9E9E9E" }}
                    >
                      {step.day}
                    </span>
                  </div>
                  {i < steps.length - 1 && <Arrow />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign Performance card — offset right */}
        <div
          className="self-end rounded-[9.73px] p-[4.86px]"
          style={{
            background: "#FFFFFF29",
            boxShadow: "0px 4px 22px 0px #75BAFF38",
            marginRight: "-8px",
          }}
        >
          <div
            className="rounded-[6px] bg-white px-4 py-3 flex flex-col gap-3"
            style={{ width: "275.4px" }}
          >
            <span
              className="font-urbanist font-medium text-[10px]"
              style={{ color: "#7D7D7D" }}
            >
              Campaign Performance
            </span>
            <div className="flex items-center justify-between">
              {perfItems.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  {item.svg}
                  <span
                    className="font-urbanist font-semibold text-[12px]"
                    style={{ color: "#1F1F1F" }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="font-urbanist text-[8px]"
                    style={{ color: "#9E9E9E" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FeatureCard>
  </div>
);

export default CoordinatedSequencesCard;
