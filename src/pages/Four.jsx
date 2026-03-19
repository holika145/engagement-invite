import { useEffect, useState } from "react";

import bg from "../Assets/couplebg.png";
import tl from "../Assets//Third/topleft.png";
import tr from "../Assets//Third/topright.png";
import bl from "../Assets//Third/bottomleft.png";
import br from "../Assets//Third/bottomright.png";
import logo from "../Assets/couple.png";

const DateText = ({ text, delayOffset = 0 }) => {
  return (
    <h2 className="mt-[2%] text-gray-500 font-['Playfair_Display'] tracking-widest text-center text-xs font-semibold flex flex-wrap justify-center mt-[-4%]">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block mx-[2px]"
          data-aos="fade-left"
          data-aos-delay={index * 50 + delayOffset}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

const TimeText = ({ text, delayOffset = 0 }) => {
  return (
    <h2 className="mt-[3%]  text-gray-500 font-['Playfair_Display'] tracking-widest text-center text-xs font-semibold flex flex-wrap justify-center mt-[-4%]">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block mx-[2px]"
          data-aos="fade-left"
          data-aos-delay={index * 50 + delayOffset}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

const Four = () => {

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-center bg-cover"
    // style={{ backgroundImage: `url(${bg})` }}
    >
      {/* TOP LEFT */}
      <img
        src={tl}
        alt=""
        className="absolute top-0 left-0 z-10 w-32 sm:w-48  opacity-0 animate-fadeTopLeft"
      />

      {/* TOP RIGHT */}
      <img
        src={tr}
        alt=""
        className="absolute top-0 right-0 z-10 w-56 opacity-0 animate-fadeTopRight"
      />

      {/* BOTTOM LEFT */}
      <img
        src={bl}
        alt=""
        className="absolute bottom-0 left-0 z-10 w-56  opacity-0 animate-fadeBottomLeft"
      />

      {/* BOTTOM RIGHT */}
      <img
        src={br}
        alt=""
        className="absolute bottom-0 right-0 z-10 w-32 sm:w-48 opacity-0 animate-fadeBottomRight"
      />


      {/* CENTER CONTENT */}
      <div className="relative z-20 min-h-screen flex flex-col">

        {/* TOP 50% */}
        <div className="h-1/2 flex flex-col items-center justify-center text-center px-6">

          <h1
            className="mt-8 font-['Great_Vibes'] text-5xl text-[#6f8f8a] animate-fadeUp"
            style={{ animationDelay: "0.3s" }}
          >
            Engagement 
          </h1>
          <h1
            className="mr-[-45%] font-['Great_Vibes'] text-4xl text-[#6f8f8a] animate-fadeUp"
            style={{ animationDelay: "0.3s" }}
          >
             Ceremony
          </h1>

          {/* <p
            className="mt-0 text-sm tracking-widest text-gray-500 animate-fadeUp"
            style={{ animationDelay: "0.6s" }}
          >
            Monday
          </p> */}

          {/* <p
            className="text-2xl sm:text-3xl text-[#6f8f8a] font-semibold animate-fadeUp"
            style={{ animationDelay: "0.9s" }}
          >
            04 April 2026
          </p> */}

          {/* <DateText text="04 · April · 2026 . Saturday" /> */}
          

          {/* <p
            className="mt-2 text-xs text-gray-400 animate-fadeUp"
            style={{ animationDelay: "1.2s" }}
          >
            10:30 AM Onwards
          </p> */}

          <p
            className="mt-2 text-sm font-semibold text-[#6f8f8a] animate-fadeUp"
            style={{ animationDelay: "1.5s" }}
          >
            Next to Venkateswara Swamy Temple
          </p>

          {/* <p
            className="text-xs sm:text-sm text-gray-500 animate-fadeUp"
            style={{ animationDelay: "1.8s" }}
          >
            Vijayawada, Andhra Pradesh
          </p> */}
          <TimeText text="Bantumilli, Gudivada Road. " />

        </div>

        {/* BOTTOM 50% */}
        <div className="relative h-1/2 flex items-end justify-center">

          <img
            src={bg}
            alt=""
            className="absolute bottom-0 w-full h-full object-cover opacity-0 animate-fadeUp"
          />
          <div className="relative flex gap-4 mb-[-5] ">

            <img
              src={logo}
              alt=""
              className="w-40 mt-[10%] animate-fadeInCenter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
