import React, { useEffect } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../Assets/T3.jpeg";

const AnimatedText = ({ text, type = "up", delayOffset = 0 }) => {
  return (
    <h2 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex flex-wrap justify-center">
      {text.split("").map((char, index) => {
        const fadeType = type === "up" ? "fade-up" :
                         type === "down" ? "fade-down" :
                         type === "left" ? "fade-left" : "fade-right";
        return (
          <span
            key={index}
            className="inline-block"
            data-aos={fadeType}
            data-aos-delay={index * 50 + delayOffset}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h2>
  );
};

const AnimatText = ({ text, type = "up", delayOffset = 0 }) => {
  return (
    <h2 className="text-white text-center text-3xl font-semibold flex flex-wrap justify-center">
      {text.split("").map((char, index) => {
        const fadeType =
          type === "up"
            ? "fade-up"
            : type === "down"
            ? "fade-down"
            : type === "left"
            ? "fade-left"
            : "fade-right";

        return (
          <span
            key={index}
            className="inline-block mx-[2.2px]" // <-- small space between letters
            data-aos={fadeType}
            data-aos-delay={index * 50 + delayOffset}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h2>
  );
};


const Two = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    gsap.from(".heart-icon", {
      y: -20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <img
        src={bgImage}
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center space-y-8 max-w-4xl">

        {/* Rajulapati Family */}
        <div className="space-y-2">
            <AnimatText text="💖 Rajulapati 💖" type="up" delayOffset={0} />

          {/* <AnimatedText text="💖 Rajulapati 💖" type="up" delayOffset={0} /> */}
          <AnimatedText text="Veera Venkateswarao garu" type="down" delayOffset={500} />
          <AnimatedText text="Wife: Lakshmi Telusi gari" type="up" delayOffset={1000} />
          <AnimatedText text="Son: Sai Tarun" type="left" delayOffset={1500} />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <span className="heart-icon text-pink-400 text-3xl">💖</span>
          <span className="heart-icon text-red-500 text-3xl">💘</span>
          <span className="heart-icon text-pink-300 text-3xl">❤️</span>
        </div>

        {/* Yarlagaralgadda Family */}
        <div className="space-y-2 mt-6">
            {/* <AnimatText text="💖 Yarlagaralgadda 💖" type="up" delayOffset={0} /> */}
          {/* <AnimatedText text="❤️ Yarlagaralgadda ❤️" type="up" delayOffset={2000} /> */}
          {/* <AnimatedText text="Srinivasarao garu" type="down" delayOffset={2500} />
          <AnimatedText text="Wife: Kameswari gari" type="up" delayOffset={3000} /> */}
          {/* <AnimatedText text="Daughter: Holika" type="right" delayOffset={3500} /> */}
        </div>

        {/* Invitation message */}
        {/* <AnimatedText
          text="With hearts full of love and joy, you are warmly invited to celebrate a beautiful moment with us."
          type="up"
          delayOffset={4000}
        /> */}

      </div>
    </div>
  );
};

export default Two;
