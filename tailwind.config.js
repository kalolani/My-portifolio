/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon: "polygon(0 0, 13% 0, 25% 100vh, 0 100%)",
      },
      height: {
        128: "50rem", // Example of adding a custom height
        144: "33rem",
        "half-screen": "50vh",
      },
      width: {
        128: "40rem", // Example of adding a custom width
        144: "96rem",
        "half-screen": "50vw",
      },
      inset: {
        "3/5": "60%", // Custom value for 60%
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
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
