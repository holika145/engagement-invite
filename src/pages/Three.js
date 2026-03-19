import React, { useState, useEffect } from "react";
import ThreeHeartScratchCards from "./ThreeHeartScratchCards";
import V1 from "../Assets/T5.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Three = () => {
  const [revealed1, setRevealed1] = useState(false);
  const [revealed2, setRevealed2] = useState(false);
  const [revealed3, setRevealed3] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={V1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hearts Row */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-8">

        <div data-aos="fade-up" data-aos-delay="200">
          <ThreeHeartScratchCards
            text={revealed1 ? "04" : ""}
            onReveal={() => setRevealed1(true)}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <ThreeHeartScratchCards
            text={revealed2 ? "April" : ""}
            onReveal={() => setRevealed2(true)}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <ThreeHeartScratchCards
            text={revealed3 ? "2026" : ""}
            onReveal={() => setRevealed3(true)}
          />
        </div>

      </div>
    </div>
  );
};

export default Three;
