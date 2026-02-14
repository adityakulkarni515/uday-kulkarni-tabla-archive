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
        // Deep background palette
        canvas: {
          DEFAULT: "#080404",
          "50": "#0f0606",
          "100": "#150808",
          "200": "#1c0b0b",
          "300": "#240e0e",
        },
        // Maroon / crimson palette
        maroon: {
          DEFAULT: "#6B1010",
          "50": "#f9ecec",
          "100": "#f0cccc",
          "200": "#d97070",
          "300": "#c04040",
          "400": "#8B1A1A",
          "500": "#6B1010",
          "600": "#4e0c0c",
          "700": "#360808",
          "800": "#220505",
          "900": "#110303",
        },
        // Gold accent palette
        gold: {
          DEFAULT: "#C9A227",
          "50": "#fdf8ec",
          "100": "#f9edc5",
          "200": "#f0d06b",
          "300": "#e6b830",
          "400": "#C9A227",
          "500": "#a8841e",
          "600": "#866815",
          "700": "#634d0e",
          "800": "#3f3108",
          "900": "#1e1804",
        },
        // Warm text palette
        parchment: {
          DEFAULT: "#F5E6D0",
          "50": "#fdfaf5",
          "100": "#f9f1e4",
          "200": "#F5E6D0",
          "300": "#e8cfa8",
          "400": "#d4b07a",
          "500": "#b8904f",
          "600": "#9a7235",
          "700": "#7a5825",
          "800": "#573d18",
          "900": "#33230d",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        devanagari: ["Noto Serif Devanagari", "serif"],
      },
      backgroundImage: {
        "tabla-texture": "url('/textures/tabla-bg.png')",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(107,16,16,0.15) 0%, transparent 70%)",
        "gold-shimmer":
          "linear-gradient(135deg, rgba(201,162,39,0.1) 0%, transparent 50%, rgba(201,162,39,0.1) 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 20px rgba(201,162,39,0.3), 0 0 60px rgba(201,162,39,0.1)",
        "glow-maroon": "0 0 20px rgba(107,16,16,0.5), 0 0 60px rgba(107,16,16,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(201,162,39,0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#F5E6D0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
