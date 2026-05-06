import React, { ReactNode } from "react";

interface GlassBadgeProps {
  top: string;
  left: string;
  width?: string;
  height?: string;
  children: ReactNode;
}

const GlassBadge: React.FC<GlassBadgeProps> = ({
  top,
  left,
  width = "93.99px",
  height = "33.74px",
  children,
}) => {
  return (
    <div
      className="absolute z-30 flex items-center justify-center"
      style={{
        width,
        height,
        top,
        left,
        borderRadius: "124.94px",
        // Multi-layer glass background: subtle white tint + soft inner glow
        background: `
          linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.06) 40%,
            rgba(255, 255, 255, 0.10) 100%
          )
        `,
        // Layered border: top-edge specular highlight + outer ring
        border: "1px solid rgba(255, 255, 255, 0.22)",
        // Apple uses multiple box-shadow layers for depth
        boxShadow: `
          0 0 0 0.5px rgba(255, 255, 255, 0.08) inset,
          0 1px 0 0 rgba(255, 255, 255, 0.30) inset,
          0 -0.5px 0 0 rgba(0, 0, 0, 0.12) inset,
          0 4px 16px rgba(0, 0, 0, 0.18),
          0 1.5px 4px rgba(0, 0, 0, 0.12)
        `,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        gap: "15.62px",
        padding: "9.37px 12.49px",
        // Subtle noise texture via SVG filter reference
        isolation: "isolate",
      }}
    >
      {/* Top specular highlight — the thin bright rim Apple uses */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "124.94px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.00) 45%)",
          pointerEvents: "none",
        }}
      />

      <span
        style={{
          width: "66px",
          height: "15px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          color: "rgba(255, 255, 255, 0.92)",
          lineHeight: "100%",
          textAlign: "center",
          letterSpacing: "0.01em",
          // Subtle text shadow to lift text off glass
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export default GlassBadge;
