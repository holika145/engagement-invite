import React, { useRef, useEffect, useState } from "react";

const ThreeHeartScratchCards = ({ frontColor = "#fff", backColor = "#f43", text = "", onReveal }) => {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  const size = 200; // can adjust or make responsive

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw heart shape
    const drawHeart = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.beginPath();
      ctx.moveTo(size / 2, size * 0.78);
      ctx.bezierCurveTo(size * 1.3, size * 0.4, size * 0.85, 0, size / 2, size * 0.28);
      ctx.bezierCurveTo(size * 0.15, 0, -size * 0.3, size * 0.4, size / 2, size * 0.78);
      ctx.closePath();
    };

    // Fill front (scratchable) color
    drawHeart();
    ctx.fillStyle = frontColor;
    ctx.fill();

    let drawing = false;

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches?.[0];
      return {
        x: (t ? t.clientX : e.clientX) - rect.left,
        y: (t ? t.clientY : e.clientY) - rect.top,
      };
    };

    const scratch = (e) => {
      if (!drawing || revealed) return;

      const { x, y } = getPos(e);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();

      // check cleared
      const pixels = ctx.getImageData(0, 0, size, size).data;
      let cleared = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) cleared++;
      }

      if (cleared / (pixels.length / 4) > 0.35) {
        setRevealed(true);
        if (onReveal) onReveal();
      }
    };

    const start = () => (drawing = true);
    const end = () => (drawing = false);

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
  }, [frontColor, revealed, onReveal]);

  return (
    <div className="relative w-[200px] h-[200px] flex flex-col items-center justify-center">
      {/* Background Heart */}
      <div
        className={`absolute inset-0 rounded-full flex items-center justify-center text-3xl transition-colors duration-500 ${
          revealed ? "text-red-500" : "text-white"
        }`}
      >
        {text}
      </div>
      {/* Scratch Canvas */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="rounded-full z-10"
      />
    </div>
  );
};

export default ThreeHeartScratchCards;
