import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerAnimation = () => {
  const titleRef = useRef(null);
  const lightsRef = useRef([]);
  const coupleRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Title animation
    gsap.fromTo(
      titleRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Hanging lights animation
    gsap.to(lightsRef.current, {
      opacity: 0.2,
      yoyo: true,
      repeat: -1,
      duration: 1.2,
      stagger: 0.2,
    });

    // Couple bounce
    gsap.fromTo(
      coupleRef.current,
      { scale: 0.8 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#0b1a3a]">
      <div className="relative w-[360px] h-[640px] rounded-[30px] border-4 border-[#f3cfa4] text-white overflow-hidden">

        {/* Hanging Lights */}
        <div className="absolute top-0 w-full flex justify-around">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (lightsRef.current[i] = el)}
              className="w-[2px] h-24 bg-yellow-300 opacity-70"
            />
          ))}
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute text-yellow-200 text-xs animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              ✨
            </span>
          ))}
        </div>

        {/* Content */}
        <div
          ref={titleRef}
          className="relative z-10 text-center px-6 pt-20 space-y-3"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-serif">Sangeet & Engagement</h2>

          <p className="text-xs italic text-gray-200">
            The fitting of this ring with its unending circle symbolize our everlasting love
          </p>

          <h1 className="text-2xl font-serif">Shweta Weds Udit</h1>

          <p className="tracking-widest text-sm">JAN | 29 | 2024</p>
          <p className="text-xs">7 PM ONWARDS</p>
          <p className="text-xs uppercase">At Ball Room</p>
        </div>

        {/* Couple Icon */}
        <div
          ref={coupleRef}
          className="absolute bottom-28 w-full flex justify-center text-6xl"
        >
          👩‍❤️‍👨
        </div>

        {/* Floor */}
        <div className="absolute bottom-0 w-full h-20 bg-white/10 rounded-t-full" />
      </div>
    </div>
  );
};

export default BannerAnimation;