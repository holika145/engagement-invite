import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0b1441] to-[#0e224c] overflow-hidden flex flex-col items-center justify-center px-6"
      style={{
        fontFamily: "'Playfair Display', serif",
        color: "white",
      }}
    >
      {/* Background stars & chandeliers could be absolute divs or images */}

      {/* Title */}
      <h1
        data-aos="fade-down"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "3.5rem",
          marginBottom: "1rem",
          textShadow: "0 0 10px #fff8, 0 0 20px #ffe",
        }}
      >
        A Starry Night
      </h1>

      {/* Date */}
      <p
        data-aos="fade-up"
        className="text-xl md:text-2xl mb-6"
        style={{ opacity: 0.8 }}
      >
        Saturday <br />
        December 14<sup>th</sup>, 2024
      </p>

      {/* Event */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-semibold mb-2"
        style={{ color: "#ffe5b4" }}
      >
        Tilak and Sangeet
      </h2>

      {/* Details */}
      <p
        data-aos="fade-up"
        className="text-lg md:text-xl mb-6 text-center max-w-xl"
      >
        Followed by Cocktail and Dinner <br />
        Amer Ballroom <br />
        7:30 pm onwards <br />
        <span style={{ opacity: 0.5, fontStyle: "italic" }}>
          Attire - Tux and Indo-Western
        </span>
      </p>

      {/* Couple illustration placeholder */}
      <div
        data-aos="fade-up"
        style={{
          width: "300px",
          height: "400px",
          backgroundImage: `url("https://your-image-link-here.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginBottom: "2rem",
        }}
      ></div>

      {/* Floor pattern */}
      {/* <div
        style={{
          width: "100%",
          height: "150px",
          background:
            "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 90px 60px",
          transform: "rotate(0deg)",
          marginTop: "0px",
        }}
      ></div> */}
    </div>
  );
};

export default BannerAnimation;
