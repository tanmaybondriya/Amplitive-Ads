import FeatureCard from "../FeatureCard";

function ProspectingCard() {
  return (
    <div
      className="rounded-[8.4px] p-[4.2px]"
      style={{
        background: "#FFFFFF29",
        boxShadow: "0px 4px 22px 0px #75BAFF38",
      }}
    >
      <div className="rounded-[7px] bg-white px-4 py-3 flex flex-col gap-3">
        <span
          className="font-urbanist font-medium text-[10px]"
          style={{ color: "#7D7D7D" }}
        >
          Prospecting
        </span>
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="4" fill="#0A66C2" />
              <path
                d="M9.5 11.5V19.5M9.5 8.5V8.51M14 19.5V15C14 13.6193 15.1193 12.5 16.5 12.5C17.8807 12.5 19 13.6193 19 15V19.5M14 19.5V11.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="9.5"
                cy="8.5"
                r="0.5"
                fill="white"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
            <span
              className="font-urbanist font-medium text-[11px]"
              style={{ color: "#1F1F1F" }}
            >
              LinkedIn
            </span>
          </div>

          {/* Divider */}
          <div
            style={{ width: "1px", height: "20px", background: "#ECECED" }}
          />

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="4" fill="url(#email_grad)" />
              <path
                d="M8 10h12v10H8z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M8 10l6 5 6-5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="email_grad"
                  x1="28"
                  y1="0"
                  x2="0"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFA9CF" />
                  <stop offset="1" stopColor="#C62943" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="font-urbanist font-medium text-[11px]"
              style={{ color: "#1F1F1F" }}
            >
              Email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectedBox() {
  return (
    <div
      className="flex items-center gap-2 px-5 py-3 rounded-[10px]"
      style={{
        background: "#0000001F",
        border: "0.84px solid #FFFFFF1A",
        boxShadow: `
          4.18px 4.18px 37.61px 0px #75BAFF1F inset,
          4.18px 4.18px 37.61px 0px #5BEC710D inset,
          0px 4.18px 18.81px 0px #75BAFF1F
        `,
        backdropFilter: "blur(10.45px)",
      }}
    >
      <span className="font-urbanist font-semibold text-[14px] text-white">
        Connected
      </span>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path
          d="M8.48047 11.0225C8.8446 11.5093 9.30916 11.9121 9.84265 12.2036C10.3761 12.495 10.9661 12.6684 11.5724 12.7118C12.1788 12.7552 12.7874 12.6677 13.357 12.4553C13.9265 12.2428 14.4438 11.9103 14.8736 11.4804L17.4172 8.93671C18.1895 8.13714 18.6168 7.06625 18.6071 5.95468C18.5975 4.84311 18.1516 3.77981 17.3656 2.99378C16.5796 2.20775 15.5162 1.76189 14.4047 1.75224C13.2931 1.74258 12.2222 2.16989 11.4226 2.94214L9.96427 4.39203"
          stroke="#5BEC71"
          strokeWidth="1.69578"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.869 9.32682C11.5049 8.84002 11.0403 8.43723 10.5068 8.14576C9.97334 7.85429 9.38341 7.68097 8.77705 7.63754C8.17068 7.59411 7.56207 7.6816 6.9925 7.89407C6.42292 8.10654 5.9057 8.43902 5.47592 8.86896L2.93225 11.4126C2.16 12.2122 1.73269 13.2831 1.74235 14.3947C1.75201 15.5062 2.19786 16.5695 2.98389 17.3556C3.76992 18.1416 4.83323 18.5874 5.94479 18.5971C7.05636 18.6068 8.12726 18.1795 8.92683 17.4072L10.3767 15.9573"
          stroke="#5BEC71"
          strokeWidth="1.69578"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CRMCard() {
  return (
    <div
      className="rounded-[8.4px] p-[4.2px]"
      style={{
        background: "#FFFFFF29",
        boxShadow: "0px 4px 22px 0px #75BAFF38",
      }}
    >
      <div className="rounded-[7px] bg-white px-4 py-3 flex flex-col gap-3">
        <span
          className="font-urbanist font-medium text-[10px]"
          style={{ color: "#7D7D7D" }}
        >
          Your CRM
        </span>
        <div className="flex items-center gap-2">
          {/* Amplitive icon — teal/blue square app icon */}
          <div
            className="w-7 h-7 rounded-[5px] flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #2EB0D7 0%, #0F72D7 100%)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="4"
                width="12"
                height="8"
                rx="1.5"
                stroke="white"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M5 8h6M5 10.5h3"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            className="font-urbanist font-medium text-[11px]"
            style={{ color: "#1F1F1F" }}
          >
            Amplitive
          </span>
        </div>
      </div>
    </div>
  );
}

const PipelineConnectionCard = () => (
  <div className="rounded-3xl overflow-hidden">
    <FeatureCard
      title="Pipeline Connection"
      description="Move prospecting activity into CRM workflows without recreating context elsewhere."
      icon={
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <rect width="38" height="38" rx="5.4" fill="url(#pipe_icon_grad)" />
          <path
            d="M16.48 20.02C16.844 20.51 17.31 20.91 17.843 21.2C18.376 21.49 18.966 21.67 19.572 21.71C20.179 21.75 20.787 21.67 21.357 21.46C21.927 21.24 22.444 20.91 22.874 20.48L25.417 17.94C26.19 17.14 26.617 16.07 26.607 14.95C26.598 13.84 26.152 12.78 25.366 11.99C24.58 11.21 23.516 10.76 22.405 10.75C21.293 10.74 20.222 11.17 19.423 11.94L17.964 13.39"
            stroke="white"
            strokeWidth="1.69578"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.869 18.33C19.505 17.84 19.04 17.44 18.507 17.15C17.973 16.85 17.383 16.68 16.777 16.64C16.171 16.59 15.562 16.68 14.993 16.89C14.423 17.11 13.906 17.44 13.476 17.87L10.932 20.41C10.16 21.21 9.733 22.28 9.742 23.39C9.752 24.51 10.198 25.57 10.984 26.36C11.77 27.14 12.833 27.59 13.945 27.6C15.056 27.61 16.127 27.18 16.927 26.41L18.377 24.96"
            stroke="white"
            strokeWidth="1.69578"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="pipe_icon_grad"
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
      {/* Grid background — bottom right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none w-[58%] h-[58%] md:w-[70%] md:h-[120%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at 100% 100%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 100%, black, transparent 80%)",
        }}
      />

      {/* Layout */}
      <div className="relative w-full flex flex-col items-start gap-4 px-4 pb-4 scale-[0.82] origin-bottom-left md:scale-[0.88] lg:scale-[0.92] -mb-4">
        {/* Top row: Prospecting card + dashed line going right */}
        <div className="flex items-center gap-0">
          <ProspectingCard />
        </div>

        {/* Middle row: dashed bracket left + Connected box + dashed line right + CRM card */}
        <div className="flex items-center gap-3 ml-2">
          {/* Left dashed bracket (vertical + horizontal) */}
          <svg
            width="80"
            height="60"
            viewBox="0 0 80 60"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M80 10 H20 V50 H80"
              stroke="#5BEC71"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <ConnectedBox />

          {/* Right dashed line */}
          <svg
            width="60"
            height="2"
            viewBox="0 0 60 2"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M0 1 H60"
              stroke="#5BEC71"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
          </svg>

          <CRMCard />
        </div>
      </div>
    </FeatureCard>
  </div>
);

export default PipelineConnectionCard;
