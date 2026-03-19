import React, { useEffect, useRef } from "react";

const ThreeHeartScratchCards = ({ onReveal, text }) => {
    const canvasRef = useRef(null);

    const size =
        window.innerWidth < 640 ? 93 : window.innerWidth < 1024 ? 200 : 250;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const w = size;
        const h = size;

        // Heart shape
        const drawHeart = () => {
            ctx.beginPath();
            ctx.moveTo(w / 2, h * 0.78);
            ctx.bezierCurveTo(w * 1.3, h * 0.4, w * 0.85, 0, w / 2, h * 0.28);
            ctx.bezierCurveTo(w * 0.15, 0, -w * 0.3, h * 0.4, w / 2, h * 0.78);
            ctx.closePath();
        };

        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#f87171"); // red
        gradient.addColorStop(0.5, "#fca5a5");
        gradient.addColorStop(1, "#ef4444");

        // Fill heart
        ctx.save();
        drawHeart();
        ctx.clip();
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();

        // Scratch logic
        let drawing = false;
        let revealed = false;

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            const t = e.touches?.[0];
            return {
                x: (t ? t.clientX : e.clientX) - rect.left,
                y: (t ? t.clientY : e.clientY) - rect.top,
            };
        };

        const start = (e) => {
            drawing = true;
            e.preventDefault();
        };

        const end = () => {
            drawing = false;
        };

        const scratch = (e) => {
            if (!drawing || revealed) return;

            const { x, y } = getPos(e);
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2); // small circle to scratch
            ctx.fill();

            // Check how much erased
            const pixels = ctx.getImageData(0, 0, w, h).data;
            let cleared = 0;
            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0) cleared++;
            }

            if (cleared / (pixels.length / 4) > 0.35) {
                revealed = true;
                onReveal();
            }
        };

        canvas.addEventListener("mousedown", start);
        canvas.addEventListener("mousemove", scratch);
        canvas.addEventListener("mouseup", end);
        canvas.addEventListener("mouseleave", end);

        canvas.addEventListener("touchstart", start, { passive: false });
        canvas.addEventListener("touchmove", scratch, { passive: false });
        canvas.addEventListener("touchend", end);

        return () => {
            canvas.removeEventListener("mousedown", start);
            canvas.removeEventListener("mousemove", scratch);
            canvas.removeEventListener("mouseup", end);
            canvas.removeEventListener("mouseleave", end);

            canvas.removeEventListener("touchstart", start);
            canvas.removeEventListener("touchmove", scratch);
            canvas.removeEventListener("touchend", end);
        };
    }, [onReveal, size]);

    return (
        // <div className="relative flex items-center justify-center">
        //   <canvas ref={canvasRef} width={size} height={size} className="rounded-full shadow-lg" />
        //   <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl select-none">
        //     {text}
        //   </div>
        // </div>
        <div className="relative flex items-center justify-center">
            {/* Scratchable Canvas on Top */}
            <canvas
                ref={canvasRef}
                width={size}
                height={size}
                className="rounded-full shadow-lg z-10"
            />

            {/* Text underneath but pointer-events none */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl select-none pointer-events-none">
                {text}
            </div>
        </div>

    );
};

export default ThreeHeartScratchCards;
