const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Correct: covers all component files
  ],
  safelist: [
    "text-[#4f74ba]",
    "text-[#4b9fb5]",
    "text-[#7d6098]",
    "text-[#d7469a]",
    "animate-leftInOnce",
    "animate-rightInOnce",
  ],

  theme: {
    extend: {
      screens: {
        '3xl': '1920px',     // HD+
        '4k': '2560px',      // 4K
        '5k': '3200px',      // Optional
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        secondary: "var(--e-global-typography-secondary-font-family), sans-serif",
        ilott: ['"Ilott Type"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        fadeTopLeft: 'fadeTopLeft 1s ease-out forwards',
        fadeTopRight: 'fadeTopRight 2.5s ease-out forwards',
        fadeBottomLeft: 'fadeBottomLeft 3s ease-out forwards',
        fadeBottomRight: 'fadeBottomRight 4s ease-out forwards',
        fadeInCenter: 'fadeInCenter 5s ease-out forwards',
        fadeInUp: 'fadeInUp 4s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-out forwards',
        fadeUp: 'fadeUp 5s ease-out forwards',
        fadeIn: 'fadeIn 4s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        fadeTop: 'fadeTop 1s ease-out forwards',
        fadeLeft: 'fadeLeft 1s ease-out forwards',
        fadeRight: 'fadeRight 1s ease-out forwards',
        fadeBottom: 'fadeBottom 1s ease-out forwards',
        slowZoom: 'slowZoom 20s ease-in-out infinite alternate',
        zoomPulse: 'zoomPulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        rotateSlow: 'rotateSlow 20s linear infinite',
        zoomInOut: 'zoomInOut 4s ease-in-out infinite',
        swing: 'swing 3s ease-in-out infinite',
        swings: 'swing 4s ease-in-out infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        swings: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(4deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(2deg)' },
          '80%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        fadeTopLeft: {
          '0%': { opacity: 0, transform: 'translate(-50px,-50px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeTopRight: {
          '0%': { opacity: 0, transform: 'translate(50px,-50px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeBottomLeft: {
          '0%': { opacity: 0, transform: 'translate(-50px,50px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeBottomRight: {
          '0%': { opacity: 0, transform: 'translate(50px,50px)' },
          '100%': { opacity: 1, transform: 'translate(0,0)' },
        },
        fadeInCenter: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeTop: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeBottom: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        zoomPulse: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoomInOut: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
