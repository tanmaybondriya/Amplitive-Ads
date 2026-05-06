import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  children?: React.ReactNode;
}

const FeatureCard = ({
  title,
  description,
  icon,
  iconBg,
  children,
}: FeatureProps) => (
  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 flex flex-col h-auto md:h-100 min-h-[373px] md:min-h-0 md:min-w-0">
    <div className="flex items-center pt-2 pl-3 md:pl-3 gap-3 mb-3 md:mb-4">
      <div className={`p-2 rounded-lg ${iconBg} bg-opacity-20`}>{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm mb-5 pl-3 md:pl-5 md:mb-8 max-w-[90%]">
      {description}
    </p>

    <div
      className="absolute inset-0 -z-10 opacity-10 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div className="flex-1 flex items-center justify-center relative w-full mt-auto">
      {children}
    </div>
  </div>
);

export default FeatureCard;
