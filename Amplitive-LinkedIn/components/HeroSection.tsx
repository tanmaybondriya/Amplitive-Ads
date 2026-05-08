"use client";
import { useState } from "react";
import Dot from "./Dot";

type SendEmailVariant = "orange" | "blue";

const SEND_EMAIL_VARIANTS = {
  orange: {
    outerGradient:
      "linear-gradient(201.99deg, rgba(255, 221, 188, 0.344) 7.19%, rgba(255, 160, 118, 0.8) 118.31%)",
    iconGradientStart: "#FFCC9C",
    iconGradientEnd: "#FF755F",
    titleColor: "#FF8853",
  },
  blue: {
    outerGradient:
      "linear-gradient(201.99deg, rgba(239, 247, 255, 0.8) 7.19%, rgba(165, 201, 255, 0.8) 118.31%)",
    iconGradientStart: "#B6DAFF",
    iconGradientEnd: "#63A2FF",
    titleColor: "#0F72D7",
  },
};

//Start box
function StartBox() {
  return (
    <div
      className="inline-flex items-center gap-3 px-6 py-[12px] rounded-[14px]"
      style={{
        background: "#0000001F",
        border: "1.15px solid #FFFFFF1A",
        boxShadow: `
          5.77px 5.77px 51.9px 0px #75BAFF1F inset,
          5.77px 5.77px 51.9px 0px #5BEC710D inset,
          0px 5.77px 25.95px 0px #75BAFF1F
        `,
        backdropFilter: "blur(14.416px)",
      }}
    >
      {/* Pointer icon */}
      <svg
        width="35"
        height="35"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.60938 6.61099L18.2944 34.7079L22.4428 22.494L34.7062 18.296L6.60938 6.61099Z"
          stroke="white"
          strokeWidth="3.30551"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Divider */}
      <div className="h-9 w-[1.13px] bg-[#D9DADB]" />

      {/* Text */}
      <div className="flex flex-col gap-1">
        <span className="font-urbanist font-medium text-[17px] text-white text-left leading-tight">
          Start
        </span>
        <span className="font-urbanist font-regular text-[13px] text-white/55 leading-tight">
          "When clicking"
        </span>
      </div>
    </div>
  );
}

