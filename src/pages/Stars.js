import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Stars = ({ count = 50 }) => {
  const starRefs = useRef([]);

  useEffect(() => {
    starRefs.current.forEach((star, i) => {
      gsap.to(star, {
        y: "-=10", // move up 10px
        opacity: Math.random() * 0.5 + 0.5, // random opacity for twinkle
        duration: Math.random() * 1 + 1, // random duration
        repeat: -1, // infinite
        yoyo: true, // back and forth
        ease: "sine.inOut",
        delay: Math.random() * 2, // staggered start
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          ref={(el) => (starRefs.current[i] = el)}
          className="absolute text-yellow-200 text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
};

export default Stars;
