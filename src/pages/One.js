import React, { useState, useEffect,useRef } from "react";
import HeartScratchCard from "./HeartScratchCard";
import V1 from "../Assets/T4.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import sc from "../Assets/PayBG.png"
import { gsap } from "gsap";

const AnimatedText = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 flex justify-center flex-wrap">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
          data-aos="fade-up"
          data-aos-delay={index * 100} // stagger each letter by 100ms
        >
          {char === " " ? "\u00A0" : char} {/* preserve spaces */}
        </span>
      ))}
    </h1>
  );
};

const Animated10Words = () => {
  const leftWords = ["With", "love", "joy", "hearts", "blessings"];
  const rightWords = ["celebrate", "together", "laughter", "happiness", "memories"];

  return (
    <p className="text-gray-200 text-sm flex flex-wrap justify-center gap-2">
      {leftWords.map((word, i) => (
        <span
          key={`left-${i}`}
          className="inline-block"
          data-aos="fade-left"
          data-aos-delay={i * 150}
        >
          {word}
        </span>
      ))}
      {rightWords.map((word, i) => (
        <span
          key={`right-${i}`}
          className="inline-block"
          data-aos="fade-right"
          data-aos-delay={i * 150 + 500} // delay a bit after left
        >
          {word}
        </span>
      ))}
    </p>
  );
};




const One = () => {
  const [heartRevealed, setHeartRevealed] = useState(false);
  const [hearts, setHearts] = useState([]);
    const textRef = useRef(null);
    const lightsRef = useRef([]);
    const coupleRef = useRef(null);
    const ringRef = useRef(null);
    const heartRef = useRef(null);
    const dateRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

    // Spawn floating hearts
  useEffect(() => {
    if (!heartRevealed) return;

    const interval = setInterval(() => {
      const left = Math.random() * 80 + 10 + "%"; // random horizontal position
      const size = Math.random() * 20 + 14; // random size
      setHearts((prev) => [...prev, { id: Date.now(), left, size }]);
    }, 300);

    const timeout = setTimeout(() => clearInterval(interval), 4000); // stop after 4s
    return () => clearTimeout(interval) & clearTimeout(timeout);
  }, [heartRevealed]);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const options = {
      width: 80,
      height: 40,
      image: sc, // This is the scratch layer
      clearZoneRadius: 30,
      finishPercent: 50,
    };

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

  return (
    <div className="relative overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO (ONLY AFTER SCRATCH) */}
      {heartRevealed && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={V1}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
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

      {/* 🌟 FOREGROUND CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        {/* 🔒 BEFORE SCRATCH */}
        {!heartRevealed && (
          <div className="flex flex-col items-center text-center animate-reveal">
            <h2 className="text-xl sm:text-2xl text-yellow-300 mb-4 animate-pulse">
              Scratch the Golden Heart 💛
            </h2>

            <HeartScratchCard onReveal={() => setHeartRevealed(true)} />
          </div>
        )}

        {/* 🔓 AFTER SCRATCH */}
        {heartRevealed && (
          <div className="max-w-xl text-center animate-reveal">
            {/* <h1 className="text-3xl font-extrabold text-white mb-4"
             data-aos="fade-up"
            data-aos-delay="500">
               Rajulapati Invitation
            </h1> */}
            <AnimatedText text="Rajulapati Invitation" />
            {/* <h1 className="text-3xl font-extrabold text-white mb-4">
              💖  Invitation 💖
            </h1> */}
            <Animated10Words text="With hearts full of love and joy, you are warmly invited to celebrate a beautiful moment with us." />


            {/* <p className="text-gray-300 leading-relaxed text-sm sm:text-base"
             data-aos="fade-up"
            data-aos-delay="700">
              With hearts full of love and joy,  
              you are warmly invited to celebrate a beautiful moment with us.
            </p> */}
          </div>
        )}
         {/* Floating Hearts */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="float-heart text-pink-400"
            style={{ left: heart.left, fontSize: heart.size }}
          >
            💖
          </div>
        ))}

      </div>
    </div>
  );
};

export default One;
