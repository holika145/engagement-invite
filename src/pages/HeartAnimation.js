import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeartAnimation = () => {
  useEffect(() => {
    // Animate all elements with class 'heart-icon'
    gsap.to(".heart-icon", {
      y: -350,                  // move up by 30px
      rotation: () => gsap.utils.random(-10, 10), // small random rotation
      scale: () => gsap.utils.random(0.9, 1.2),   // slight random scale
      duration: () => gsap.utils.random(2, 3),    // slow duration
      ease: "power1.inOut",
      stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <span className="heart-icon text-pink-400 text-xl">💖</span>
      <span className="heart-icon text-red-500 text-lg">💘</span>
      <span className="heart-icon text-pink-300 text-md">❤️</span>
      <span className="heart-icon text-pink-300 text-sm">❤️</span>
      <span className="heart-icon text-pink-300 text-md">❤️</span>
      <span className="heart-icon text-pink-300 text-lg">❤️</span>
      <span className="heart-icon text-pink-300 text-xl">❤️</span>
    </div>
  );
};

export default HeartAnimation;
