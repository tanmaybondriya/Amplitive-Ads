import Image from "next/image";
import Owner from "../../public/owner.png";
import Team1 from "../../public/team1.png";
import Team2 from "../../public/team2.png";
import Team3 from "../../public/team3.png";
import FeatureCard from "../FeatureCard";

const CampaignOrganizationCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Outreach Planning"
      description="Structure outbound campaigns with clearer ownership, targets, and workflow control."
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
            fill="url(#campflow_icon_grad)"
          />
          <rect
            x="10"
            y="12"
            width="18"
            height="15"
            rx="2"
            stroke="white"
            strokeWidth="1.67"
            fill="none"
          />
          <line
            x1="10"
            y1="17.5"
            x2="28"
            y2="17.5"
            stroke="white"
            strokeWidth="1.67"
          />
          <line
            x1="15"
            y1="9.5"
            x2="15"
            y2="14"
            stroke="white"
            strokeWidth="1.67"
            strokeLinecap="round"
          />
          <line
            x1="23"
            y1="9.5"
            x2="23"
            y2="14"
            stroke="white"
            strokeWidth="1.67"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="campflow_icon_grad"
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
        className="absolute bottom-0 right-0 pointer-events-none w-[58%] h-[58%] md:w-[70%] md:h-[120%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "left bottom",
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

      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center scale-[0.5] md:scale-[0.60] lg:scale-[0.7]">
          {/* Top row: Outbound Campaign + Target Accounts */}
          <div className="flex items-center gap-[30px]">
            {/* Outbound Campaign card */}
            <div
              className="rounded-[8.4px] p-[4.2px]"
              style={{
                background: "#FFFFFF29",
                boxShadow: "0px 4px 22px 0px #75BAFF38",
              }}
            >
              <div className="rounded-[8.4px] p-3 bg-white flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-urbanist font-medium text-[10px] text-[#1F1F1F]">
                    Outbound Campaign
                  </span>
                  <div
                    className="px-2 py-0.5 rounded-[38.12px]"
                    style={{ background: "#D2FFD9" }}
                  >
                    <span
                      className="font-urbanist font-medium text-[7px]"
                      style={{ color: "#3AC750", lineHeight: "100%" }}
                    >
                      Active
                    </span>
                  </div>
                </div>

                <div style={{ borderTop: "0.56px solid #ECECED" }} />

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={Owner}
                      alt="Owner"
                      className="w-7 h-7 rounded-full object-cover object-center flex-shrink-0"
                    />
                    <div className="flex flex-col">
                      <span
                        className="font-urbanist font-normal text-[7px]"
                        style={{ color: "#3E3E3E" }}
                      >
                        Owner
                      </span>
                      <span
                        className="font-urbanist font-medium text-[8.4px]"
                        style={{ color: "#1F1F1F", lineHeight: "100%" }}
                      >
                        John King
                      </span>
                    </div>
                  </div>

                  <div
                    className="self-stretch"
                    style={{ borderLeft: "0.56px solid #ECECED" }}
                  />

                  <div className="flex flex-col gap-1">
                    <span
                      className="font-urbanist font-normal text-[7px]"
                      style={{ color: "#3E3E3E" }}
                    >
                      Team
                    </span>
                    <div className="flex items-center gap-1">
                      <Image
                        src={Team1}
                        alt="Team member 1"
                        className="w-6 h-6 rounded-full object-cover object-center"
                      />
                      <Image
                        src={Team2}
                        alt="Team member 2"
                        className="w-6 h-6 rounded-full object-cover object-center"
                      />
                      <Image
                        src={Team3}
                        alt="Team member 3"
                        className="w-6 h-6 rounded-full object-cover object-center"
                      />
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "#F5F5F5",
                          borderRadius: "51.33px",
                        }}
                      >
                        <span
                          className="font-urbanist text-[10px]"
                          style={{ color: "#9E9E9E", lineHeight: 1 }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Accounts card */}
            <div
              style={{
                width: "210.7px",
                height: "82px",
                borderRadius: "8.4px",
                padding: "4.2px",
                background: "#FFFFFF29",
                boxShadow: "0px 4px 22px 0px #75BAFF38",
                flexShrink: 0,
              }}
            >
              {/* Inner white box */}
              <div
                style={{
                  borderRadius: "8.4px",
                  padding: "15.4px",
                  background: "#FFFFFF",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "18.2px",
                  boxSizing: "border-box",
                }}
              >
                {/* Icon + text content (140.7px wide) */}
                <div
                  style={{
                    width: "140.7px",
                    height: "42.8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "11.2px",
                    flexShrink: 0,
                  }}
                >
                  {/* Gradient target icon */}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <rect
                      width="33.6"
                      height="33.6"
                      rx="4.32"
                      fill="url(#target_accounts_grad)"
                    />
                    <g clipPath="url(#target_accounts_clip)">
                      <path
                        d="M16.7969 24.7999C21.2152 24.7999 24.7969 21.2182 24.7969 16.7999C24.7969 12.3816 21.2152 8.79993 16.7969 8.79993C12.3786 8.79993 8.79688 12.3816 8.79688 16.7999C8.79688 21.2182 12.3786 24.7999 16.7969 24.7999Z"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7961 21.6C19.4471 21.6 21.5961 19.451 21.5961 16.8C21.5961 14.149 19.4471 12 16.7961 12C14.1451 12 11.9961 14.149 11.9961 16.8C11.9961 19.451 14.1451 21.6 16.7961 21.6Z"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7953 18.4C17.679 18.4 18.3953 17.6836 18.3953 16.8C18.3953 17.6836 17.679 15.2 16.7953 15.2C15.9117 15.2 15.1953 15.9163 15.1953 16.8C15.1953 17.6836 15.9117 18.4 16.7953 18.4Z"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="target_accounts_grad"
                        x1="27.3"
                        y1="-1.4551e-06"
                        x2="4.2"
                        y2="33.6"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#CCFFD4" />
                        <stop offset="1" stopColor="#2EB0D7" />
                      </linearGradient>
                      <clipPath id="target_accounts_clip">
                        <rect
                          width="19.2"
                          height="19.2"
                          fill="white"
                          transform="translate(7.19922 7.19995)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* Text rows */}
                  <div
                    style={{
                      width: "95.9px",
                      height: "42.8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.4px",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        fontWeight: 400,
                        fontSize: "8.4px",
                        lineHeight: "100%",
                        color: "#7D7D7D",
                        height: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Target Accounts
                    </span>
                    <span
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        fontWeight: 700,
                        fontSize: "16.8px",
                        lineHeight: "100%",
                        color: "#5BEC71",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      120
                    </span>
                    <span
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        fontWeight: 400,
                        fontSize: "8.4px",
                        lineHeight: "100%",
                        color: "#7D7D7D",
                        height: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Ideal Customer Profile
                    </span>
                  </div>
                </div>

                {/* Users icon */}
                <svg
                  width="12.6"
                  height="12.6"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M8.40078 11.025V9.975C8.40078 9.41805 8.17953 8.8839 7.78571 8.49008C7.39188 8.09625 6.85774 7.875 6.30078 7.875H3.15078C2.59383 7.875 2.05968 8.09625 1.66586 8.49008C1.27203 8.8839 1.05078 9.41805 1.05078 9.975V11.025"
                    stroke="#818285"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.725 5.77495C5.8848 5.77495 6.825 4.83475 6.825 3.67495C6.825 2.51515 5.8848 1.57495 4.725 1.57495C3.5652 1.57495 2.625 2.51515 2.625 3.67495C2.625 4.83475 3.5652 5.77495 4.725 5.77495Z"
                    stroke="#818285"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5516 11.025V9.97499C11.5512 9.50969 11.3963 9.05769 11.1113 8.68995C10.8262 8.32221 10.4271 8.05956 9.97656 7.94324"
                    stroke="#818285"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.39844 1.64331C8.85016 1.75897 9.25053 2.02168 9.53645 2.39002C9.82236 2.75837 9.97756 3.2114 9.97756 3.67769C9.97756 4.14397 9.82236 4.597 9.53645 4.96535C9.25053 5.33369 8.85016 5.5964 8.39844 5.71206"
                    stroke="#818285"
                    strokeWidth="1.05"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Dashed connector lines */}
          <div>
            <svg
              width="285"
              height="40"
              viewBox="0 0 285 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.398438 11.9V27.4C0.398438 34.0274 5.77102 39.4 12.3984 39.4H272.398C279.026 39.4 284.398 34.0274 284.398 27.4V0.400024"
                stroke="url(#paint0_linear_303_42648)"
                stroke-width="0.8"
                stroke-linecap="square"
                stroke-dasharray="6 6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_303_42648"
                  x1="21.6984"
                  y1="44.7625"
                  x2="30.4261"
                  y2="-30.3483"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5BEC71" />
                  <stop offset="0.902778" stop-color="#0F72D7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Overall Process card */}
          <div
            style={{
              width: "192.836px",
              height: "88.8px",
              borderRadius: "8.4px",
              padding: "4.2px",
              background: "#FFFFFF29",
              boxShadow: "0px 4px 22px 0px #75BAFF38",
              boxSizing: "border-box",
            }}
          >
            {/* Inner white box */}
            <div
              style={{
                borderRadius: "8.4px",
                padding: "15.4px",
                background: "#FFFFFF",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "30.8px",
                boxSizing: "border-box",
              }}
            >
              {/* Left text column */}
              <div
                style={{
                  width: "75px",
                  height: "49.6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.8px",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontSize: "9.8px",
                    lineHeight: "100%",
                    color: "#3E3E3E",
                    height: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Overall Process
                </span>
                <span
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "#8C48E6",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  62%
                </span>
                <span
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 400,
                    fontSize: "8.4px",
                    lineHeight: "100%",
                    color: "#7D7D7D",
                    height: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  65 of 120 completed
                </span>
              </div>

              {/* Progress ring SVG */}
              <svg
                width="47.836"
                height="48.032"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M23.9189 48.0317C17.5757 48.0317 11.4923 45.5119 7.00699 41.0266C2.52168 36.5413 0.00185166 30.4579 0.00184459 24.1147C0.00183751 17.7715 2.52165 11.6881 7.00695 7.20281C11.4923 2.71749 17.5756 0.197656 23.9188 0.197641L23.9189 7.38198C19.4811 7.38199 15.225 9.1449 12.0871 12.2829C8.94907 15.4209 7.18618 19.6769 7.18618 24.1147C7.18619 28.5525 8.94909 32.8085 12.0871 35.9465C15.2251 39.0845 19.4811 40.8474 23.9189 40.8474L23.9189 48.0317Z"
                  fill="#CDCDCD"
                  fillOpacity="0.3"
                />
                <path
                  d="M23.917 0C27.6366 4.43556e-08 31.3049 0.867549 34.6305 2.53371C37.956 4.19986 40.8471 6.6187 43.074 9.59799C45.3009 12.5773 46.8023 16.0349 47.4587 19.6961C48.1151 23.3573 47.9086 27.1212 46.8555 30.6886C45.8024 34.256 43.9317 37.5285 41.3922 40.2463C38.8527 42.964 35.7143 45.052 32.2264 46.3443C28.7385 47.6365 24.9973 48.0975 21.3 47.6905C17.6028 47.2835 14.0514 46.0198 10.9282 43.9997L14.9514 37.7792C17.1073 39.1735 19.5586 40.0458 22.1106 40.3268C24.6627 40.6077 27.2451 40.2895 29.6526 39.3975C32.0601 38.5055 34.2264 37.0643 35.9793 35.1884C37.7323 33.3124 39.0235 31.0535 39.7504 28.5911C40.4773 26.1287 40.6199 23.5307 40.1668 21.0035C39.7136 18.4764 38.6774 16.0897 37.1402 14.0333C35.6031 11.9768 33.6075 10.3072 31.312 9.15711C29.0166 8.00704 26.4845 7.40821 23.917 7.40821V0Z"
                  fill="url(#overall_process_grad)"
                />
                <defs>
                  <linearGradient
                    id="overall_process_grad"
                    x1="47.8341"
                    y1="-2.95805e-06"
                    x2="-1.79378"
                    y2="47.8341"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B8A4FF" />
                    <stop offset="1" stopColor="#6B31B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </FeatureCard>
  </div>
);

export default CampaignOrganizationCard;
