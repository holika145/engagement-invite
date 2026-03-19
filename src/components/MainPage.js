import React, { useEffect, useRef, useState } from "react";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
import Four from "../pages/Four";
import Zero from "../pages/zero";
import Five from "../pages/Five";
import Six from "../pages/Six";
import music from "../Assets/Shubham.mp3";

const MainPage = () => {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false); // track if user clicked

  useEffect(() => {
    // Start timers for page steps
    const timer1 = setTimeout(() => setStep(1), 2000);
    const timer2 = setTimeout(() => setStep(2), 14000);
    const timer3 = setTimeout(() => setStep(3), 21000);
    const timer4 = setTimeout(() => setStep(3), 28000);
    const timer5 = setTimeout(() => setStep(4), 30000);
    const timer6 = setTimeout(() => setStep(5), 35000);
    const timer7 = setTimeout(() => setStep(6), 40000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  // Handle first user interaction to start audio
  const handleStartAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current.muted = false; // unmute
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => console.log(err));
      setAudioStarted(true);
    }
  };

  return (
    <div
      className="background-container bg-[#FFFCF8] min-h-screen"
      onClick={handleStartAudio} // user click anywhere starts music
    >
      {/* 🎵 Background Music */}
      <audio ref={audioRef} autoPlay loop muted>
        <source src={music} type="audio/mp3" />
      </audio>

      {step === 0 && <Zero />}
      {step === 1 && <First />}
      {step === 2 && <Second />}
      {step === 3 && <Third />}
      {step === 4 && <Four />}
      {step === 5 && <Five />}
      {step === 6 && <Six />}
    </div>
  );
};

export default MainPage;