import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerAnimation = () => {
  const textRef = useRef(null);
  const lightsRef = useRef([]);
  const coupleRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Text animation
    gsap.fromTo(
      textRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Hanging lights glow
    gsap.to(lightsRef.current, {
      opacity: 0.2,
      yoyo: true,
      repeat: -1,
      duration: 1.3,
      stagger: 0.25,
    });

    // Couple gentle scale
    gsap.fromTo(
      coupleRef.current,
      { scale: 0.9 },
      {
        scale: 1,
        yoyo: true,
        repeat: -1,
        duration: 1.6,
        ease: "power1.inOut",
      }
    );

    // Date pulse
    gsap.fromTo(
      dateRef.current,
      { scale: 0.95 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#0b1a3a]">
      <div className="relative w-[360px] h-[500px] rounded-[30px] border-4 border-[#f3cfa4] text-white overflow-hidden">

        {/* Hanging Lights */}
        {/* <div className="absolute top-0 w-full flex justify-around">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (lightsRef.current[i] = el)}
              className="w-[2px] h-24 bg-yellow-300 opacity-70"
            />
          ))}
        </div> */}
        <div className="absolute top-0 w-full flex justify-evenly z-10">
  {[...Array(6)].map((_, i) => (
    <div
      key={i}
      ref={(el) => (lightsRef.current[i] = el)}
      className="flex flex-col items-center origin-top"
    >
      {/* Wire */}
      <div className="w-[2px] h-20 bg-yellow-200/50" />

      {/* Bulb */}
      <div className="relative mt-1">
        <div className="w-3 h-3 rounded-full bg-yellow-200 shadow-[0_0_12px_4px_rgba(255,215,0,0.7)]" />
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-md" />
      </div>
    </div>
  ))}
</div>

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="absolute text-yellow-200 text-xs animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              💍
            </span>
          ))}
        </div>
        {/* <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute text-yellow-200 text-xs animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              💃
            </span>
          ))}
        </div> */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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

        {/* Text Content */}
        <div
          ref={textRef}
          className="relative z-10 text-center px-6 pt-32 space-y-3"
          data-aos="fade-up"
        >
          <h2 className="text-xl tracking-wide font-serif">
            Engagement Ceremony
          </h2>

          <p className="text-xs italic text-gray-200">
            Two hearts, one promise, and a lifetime of togetherness
          </p>

          <h1 className="text-2xl font-serif tracking-wider">
             Sai Tarun&nbsp;<span className="text-[#f3cfa4]">&</span> Holika
          </h1>

          {/* Date Design */}
          <div
            ref={dateRef}
            className="inline-block mt-3 px-4 py-2 border border-[#f3cfa4] rounded-full text-sm tracking-widest"
          >
            04 • April • 2026
          </div>

          <p className="text-xs mt-2">7:00 PM Onwards</p>
          <p className="text-xs uppercase">At Ball Room</p>
        </div>

        {/* Standing Couple Icon */}
        {/* <div
          ref={coupleRef}
          className="absolute bottom-28 w-full flex justify-center text-6xl"
        >
          🧍‍♀️ 🤵
        </div> */}
        <div
  ref={coupleRef}
  className="absolute bottom-22 w-full  flex justify-center text-[#f3cfa4]"
>
  <span className="text-7xl tracking-wide">
    ♡
  </span>
</div>

        {/* Floor */}
        <div className="absolute bottom-0 w-full h-20 bg-white/10 rounded-t-full" />
      </div>
    </div>
  );
};

export default BannerAnimation;