import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../Assets/T3.jpeg";
import Stars from "./Stars";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeartAnimation from "./HeartAnimation";


const AnimatedText = ({ text, type = "up", delayOffset = 0 }) => (
    <h2 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex flex-wrap justify-center">
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
                    className="inline-block mx-[2px]"
                    data-aos={fadeType}
                    data-aos-delay={index * 50 + delayOffset}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            );
        })}
    </h2>
);

const TarunText = ({ text, type = "up", delayOffset = 0 }) => (
    <h2 className="text-white text-center text-lg font-bold flex flex-wrap justify-center">
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
                    className="inline-block mx-[2px]"
                    data-aos={fadeType}
                    data-aos-delay={index * 50 + delayOffset}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            );
        })}
    </h2>
);


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
    // const bgRef = useRef(null); 

    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: true });

    //     gsap.from(".heart-icon", {
    //         y: -20,
    //         opacity: 0,
    //         duration: 1.2,
    //         stagger: 0.3,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power1.inOut",
    //     });

    //     if (bgRef.current) {
    //         gsap.fromTo(
    //             bgRef.current,
    //             { y: 200, opacity: 0.6, scale: 1.1 },
    //             { y: 0, opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    //         );
    //     }
    // }, []);

    const bgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            bgRef.current,
            { y: 100, opacity: 0.5, scale: 1.1 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: "top 80%", // start animation when top of bg is 80% from top of viewport
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);


    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background image */}
            {/* <img
        ref={bgRef} 
        src={bgImage}
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
            {/* Background image with AOS */}
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="absolute inset-0 w-full h-full overflow-hidden"
            >
                <img
                    src={bgImage}
                    alt="Wedding Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Stars */}
            <Stars count={30} /> {/* 30 stars */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4 text-center space-y-8 max-w-4xl">

                {/* Rajulapati Family */}
                <div className="space-y-2">
                    <AnimatText text="💖 Rajulapati 💖" type="up" delayOffset={0} /><br></br>
                    <AnimatedText text="Veera Venkateswarao garu" type="down" delayOffset={500} />
                    <AnimatedText text="Lakshmi Telusi gari" type="up" delayOffset={1000} /><br></br>
                    <TarunText text="Son: Sai Tarun" type="left" delayOffset={1500} />
                </div>

                {/* Heart Icons */}
                <HeartAnimation />

            </div>
        </div>
    );
};

export default Two;
