import React from "react";

const RosePetals = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 text-rose-500 animate-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
            fontSize: `${Math.random() * 16 + 16}px`,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
};

export default RosePetals;
