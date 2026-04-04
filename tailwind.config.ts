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
          green: "#1F7A3E",
          "dark-green": "#14532D",
          "light-green": "#DCFCE7",
          white: "#FFFFFF",
          accent: "#22C55E",
          "accent-hover": "#16A34A",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #14532D 0%, #1F7A3E 50%, #15803D 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(20,83,45,0.65) 0%, rgba(20,83,45,0.85) 100%)",
      },
      animation: {
        "float-up": "floatUp 0.4s ease-out",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "scroll-left": "scrollLeft 28s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0px)", boxShadow: "0 4px 20px rgba(31,122,62,0.15)" },
          "100%": { transform: "translateY(-6px)", boxShadow: "0 20px 40px rgba(31,122,62,0.35)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(34,197,94,0.4)" },
          "50%": { boxShadow: "0 0 28px rgba(34,197,94,0.85), 0 0 60px rgba(34,197,94,0.2)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 4px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
        "glass-hover": "0 16px 48px rgba(31,122,62,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        "green-glow": "0 0 32px rgba(34,197,94,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
