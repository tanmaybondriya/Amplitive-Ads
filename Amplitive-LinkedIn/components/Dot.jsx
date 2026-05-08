import React from 'react';

const Dot = ({ top, left }) => {
  return (
    <div
      className="absolute rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        width: "12.49px",
        height: "12.49px",
        top: top,
        left: left,
        background: "#FFFFFF14", // Outer circle color
      }}
    >
      {/* Inner solid circle */}
      <div
        className="rounded-full"
        style={{
          width: "6.25px",
          height: "6.25px",
          background: "#FFFFFF", // Inner color
        }}
      />
    </div>
  );
};

export default Dot;