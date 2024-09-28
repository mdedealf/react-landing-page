/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        "20px": "20px",
        "26px": "26px",
        "80px": "80px",
      },
      fontSize: {
        "14px": "14px",
        "18px": "18px",
        "27px": "27px",
        "20px": "20px",
        "40px": "40px",
        "60px": "60px",
      },
      fontWeight: {
        "400px": "400px",
        "500px": "500px",
        "700p": "700px",
      },
      lineHeight: {
        "28px": "28px",
        "48px": "48px",
        "37px": "37px",
        "72px": "72px",
      },
      width: {
        "32px": "32px",
        "64px": "64px",
        "85px": "85px",
      },
      height: {
        "32px": "32px",
        "64px": "64px",
        "85px": "85px",
        "hero-h": "calc(100vh - 80px)",
      },
      gap: {
        "6px": "6px",
        "12px": "12px",
        "18px": "18px",
        "28px": "28px",
        "32px": "32px",
        "40px": "40px",
        "64px": "64px",
      },
      padding: {
        "0px": "0px",
        "20px": "20px",
        "26px": "26px",
        "80px": "80px",
      },
      margin: {
        "0px": "0px",
        "80px": "80px",
        "160px": "160px",
      },
      flexBasis: {
        "30%": "30%",
        "70%": "70%",
      },
      borderRadius: {
        "1px": "1px",
        full: "100%",
      },
      minWidth: {
        "70%": "70%",
      },
      maxWidth: {
        "85%": "85%",
      },
    },
  },
  plugins: [],
};
