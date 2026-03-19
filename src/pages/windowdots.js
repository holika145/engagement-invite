import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BannerAnimation from "./BannerAnimation";

const WindowWrapper = () => {
  const windowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      windowRef.current,
      {
        scale: 0,
        opacity: 0,
        y: 80,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "back.out(1.7)", // CARTOON FEEL
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a3a] flex items-center justify-center">
      <div
        ref={windowRef}
        className="w-[390px] bg-[#1a2b52] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
      >
        {/* Cartoon Title Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#243b6b]">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <p className="ml-3 text-xs text-gray-200">
            Engagement Invitation
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-[#0b1a3a]">
          <BannerAnimation />
        </div>
      </div>
    </div>
  );
};

export default WindowWrapper;