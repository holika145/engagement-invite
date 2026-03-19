import React, { useEffect, useRef } from "react";

const ScratchCard = ({ text, width = 80, height = 40, color = "#c0c0c0" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fill canvas with cover color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    let isDrawing = false;

    const startDraw = (e) => {
      isDrawing = true;
      draw(e);
    };

    const endDraw = () => {
      isDrawing = false;
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

      ctx.globalCompositeOperation = "destination-out"; // erase mode
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2, false);
      ctx.fill();
    };

    // Mouse events
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseleave", endDraw);

    // Touch events
    canvas.addEventListener("touchstart", startDraw);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", endDraw);

    return () => {
      canvas.removeEventListener("mousedown", startDraw);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", endDraw);
      canvas.removeEventListener("mouseleave", endDraw);
      canvas.removeEventListener("touchstart", startDraw);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", endDraw);
    };
  }, [width, height, color]);

  return (
    <div className="relative inline-block mr-2">
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #f3cfa4",
          borderRadius: "12px",
          color: "#f3cfa4",
          fontWeight: "bold",
          fontSize: "16px",
          background: "#0b1a3a",
          textAlign: "center",
        }}
      >
        {text}
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default ScratchCard;
