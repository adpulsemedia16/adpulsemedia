import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#100030",
          plum: "#300030",
          purpleDark: "#180036",
          purpleDeep: "#240046",
          magenta: "#EF0B80",
          magentaHover: "#D60971",
          pink: "#FB0C85",
          pinkLight: "#FF4BA8",
          dark: "#17131F",
          darkMuted: "#3A3545",
          soft: "#F7F7FA",
          cardLight: "#FFFFFF",
          border: "#E5E5EB",
          borderDark: "rgba(255, 255, 255, 0.12)",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #100030 0%, #630044 52%, #EF0B80 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #180036 0%, #7A0055 52%, #FB0C85 100%)",
        "brand-dark-gradient": "linear-gradient(180deg, #100030 0%, #1A0138 100%)",
        "card-glow": "radial-gradient(circle at 50% 0%, rgba(239, 11, 128, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(239, 11, 128, 0.15)",
        "brand-md": "0 8px 24px rgba(239, 11, 128, 0.22)",
        "brand-lg": "0 12px 36px rgba(239, 11, 128, 0.3)",
        "card-soft": "0 4px 20px rgba(16, 0, 48, 0.06)",
        "card-hover": "0 12px 30px rgba(16, 0, 48, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
