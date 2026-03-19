import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import * as htmlToImage from "html-to-image";
// import ScratchCard from "react-scratchcard";
import sc from "../Assets/PayBG.png"
import ScratchCard from "./ScratchCard";
const options = {
  width: 80,
  height: 40,
  image: sc, // This is the scratch layer
  clearZoneRadius: 30,
  finishPercent: 50,
};

const BannerAnimation = () => {
  const textRef = useRef(null);
  const lightsRef = useRef([]);
  const coupleRef = useRef(null);
  const ringRef = useRef(null);
  const heartRef = useRef(null);
  const dateRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const options = {
      width: 80,
      height: 40,
      image: sc, // This is the scratch layer
      clearZoneRadius: 30,
      finishPercent: 50,
    };

    // Text animation with GSAP (optional, can keep or remove if AOS enough)
    gsap.fromTo(
      textRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Hanging lights swing animation
    gsap.to(lightsRef.current, {
      rotation: (i) => (i % 2 === 0 ? 2 : -2),
      transformOrigin: "top center",
      yoyo: true,
      repeat: -1,
      duration: 1.8,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    // Bulb flicker animation
    gsap.to(lightsRef.current.map((el) => el.lastChild), {
      opacity: 0.6,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      stagger: 0.15,
    });

    // Couple gentle scale animation
    gsap.fromTo(
      coupleRef.current,
      { scale: 0.95 },
      {
        scale: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      }
    );

    // Ring rotate animation
    gsap.fromTo(
      ringRef.current,
      { scale: 0.8, rotate: 0 },
      {
        scale: 1,
        rotate: 360,
        repeat: -1,
        duration: 4,
        ease: "linear",
      }
    );

    // Heart pulse animation
    gsap.fromTo(
      heartRef.current,
      { scale: 1 },
      {
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    // Date pulse animation
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

  // Download Invitation as image
  const downloadInvitation = () => {
    htmlToImage.toPng(cardRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "Engagement-Invitation.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0b1a3a] min-h-screen py-10">
      {/* Invitation Card */}
      <div
        ref={cardRef}
        className="relative w-[360px] h-[520px] rounded-[30px] border-4 border-[#f3cfa4] text-white overflow-hidden shadow-xl"
      >
        {/* Hanging Lights */}
        <div className="absolute top-0 w-full flex justify-evenly z-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (lightsRef.current[i] = el)}
              className="flex flex-col items-center origin-top"
            >
              <div className="w-[2px] h-20 bg-yellow-200/50" />
              <div className="relative mt-1">
                <div className="w-3 h-3 rounded-full bg-yellow-200 shadow-[0_0_12px_4px_rgba(255,215,0,0.7)]" />
                <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
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

        {/* Content with AOS animations */}
        <div
          ref={textRef}
          className="relative z-10 text-center px-6 pt-28 space-y-2"
        >
          <h2
            className="text-xl font-serif tracking-wide"
            data-aos="fade-down"
          >
            Engagement Ceremony
          </h2>

          <p
            className="text-xs italic text-gray-200"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Two hearts, one promise, and a lifetime of togetherness
          </p>

          <h1
            className="text-2xl font-serif tracking-wider"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Sai Tarun <span className="text-[#f3cfa4]">&</span> Holika
          </h1>

          <div
            ref={heartRef}
            className="text-red-400 text-lg mt-60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            ❤️
          </div>
          <div className="flex justify-center mt-4">
            <ScratchCard text="04" />
            <ScratchCard text="April" />
            <ScratchCard text="2026" />
          </div>


          {/* <div
            ref={dateRef}
            className="inline-block mt-2 px-4 py-2 border border-[#f3cfa4] rounded-full text-sm tracking-widest"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <ScratchCard/>
            04 • April • 2026
          </div>  */}
          {/* <div className="flex gap-2 justify-center mt-2">
            <ScratchCard options={options} onComplete={() => console.log("Day revealed!")}>
              <div className="inline-block px-4 py-2 border border-[#f3cfa4] rounded-full text-sm tracking-widest text-center">
                04
              </div>
            </ScratchCard>

            <ScratchCard options={options} onComplete={() => console.log("Month revealed!")}>
              <div className="inline-block px-4 py-2 border border-[#f3cfa4] rounded-full text-sm tracking-widest text-center">
                April
              </div>
            </ScratchCard>

            <ScratchCard options={options} onComplete={() => console.log("Year revealed!")}>
              <div className="inline-block px-4 py-2 border border-[#f3cfa4] rounded-full text-sm tracking-widest text-center">
                2026
              </div>
            </ScratchCard>
          </div> */}

          <p
            className="text-xs mt-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            7:00 PM Onwards
          </p>

          <p
            className="text-xs uppercase"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            At Ball Room
          </p>

          {/* Parents */}
          <div
            className="mt-2 text-[10px] text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p>
              Daughter of <span className="text-[#f3cfa4]">Mr. & Mrs. XYZ</span>
            </p>
            <p>
              Son of <span className="text-[#f3cfa4]">Mr. & Mrs. ABC</span>
            </p>
          </div>
        </div>

        {/* Couple + Ring */}
        <div
          ref={coupleRef}
          className="absolute bottom-14 w-full flex justify-center items-center gap-6"
        >
          <div className="w-8 h-16 border-2 border-[#f3cfa4] rounded-full" />
          <div
            ref={ringRef}
            className="text-3xl drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
          >
            💍
          </div>
          <div className="w-8 h-16 border-2 border-[#f3cfa4] rounded-full" />
        </div>

        {/* Floor */}
        <div className="absolute bottom-0 w-full h-20 bg-white/10 rounded-t-full" />
      </div>

      {/* Download button */}
      {/* <button
        onClick={downloadInvitation}
        className="mt-8 px-6 py-3 rounded-full bg-yellow-400 font-semibold text-black hover:bg-yellow-500 transition"
      >
        Download Invitation
      </button> */}
    </div>
  );
};

export default BannerAnimation;
