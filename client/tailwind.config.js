/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Zeyada: ['"Protest Riot"', "sans-serif"],
      },
      height: {
        128: "32rem",
      },
      backgroundImage: {
        peaceRoomInteractive: "url('src/assets/peaceRoomInteractive.png')",
      },
    },
  },
  plugins: [],
};

