import bgVideo from "../Assets/T4.mp4";

const AnimatedText = ({ text, animation, delay = 0 }) => {
  return (
    <div className={animation} style={{ animationDelay: `${delay}s` }}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-fadeBottom"
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};


const Six = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between text-center text-white px-6">
        
        <div className="flex flex-col justify-center items-center flex-1">
          <h1
            className="text-5xl font-['Great_Vibes'] animate-fadeTop mb-5"
            style={{ animationDelay: "0.3s" }}
          >
            Best Regards 
          </h1>
          <h3
            className="mt-2 ml-[-5%] text-3xl  font-['Great_Vibes'] animate-fadeLeft"
            style={{ animationDelay: "1.3s" }}
          >
            Yarlagadda &nbsp;&nbsp;& 
          </h3>
          <h3
            className="mt-2  text-3xl font-['Great_Vibes'] animate-fadeRight"
            style={{ animationDelay: "1.3s" }}
          >
            Rajulapati 
          </h3>
          <h3
            className="mt-2 mr-[-0%] text-3xl font-['Great_Vibes'] animate-fadeBottom"
            style={{ animationDelay: "1.3s" }}
          >
             Family
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Six;
