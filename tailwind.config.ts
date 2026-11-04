import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5e6fb5",
          hover: "#47579a",
          dark: "#394882",
          light: "#7b8bc9",
          50: "#f4f6fc",
          100: "#e6ebf8",
          200: "#cfd7f2",
          500: "#5e6fb5",
          600: "#47579a",
          700: "#36437a",
          800: "#27325c",
        },
        accent: {
          DEFAULT: "#ee6196",
          hover: "#e34682",
          dark: "#c72664",
          light: "#f78da7",
          50: "#fff0f5",
          500: "#ee6196",
          600: "#e34682",
        },
        dark: {
          950: "#07132b",
          900: "#0c1b3d",
          850: "#12234f",
          800: "#192d63",
          700: "#243c7d",
        },
        muted: {
          DEFAULT: "#677289",
          light: "#8a96ae",
          dark: "#4c5568",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8f9fc",
          subtle: "#f2f4f8",
          border: "#e8ecef",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        display: ["var(--font-barlow)", "sans-serif"],
        heading: ["var(--font-barlow)", "sans-serif"],
      },
      boxShadow: {
        "card-subtle": "0 8px 24px -4px rgba(16, 24, 40, 0.06)",
        "card-hover": "0 20px 40px -10px rgba(94, 111, 181, 0.18)",
        "accent-glow": "0 10px 25px -5px rgba(238, 97, 150, 0.35)",
        "primary-glow": "0 10px 25px -5px rgba(94, 111, 181, 0.35)",
        "dark-elevated": "0 25px 50px -12px rgba(7, 19, 43, 0.5)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #5e6fb5 0%, #ee6196 100%)",
        "gradient-brand-reverse": "linear-gradient(135deg, #ee6196 0%, #5e6fb5 100%)",
        "gradient-cta": "linear-gradient(90deg, #5e6fb5 0%, #7687cf 50%, #ee6196 100%)",
        "gradient-dark": "linear-gradient(180deg, #07132b 0%, #0d1e42 100%)",
        "gradient-soft": "linear-gradient(180deg, #f8f9fc 0%, #ffffff 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