function ActiveCampaignsBox() {
  return (
    <div
      className="rounded-[9.33px] p-[3px] min-w-[140px]"
      style={{
        background: "#FFFFFF26",
        boxShadow: "0px 4px 22px 0px #75BAFF73",
      }}
    >
      {/* Inner box */}
      <div
        className="rounded-[8.33px] px-3 py-2 flex items-center gap-2.5"
        style={{
          background:
            "linear-gradient(60.63deg, rgba(255, 175, 163, 0.42) -8.01%, rgba(255, 230, 207, 0.42) 90.19%)",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="23.8979"
            height="23.8979"
            rx="3.58468"
            fill="url(#paint0_linear_303_42542)"
          />
          <g clipPath="url(#clip0_303_42542)">
            <path
              d="M16.9223 9.45959L12.6904 13.6915L10.201 11.2021L6.96484 14.4383"
              stroke="white"
              strokeWidth="0.995744"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9375 9.45959H16.9247V12.4468"
              stroke="white"
              strokeWidth="0.995744"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_303_42542"
              x1="23.8979"
              y1="-7.56725e-07"
              x2="2.98723"
              y2="25.3915"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFCC9C" />
              <stop offset="1" stopColor="#FF755F" />
            </linearGradient>
            <clipPath id="clip0_303_42542">
              <rect
                width="11.9489"
                height="11.9489"
                fill="white"
                transform="translate(5.97266 5.97446)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Text */}
        <div className="flex flex-col gap-0.5">
          <span
            className="font-urbanist font-medium text-[8px] leading-tight"
            style={{ color: "#3E3E3E" }}
          >
            Active Campaigns
          </span>
          <span
            className="font-urbanist font-medium text-[12px] text-left leading-tight"
            style={{ color: "#3E3E3E" }}
          >
            12
          </span>
        </div>
      </div>
    </div>
  );
}

function Toggle({ defaultOn = true }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className="relative flex items-center flex-shrink-0"
      style={{
        width: "42px",
        height: "24px",
        borderRadius: "82.9px",
        padding: "2.07px",
        background: on
          ? "linear-gradient(214.51deg, #CCFFD4 7.64%, #2EB0D7 94.91%)"
          : "#E0E0E0",
        transition: "background 0.2s",
      }}
    >
      <div
        className="absolute bg-white rounded-full shadow-sm"
        style={{
          width: "19px",
          height: "19px",
          top: "2.5px",
          left: on ? "calc(100% - 21.5px)" : "2.5px",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

function EmailRow({ label, name }: { label: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* A/B label box */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "4px",
          padding: "2px",
          background: "#F8F8FA",
        }}
      >
        <span
          className="font-urbanist text-center text-[12px]"
          style={{ fontWeight: 500, color: "#3E3E3E" }}
        >
          {label}
        </span>
      </div>

      {/* Email name */}
      <span
        className="font-urbanist text-[14px] flex-1"
        style={{ fontWeight: 400, color: "#3E3E3E" }}
      >
        {name}
      </span>

      {/* 50% badge */}
      <div
        className="flex items-center justify-center"
        style={{
          padding: "3px 10px",
          borderRadius: "6px",
          background: "#F8F8FA",
        }}
      >
        <span
          className="font-urbanist text-[12px]"
          style={{ fontWeight: 400, color: "#818285" }}
        >
          50%
        </span>
      </div>

      {/* Toggle */}
      <Toggle defaultOn={true} />

      {/* Delete icon */}
      <button className="flex-shrink-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4H14"
            stroke="#C7C7CA"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6693 4V13.3333C12.6693 14 12.0026 14.6667 11.3359 14.6667H4.66927C4.0026 14.6667 3.33594 14 3.33594 13.3333V4"
            stroke="#C7C7CA"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33594 3.99998V2.66665C5.33594 1.99998 6.0026 1.33331 6.66927 1.33331H9.33594C10.0026 1.33331 10.6693 1.99998 10.6693 2.66665V3.99998"
            stroke="#C7C7CA"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66406 7.33331V11.3333"
            stroke="#C7C7CA"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33594 7.33331V11.3333"
            stroke="#C7C7CA"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function SendEmailCard({ variant = "orange" }: { variant?: SendEmailVariant }) {
  const v = SEND_EMAIL_VARIANTS[variant];
  const gradientId = `email_icon_grad_${variant}`;

  return (
    <div
      style={{
        borderRadius: "14px",
        padding: "6px",
        gap: "6px",
        backgroundColor: "#FFFFFF",
        backgroundImage: v.outerGradient,
        boxShadow: "0px 4px 22px 0px #75BAFF59",
      }}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 px-2 py-1">
        {/* Email icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" rx="3" fill={`url(#${gradientId})`} />
          <g clipPath="url(#clip0_303_42443)">
            <path
              d="M13.332 6.66667H6.66536C6.20513 6.66667 5.83203 7.03977 5.83203 7.50001V12.5C5.83203 12.9602 6.20513 13.3333 6.66536 13.3333H13.332C13.7923 13.3333 14.1654 12.9602 14.1654 12.5V7.50001C14.1654 7.03977 13.7923 6.66667 13.332 6.66667Z"
              stroke="white"
              strokeWidth="0.833333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1654 7.91667L10.4279 10.2917C10.2992 10.3723 10.1505 10.415 9.9987 10.415C9.8469 10.415 9.69817 10.3723 9.56953 10.2917L5.83203 7.91667"
              stroke="white"
              strokeWidth="0.833333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id={gradientId} // ← use dynamic ID here too
              x1={variant === "blue" ? "16.25" : "20"}
              y1="-6.33299e-07"
              x2="2.5"
              y2={variant === "blue" ? "20" : "21.25"}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={v.iconGradientStart} />
              <stop offset="1" stopColor={v.iconGradientEnd} />
            </linearGradient>
            <clipPath id="clip0_303_42443">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(5 5)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Send Email title */}
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "100%",
            color: v.titleColor,
          }}
        >
          Send Email
        </span>
      </div>

      {/* Inner white box */}
      <div
        className="flex flex-col"
        style={{
          borderRadius: "14px",
          paddingTop: "12px",
          paddingRight: "22px",
          paddingBottom: "12px",
          paddingLeft: "22px",
          gap: "22px",
          background: "#FFFFFF",
        }}
      >
        <EmailRow label="A" name="Email 1" />
        <EmailRow label="B" name="Email 2" />

        {/* Add variant + Settings */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              style={{
                color: "#0F72D7",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              +
            </span>
            <span
              className="font-urbanist text-[13px]"
              style={{ fontWeight: 500, color: "#0F72D7" }}
            >
              Add variant
            </span>
          </div>

          {/* Settings icon */}
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14276 1.33334H7.84943C7.49581 1.33334 7.15667 1.47382 6.90662 1.72387C6.65657 1.97392 6.51609 2.31305 6.51609 2.66668V2.78668C6.51586 3.02049 6.45413 3.25014 6.33712 3.45257C6.22011 3.655 6.05192 3.8231 5.84943 3.94001L5.56276 4.10668C5.36007 4.2237 5.13014 4.28531 4.8961 4.28531C4.66205 4.28531 4.43212 4.2237 4.22943 4.10668L4.12943 4.05334C3.82347 3.87685 3.45999 3.82897 3.11876 3.92022C2.77754 4.01146 2.48646 4.23437 2.30943 4.54001L2.16276 4.79334C1.98627 5.0993 1.93839 5.46279 2.02963 5.80401C2.12088 6.14523 2.34379 6.43631 2.64943 6.61334L2.74943 6.68001C2.95095 6.79635 3.11851 6.9634 3.23546 7.16456C3.35242 7.36573 3.41469 7.59399 3.4161 7.82668V8.16668C3.41703 8.40162 3.35586 8.63264 3.23879 8.83635C3.12172 9.04005 2.9529 9.2092 2.74943 9.32668L2.64943 9.38668C2.34379 9.56371 2.12088 9.85479 2.02963 10.196C1.93839 10.5372 1.98627 10.9007 2.16276 11.2067L2.30943 11.46C2.48646 11.7657 2.77754 11.9886 3.11876 12.0798C3.45999 12.171 3.82347 12.1232 4.12943 11.9467L4.22943 11.8933C4.43212 11.7763 4.66205 11.7147 4.8961 11.7147C5.13014 11.7147 5.36007 11.7763 5.56276 11.8933L5.84943 12.06C6.05192 12.1769 6.22011 12.345 6.33712 12.5475C6.45413 12.7499 6.51586 12.9795 6.51609 13.2133V13.3333C6.51609 13.687 6.65657 14.0261 6.90662 14.2762C7.15667 14.5262 7.49581 14.6667 7.84943 14.6667H8.14276C8.49638 14.6667 8.83552 14.5262 9.08557 14.2762C9.33562 14.0261 9.4761 13.687 9.4761 13.3333V13.2133C9.47634 12.9795 9.53806 12.7499 9.65507 12.5475C9.77208 12.345 9.94027 12.1769 10.1428 12.06L10.4294 11.8933C10.6321 11.7763 10.862 11.7147 11.0961 11.7147C11.3301 11.7147 11.5601 11.7763 11.7628 11.8933L11.8628 11.9467C12.1687 12.1232 12.5322 12.171 12.8734 12.0798C13.2147 11.9886 13.5057 11.7657 13.6828 11.46L13.8294 11.2C14.0059 10.8941 14.0538 10.5306 13.9626 10.1893C13.8713 9.84812 13.6484 9.55704 13.3428 9.38001L13.2428 9.32668C13.0393 9.2092 12.8705 9.04005 12.7534 8.83635C12.6363 8.63264 12.5752 8.40162 12.5761 8.16668V7.83334C12.5752 7.5984 12.6363 7.36737 12.7534 7.16367C12.8705 6.95997 13.0393 6.79082 13.2428 6.67334L13.3428 6.61334C13.6484 6.43631 13.8713 6.14523 13.9626 5.80401C14.0538 5.46279 14.0059 5.0993 13.8294 4.79334L13.6828 4.54001C13.5057 4.23437 13.2147 4.01146 12.8734 3.92022C12.5322 3.82897 12.1687 3.87685 11.8628 4.05334L11.7628 4.10668C11.5601 4.2237 11.3301 4.28531 11.0961 4.28531C10.862 4.28531 10.6321 4.2237 10.4294 4.10668L10.1428 3.94001C9.94027 3.8231 9.77208 3.655 9.65507 3.45257C9.53806 3.25014 9.47634 3.02049 9.4761 2.78668V2.66668C9.4761 2.31305 9.33562 1.97392 9.08557 1.72387C8.83552 1.47382 8.49638 1.33334 8.14276 1.33334Z"
                stroke="#C7C7CA"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                stroke="#C7C7CA"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
        {/* Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24.543"
            height="24.543"
            rx="3.68145"
            fill="url(#paint0_linear_303_42558)"
          />
          <g clipPath="url(#clip0_303_42558)">
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
              id="paint0_linear_303_42558"
              x1="24.543"
              y1="-1.51773e-06"
              x2="-0.920362"
              y2="24.543"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA9CF" />
              <stop offset="1" stopColor="#C62943" />
            </linearGradient>
            <clipPath id="clip0_303_42558">
              <rect
                width="12.2715"
                height="12.2715"
                fill="white"
                transform="translate(6.13672 6.13574)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Text */}
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

function DelayBox() {
  const [count, setCount] = useState(3);

  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-3"
      style={{
        borderRadius: "12.32px",
        border: "0.99px solid #FFFFFF1A",
        background: "#0000001F",
        boxShadow: `
          4.93px 4.93px 44.36px 0px #75BAFF1F inset,
          4.93px 4.93px 44.36px 0px #5BEC710D inset,
          0px 4.93px 22.18px 0px #75BAFF1F
        `,
        backdropFilter: "blur(12.32px)",
      }}
    >
      {/* Clock icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Divider */}
      <div className="self-stretch w-[0.8px] bg-white/50" />

      {/* Delay label */}
      <span
        className="font-urbanist font-medium text-white text-[14px]"
        style={{ lineHeight: "100%", letterSpacing: "0%" }}
      >
        Delay
      </span>

      {/* Counter box */}
      <div
        className="flex items-center gap-1 px-2  rounded-[4px] bg-white"
        style={{ border: "0.5px solid " }}
      >
        <span
          className="font-urbanist font-normal text-[13px] min-w-[14px] text-center"
          style={{ color: "#3E3E3E", lineHeight: "100%" }}
        >
          {count}
        </span>
        {/* Up/down arrows */}
        <div className="flex flex-col">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="leading-none hover:opacity-70 transition-opacity"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7.5L6 4.5L3 7.5"
                stroke="#7D7D7D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => setCount((c) => Math.max(1, c - 1))}
            className="leading-none hover:opacity-70 transition-opacity"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#7D7D7D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Days + chevron */}
      <div className="flex items-center gap-1">
        <span
          className="font-urbanist font-medium text-white text-[16px]"
          style={{ lineHeight: "100%" }}
        >
          days
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

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
        {/* Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="25.1515"
            height="25.1515"
            rx="3.77273"
            fill="url(#paint0_linear_303_42550)"
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
              id="paint0_linear_303_42550"
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

        {/* Text */}
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

function Route() {
  return (
    <div className="relative" style={{ width: "700px", height: "500px" }}>
      <div className="relative h-full">
        {/* LEFT COLUMN */}
        {/* Active Campaigns - top left */}
        <div className="absolute top-[100px] left-[160px] z-10">
          <ActiveCampaignsBox />
        </div>

        {/* Start - middle left */}
        <div className="absolute top-[230px] left-[80px] scale-[0.9]">
          <StartBox />
        </div>
        {/* Connector: Start → Send Email #1 */}
        <div className="absolute top-[115px] left-[180px]">
          <svg
            width="205"
            height="200"
            viewBox="0 0 220 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 115C1 0 80 1 200 1H205"
              stroke="url(#paint0_linear_303_42509)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_303_42509"
                x1="16.3"
                y1="167.075"
                x2="142.572"
                y2="-41.4382"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5BEC71" />
                <stop offset="0.902778" stopColor="#0F72D7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Dot left={175} top={227} />
        <Dot left={338} top={121} />

        {/* Open Rate placeholder - bottom left */}
        <div className="absolute top-[360px] left-[160px] z-10">
          <OpenRateBox />
        </div>

        {/* MIDDLE COLUMN */}
        {/* Send Email #1 - top middle */}
        <div className="absolute top-[35px] left-[320px] scale-[0.8]">
          <SendEmailCard variant="orange" />
        </div>
        <div className="absolute top-[122px] left-[548px] z-0 rotate-3">
          <svg
            width="103"
            height="150"
            viewBox="0 0 103 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1C59.2432 1 102 43.7568 102 96.5C102 149.243 59.2432 192 6.50001 192H0"
              stroke="url(#paint0_linear_303_42510)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_303_42510"
                x1="7.65"
                y1="218.262"
                x2="175.92"
                y2="112.063"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5BEC71" />
                <stop offset="0.902778" stopColor="#0F72D7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Dot top={115} left={562} />
        <Dot top={263} left={550} />

        {/* Delay - middle */}
        <div className="absolute top-[240px] left-[335px] scale-[0.8]">
          <DelayBox />
        </div>
        {/* Connector: Delay → Open Rate → Send Email #2 */}
        <div className="absolute top-[268px] left-[267px] z-0">
          <svg
            width="104"
            height="160"
            viewBox="0 0 104 202"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88 201.005C39.9512 201.005 0.999988 162.054 0.999992 114.005L0.999993 100.998C0.999998 45.3818 47.3869 0.45971 103 1.00493"
              stroke="url(#paint0_linear_303_42511)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_303_42511"
                x1="95.35"
                y1="-27.6325"
                x2="-77.7028"
                y2="76.1522"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5BEC71" />
                <stop offset="0.902778" stopColor="#0F72D7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Dot top={262} left={351} />
        <Dot top={421} left={338} />

        {/* Send Email #2 - bottom middle */}
        <div className="absolute top-[325px] left-[320px] scale-[0.8]">
          <SendEmailCard variant="blue" />
        </div>

        {/* RIGHT COLUMN */}
        {/* Emails Sent - right */}
        <div className="absolute top-[200px] left-[595px]">
          <EmailsSentCard />
        </div>
      </div>
    </div>
  );
}
// ─── Main export ──────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ── DESKTOP (lg+) ── */}
      <div className="relative w-full z-10 h-auto items-center justify-center hidden lg:flex flex-col items-center text-center px-5 pt-14 pb-8">
        <div className="relative w-full max-w-[1400px] h-[600px] flex items-center justify-between px-20 z-10">
          {/* Left: copy block */}
          <div className="flex-shrink-0 flex flex-col justify-center w-[480px]">
            <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full mb-5 w-max bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-0.5px_0_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.18)] text-[12px] font-medium text-white/90 tracking-wide [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
              LinkedIn + Email Outreach
            </div>
            <h1 className="text-[38px] text-left font-medium leading-[1.2] text-white mb-4">
              Run outbound inside <br />
              your{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#5BEC71] to-[#00A3FF]">
                AI-powered system
              </span>
            </h1>
            <p className="text-[13px] font-light text-left text-white leading-[1.7] max-w-[380px] mb-7">
              Campaigns, contacts, and follow-up stay connected—so your team
              executes without switching tools.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-lg text-[13px] font-medium text-white/90 bg-[#1e2e46] hover:bg-[#2a4060] transition-all border border-white/5 shadow-sm">
                Book Demo
              </button>
              <button className=" flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium text-[#020a16] bg-white hover:bg-gray-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                View Pricing
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
          <Route />
        </div>
      </div>

      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col items-center text-center px-5 pt-14">
        {/* Ads badge */}
        <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full mb-5 bg-white/10 border border-white/20 text-[12px] text-white/80">
          LinkedIn + Email Outreach
        </div>

        {/* Heading */}
        <h1 className="text-[26px] font-medium leading-[1.3] text-white mb-4">
          Run outbound inside your{" "}
          <span className="bg-gradient-to-r from-[#5BEC71] to-[#00A3FF] bg-clip-text text-transparent font-semibold">
            AI-powered system
          </span>
        </h1>

        {/* Description */}
        <p className="text-[13px] text-left text-white/60 leading-[1.7] mb-6 max-w-[320px]">
          Campaigns, contacts, and follow-up stay connected—so your team
          executes without switching tools.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-10">
          <button className="px-4 py-2 rounded-lg text-[12px] text-white bg-[#1e2e46]">
            Book Demo
          </button>
          <button className="px-4 py-2 rounded-lg text-[12px] font-medium text-[#020a16] bg-white flex items-center gap-1">
            View Pricing →
          </button>
        </div>

        {/* Route scaled down */}
        <div
          className="origin-top-center scale-[0.45] sm:scale-[0.65] mr-11"
          style={{ width: "700px", height: "500px" }}
        >
          <Route />
        </div>
      </div>
    </div>
  );
}
