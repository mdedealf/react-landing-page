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
    },
    fontWeight: {
      "400px": "400px",
    },
    lineHeight: {
      "28px": "28px",
    },
    gap: {
      "40px": "40px",
    },
  },
  plugins: [],
};
