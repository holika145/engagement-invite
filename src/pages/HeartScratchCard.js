import React, { useEffect, useRef } from "react";

const HeartScratchCard = ({ onReveal }) => {
  const canvasRef = useRef(null);

  const size =
    window.innerWidth < 640 ? 220 : window.innerWidth < 1024 ? 300 : 360;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = size;
    const h = size;

    /* ---------- HEART SHAPE ---------- */
    const drawHeart = () => {
      ctx.beginPath();
      ctx.moveTo(w / 2, h * 0.78);
      ctx.bezierCurveTo(w * 1.3, h * 0.4, w * 0.85, 0, w / 2, h * 0.28);
      ctx.bezierCurveTo(w * 0.15, 0, -w * 0.3, h * 0.4, w / 2, h * 0.78);
      ctx.closePath();
    };

    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "#f5c608");
    gradient.addColorStop(0.5, "#f5c608");
    gradient.addColorStop(1, "#f5c608");

    ctx.save();
    drawHeart();
    ctx.clip();
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    /* ---------- SCRATCH LOGIC ---------- */
    let drawing = false;
    let revealed = false;

    let lastX = null;
    let lastY = null;
    let totalDistance = 0; // 👈 key fix

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
      lastX = null;
      lastY = null;
      totalDistance = 0;
      e.preventDefault();
    };

    const end = () => {
      drawing = false;
    };

    const scratch = (e) => {
      if (!drawing || revealed) return;

      const { x, y } = getPos(e);

      // ❌ Ignore first touch (NO erase)
      if (lastX === null) {
        lastX = x;
        lastY = y;
        return;
      }

      // ✅ Track real movement distance
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      totalDistance += dist;

      lastX = x;
      lastY = y;

      // ❌ Not enough movement → no erase
      if (totalDistance < 40) return;

      // ✅ REAL SCRATCH
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();

      // ✅ Check erased pixels
      const pixels = ctx.getImageData(0, 0, w, h).data;
      let cleared = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) cleared++;
      }

      // ✅ Google Pay–style reveal
      if (cleared / (pixels.length / 4) > 0.35 && totalDistance > 180) {
        revealed = true;
        onReveal();
      }
    };

    /* ---------- EVENTS ---------- */
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

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default HeartScratchCard;
