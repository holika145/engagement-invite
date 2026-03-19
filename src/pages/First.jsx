import { useEffect, useState } from "react";

import bg from "../Assets/First/v1.jpg";
import tl from "../Assets/First/topleft.png";
import tr from "../Assets/First/topright.png";
import bl from "../Assets/First/bottomleft.png";
import br from "../Assets/First/bottomright.png";
import logo from "../Assets/THlogo.png";

const TarunText = ({ text, delayOffset = 0 }) => {
  return (
    <h2 className="text-gray-600 text-center text-xs sm:text-sm md:text-base font-semibold flex flex-wrap justify-center mt-[-4%]">
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

const DateText = ({ text, delayOffset = 0 }) => {
  return (
    <h2 className="text-gray-500 font-['Playfair_Display'] tracking-widest text-center text-xs font-semibold flex flex-wrap justify-center mt-[-4%]">
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

const First = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 4000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
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
      {/* <div className="relative z-20 text-center opacity-0 animate-fadeInCenter">
        <img
        src={logo}
        alt=""
        className="animate-fadeTopRight"
      />
      <TarunText text="#Tarika(Two Hearts❤️)" type="left" delayOffset={1500} />
      </div> */}
      {/* CENTER CONTENT */}
      <div className="relative z-20 text-center">

        {/* STEP 1: LOGO + TARIKA */}
        {step === 1 && (
          <div className="animate-fadeInCenter">
            {/* <img src={logo} alt="" className="mx-auto mb-2 w-50 h-50" /> */}
            <img src={logo} alt="" className="mx-auto mb-2 w-46 h-36" />
            <TarunText text="#Tarika (Two Hearts ❤️)" />
          </div>
        )}

        {/* STEP 2: ENGAGEMENT CEREMONY */}
        {step === 2 && (
          <div className="text-center animate-fadeInCenter">
            <h2 className="font-['Great_Vibes'] text-5xl  text-[#6f8f8a]">
              Engagement
            </h2>
            <h3 className="font-['Great_Vibes'] text-4xl  text-[#6f8f8a] ml-[55%] mb-8">
              Ceremony
            </h3>

            {/* <p className="mt-4 font-['Playfair_Display'] tracking-widest text-lg sm:text-xl text-gray-500">
    04 · April · 2026
  </p> */}
            <DateText text="04 · April · 2026" />
            <p
            className="mt-2 text-xs text-gray-400 animate-fadeUp"
            style={{ animationDelay: "1.2s" }}
          >
            10:30 AM Onwards
          </p>
          </div>

        )}
      </div>
    </div>
  );
};

export default First;
