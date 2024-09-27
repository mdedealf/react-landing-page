/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-black": "#0B0C0E",
      "dark-gray": "#3C3D3E",
      "light-gray": "#C7D0D9",
      "off-white": "#F4F7FA",
    },
    backgroundColor: {
      "light-gray": "#C7D0D9",
    },
    padding: {
      "26px": "26px",
      "80px": "80px",
    },
    fontSize: {
      "18px": "18px",
      "40px": "40px",
      "27px": "27px",
    },
    fontWeight: {
      "400px": "400px",
      "500px": "500px",
    },
    lineHeight: {
      "28px": "28px",
      "48px": "48px",
      "37px": "37px",
    },
    gap: {
      "40px": "40px",
    },
    margin: {
      "80px": "80px",
      "160px": "160px",
    },
    flexBasis: {
      "30%": "30%",
      "70%": "70%",
    },
  },
  plugins: [],
};
