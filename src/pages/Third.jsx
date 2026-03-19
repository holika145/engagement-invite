import { useEffect, useState } from "react";

import bg from "../Assets/First/v1.jpg";
import tl from "../Assets//Second/topleft.png";
import tr from "../Assets//Second/topright.png";
import bl from "../Assets//Second/bottomleft.png";
import br from "../Assets//Second/bottomright.png";
import logo from "../Assets/THlogo.png";

const Third = () => {

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
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-0 min-h-screen">

  {/* LOGO */}
  <img
    src={logo}
    alt=""
    className="w-32 mb-3 animate-zoomIn"
    style={{ animationDelay: "0.3s" }}
  />

  {/* TAGLINE */}
  <p
    className="text-xs sm:text-sm text-gray-500 mb-4 animate-fadeInUp"
    style={{ animationDelay: "0.8s" }}
  >
    Join Us As We Turn The Page From Friendship <br /> To a Beautiful Forever
  </p>

  {/* GROOM */}
  



  {/* BRIDE */}
  {/* <h2 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6f8f8a] mb-1 animate-fadeInUp" style={{ animationDelay: "2.0s" }}>
    Holika
  </h2>
  <h2 className="text-xs sm:text-sm text-[#6f8f8a] mb-2 animate-fadeInUp" style={{ animationDelay: "2.2s" }}>
    D/O
  </h2>
  <h1 className="text-xs sm:text-sm text-[#6f8f8a] font-semibold mb-4 animate-fadeInUp" style={{ animationDelay: "2.4s" }}>
    MR. Yarlagadda Srinivasa Rao & MRS. Kameswari
  </h1>

    <h1 className="text-xs sm:text-sm text-[#6f8f8a] mb-2 animate-fadeInUp" style={{ animationDelay: "1.8s" }}>
    And
  </h1> */}

  <h2 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6f8f8a] mb-1 animate-fadeInUp" style={{ animationDelay: "1.2s" }}>
    Sai Tarun
  </h2>
  <h2 className="text-xs sm:text-sm text-[#6f8f8a] mb-2 animate-fadeInUp" style={{ animationDelay: "1.4s" }}>
    S/O
  </h2>
  <h1 className="text-xs sm:text-sm text-[#6f8f8a] font-semibold mb-4 animate-fadeInUp" style={{ animationDelay: "1.6s" }}>
    MR. Rajulapati Veera Venkateswa Rao & MRS. Lakshmi Tulasi
  </h1>

</div>

      {/* <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-0 min-h-screen">

  <img src={logo} alt="" className="w-32 mb-3" data-aos="zoom-in" />

  <p data-aos="fade-up" data-aos-delay="300" className="text-xs sm:text-sm text-gray-500 mb-4">
    Join Us As We Turn The Page From Friendship <br /> To a Beautiful Forever
  </p>

  <h2 data-aos="fade-up" data-aos-delay="600" className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6f8f8a] mb-1">
    Sai Tarun
  </h2>
  <h2 data-aos="fade-up" data-aos-delay="800" className="text-xs sm:text-sm text-[#6f8f8a] mb-2">
    S/O
  </h2>
  <h1 data-aos="fade-up" data-aos-delay="1000" className="text-xs sm:text-sm text-[#6f8f8a] font-semibold mb-4">
    MR. Rajulapati Veera Venkateswa Rao & MRS. Lakshmi Tulasi
  </h1>

  <h1 data-aos="fade-up" data-aos-delay="1200" className="text-xs sm:text-sm text-[#6f8f8a] mb-2">
    And
  </h1>

  <h2 data-aos="fade-up" data-aos-delay="1400" className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#6f8f8a] mb-1">
    Holika
  </h2>
  <h2 data-aos="fade-up" data-aos-delay="1600" className="text-xs sm:text-sm text-[#6f8f8a] mb-2">
    D/O
  </h2>
  <h1 data-aos="fade-up" data-aos-delay="1800" className="text-xs sm:text-sm text-[#6f8f8a] font-semibold mb-2">
    MR. Yarlagadda Srinivasa Rao & MRS. Kameswari
  </h1>

</div> */}

      {/* <div className="relative z-20 text-center opacity-0 animate-fadeInCenter">

        <div className="flex items-center justify-center ">
          <img
            src={logo}
            alt=""
            className="w-32 animate-fadeTopRight mt-[-25%] mb-3"
          />
        </div>

        <p className="animate-fadeInCenter text-xs text-gray-500 mt-[-5%] mb-5">
          Join Us As We Turn The Page From Friendship <br /> To a Beautiful Forever
        </p>

        <h2 className="font-['Great_Vibes'] text-4xl  text-[#6f8f8a] mb-2">
          Sai tarun
        </h2>
        <h2 className=" text-sm  text-[#6f8f8a]">
          S/O
        </h2>
        <h1 className=" text-xs  text-[#6f8f8a] mb-3 font-semibold">
          MR. Rajulapati Veera Venkateswa Rao & MRS. Lakshmi Tulasi
        </h1>
        <h1 className=" text-sm  text-[#6f8f8a] mb-5">
          And
        </h1>
        <h2 className="font-['Great_Vibes'] text-4xl  text-[#6f8f8a] mb-2">
          Holika
        </h2>
        <h2 className=" text-sm  text-[#6f8f8a]">
          D/O
        </h2>
        <h1 className=" text-xs  text-[#6f8f8a] mb-5 font-semibold">
          MR. Yarlagadda Srinivasa Rao & MRS. Kameswari
        </h1>
      </div> */}

    </div>
  );
};

export default Third;
