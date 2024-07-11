/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon: "polygon(0 0, 13% 0, 25% 100vh, 0 100%)",
      },
      height: {
        0.5: "1px",
        80: "25rem",
        85: "30rem",
        90: "33rem",
        96: "35rem",
        128: "50rem", // Example of adding a custom height
        144: "33rem",
        "half-screen": "50vh",
      },
      width: {
        80: "25rem",
        128: "40rem", // Example of adding a custom width
        144: "96rem",
        "half-screen": "50vw",
      },
      inset: {
        "3/5": "80%", // Custom value for 60%
        "2/5": "40%",
        "4/5": "26.5%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "1fr-2fr": "1.5fr 2fr",
      },
    },
    screens: {
      phone: "320px",
      // => @media (min-width: 640px) { ... }
      mdphone: "400px",
      ptab: "500px",
      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1200px",
      // => @media (min-width: 1280px) { ... }

      bigdesktop: "1536px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-polygon": {
          "clip-path": " polygon(0 0, 13% 0, 24% 100vh, 0 100%)",
        },
      });
    },
  ],
};
