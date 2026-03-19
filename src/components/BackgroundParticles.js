import { useCallback, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);  // Only load the slim feature set
    }).then(() => setReady(true));
  }, []);

  return ready ? (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,
        background: { color: { value: "#01493e" } },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#e6ff01" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 4, random: true },
          move: {
            enable: true,
            speed: 1.5,
            random: true,
            outModes: { default: "out" },
          },
        },
      }}
    />
  ) : null;
};

export default BackgroundParticles;
