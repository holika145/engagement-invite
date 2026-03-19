import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BannerAnimation from "./BannerAnimation";

const WindowWrapper = () => {
  const windowRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Window pop-in
    tl.fromTo(
      windowRef.current,
      { scale: 0.7, opacity: 0, y: 100 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.8)",
      }
    )

      // Glow appears
      .fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.4"
      )

      // Left door swing
      .to(leftDoorRef.current, {
        rotationY: -110,
        transformOrigin: "left top",
        duration: 1.3,
        ease: "power3.inOut",
      })

      // Right door swing
      .to(
        rightDoorRef.current,
        {
          rotationY: 110,
          transformOrigin: "right top",
          duration: 1.3,
          ease: "power3.inOut",
        },
        "<"
      )

      // Reveal content
      .fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <div className="bg-[#0b1a3a] flex items-center justify-center">
      <div
        ref={windowRef}
        className="relative w-[390px] h-[700px] rounded-3xl overflow-hidden
        "
      >
        {/* Title Bar */}
        {/* <div className="flex items-center gap-2 px-4 py-2 bg-[#243b6b]">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <p className="ml-3 text-xs text-gray-200">
            Royal Engagement Invitation
          </p>
        </div> */}

        {/* Glow Behind Doors */}
        <div
          ref={glowRef}
          className="absolute inset-0 bg-gradient-radial from-[#f3cfa4]/30
          via-transparent to-transparent opacity-0"
        />

        {/* Doors Container */}
        <div className="absolute inset-0 flex z-20 pointer-events-none">
          {/* LEFT DOOR */}
          <div
            ref={leftDoorRef}
            className="relative w-1/2 bg-gradient-to-b
            from-[#162a55] to-[#0b1a3a]
            border-r-2 border-[#f3cfa4]"
          >
            {/* Door Decoration */}
            <div className="absolute inset-4 border border-[#f3cfa4]/50 rounded-xl" />
            <div className="absolute top-1/2 right-4 w-3 h-3 bg-[#f3cfa4] rounded-full" />
          </div>

          {/* RIGHT DOOR */}
          <div
            ref={rightDoorRef}
            className="relative w-1/2 bg-gradient-to-b
            from-[#162a55] to-[#0b1a3a]
            border-l-2 border-[#f3cfa4]"
          >
            {/* Door Decoration */}
            <div className="absolute inset-4 border border-[#f3cfa4]/50 rounded-xl" />
            <div className="absolute top-1/2 left-4 w-3 h-3 bg-[#f3cfa4] rounded-full" />
          </div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="relative z-10">
          <BannerAnimation />
        </div>
      </div>
    </div>
  );
};

export default WindowWrapper;