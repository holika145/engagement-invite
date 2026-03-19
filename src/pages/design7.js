import React from "react";

import bg from "../Assets/First/v1.jpg";
import centerFlower from "../Assets/First/bl.png";
import tl from "../Assets/First/nobgv2.png";
import tr from "../Assets/First/nobgv2.png";
import bl from "../Assets/First/nobgv2.png";
import br from "../Assets/First/nobgv2.png";

const First = () => {
    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-center bg-cover"
        >
            {/* Top Left */}
            <img
                src={tr}
                alt=""
                className="absolute top-0 right-0 z-10 scale-y-[-1] scale-x-[-1]"
            />


            {/* Top Right */}
            <img
                src={tl}
                alt=""
                className="absolute top-0 left-0 z-10 scale-y-[-1]"
            />

            {/* Bottom Left */}
            <img
                src={bl}
                alt=""
                className="absolute bottom-0 left-0 z-10 "
            />

            {/* Bottom Right */}
            <img
                src={br}
                alt=""
                className="absolute bottom-0 right-0 z-10 scale-x-[-1]"
            />

            {/* Center Content */}
            <div className="relative z-20 text-center">
                <h1
                    className="
            font-serif font-semibold text-[#6f8f8a]
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px]
          "
                >
                    K <span className="ml-2">T</span>
                </h1>

                <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600">
                    #KartikTanishka
                </p>
            </div>
        </div>
    );
};

export default First;
