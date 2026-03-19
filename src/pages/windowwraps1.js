import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BannerAnimation from "./BannerAnimation";

const WindowWrapper = () => {
  const windowRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const glowRef = useRef(null);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1️⃣ Window pop-in
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

      // 2️⃣ Glow appears
      .fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.4"
      )

      // 3️⃣ SHOW Banner FIRST
      .call(() => setShowContent(true))

      // 4️⃣ Small delay so banner is visible
      .to({}, { duration: 0.6 })

      // 5️⃣ LEFT door open (not fully – hanging)
      .to(leftDoorRef.current, {
        rotationY: -75,          // 👈 NOT -110
        transformOrigin: "left top",
        duration: 1.3,
        ease: "power3.inOut",
      })

      // 6️⃣ RIGHT door open (not fully)
      .to(
        rightDoorRef.current,
        {
          rotationY: 75,         // 👈 NOT 110
          transformOrigin: "right top",
          duration: 1.3,
          ease: "power3.inOut",
        },
        "<"
      )

      // 7️⃣ CARTOON hanging swing (infinite)
      .to(
        [leftDoorRef.current, rightDoorRef.current],
        {
          rotationZ: i => (i === 0 ? -2 : 2),
          yoyo: true,
          repeat: -1,
          duration: 2,
          ease: "sine.inOut",
        },
        "+=0.2"
      );
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a3a] flex items-center justify-center">
      <div
        ref={windowRef}
        className="relative w-[390px] h-[600px] rounded-3xl overflow-hidden
        border-2 border-[#f3cfa4] bg-[#1a2b52]
        shadow-[0_0_60px_rgba(243,207,164,0.35)]"
      >
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#243b6b]">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <p className="ml-3 text-xs text-gray-200">
            Royal Engagement Invitation
          </p>
        </div>

        {/* Glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 bg-gradient-radial from-[#f3cfa4]/30
          via-transparent to-transparent opacity-0"
        />

        {/* Doors */}
        <div className="absolute inset-0 flex z-20 pointer-events-none">
          {/* LEFT */}
          <div
            ref={leftDoorRef}
            className="relative w-1/2 bg-gradient-to-b
            from-[#162a55] to-[#0b1a3a]
            border-r-2 border-[#f3cfa4]"
          >
            <div className="absolute inset-4 border border-[#f3cfa4]/50 rounded-xl" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2">🪝</div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightDoorRef}
            className="relative w-1/2 bg-gradient-to-b
            from-[#162a55] to-[#0b1a3a]
            border-l-2 border-[#f3cfa4]"
          >
            <div className="absolute inset-4 border border-[#f3cfa4]/50 rounded-xl" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2">🪝</div>
          </div>
        </div>

        {/* CONTENT */}
        {showContent && (
          <div className="relative z-10">
            <BannerAnimation />
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowWrapper;