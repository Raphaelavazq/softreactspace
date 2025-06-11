/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "chillax-bold": ['"Chillax-Bold"', "sans-serif"],
        "chillax-extralight": ['"Chillax-Extralight"', "sans-serif"],
        "chillax-light": ['"Chillax-Light"', "sans-serif"],
        "chillax-medium": ['"Chillax-Medium"', "sans-serif"],
        "chillax-regular": ['"Chillax-Regular"', "sans-serif"],
        "chillax-semibold": ['"Chillax-Semibold"', "sans-serif"],
      },
      colors: {
        "cosmic-latte": {
          50: "var(--cosmic-latte-50)",
          100: "var(--cosmic-latte-100)",
          200: "var(--cosmic-latte-200)",
          300: "var(--cosmic-latte-300)",
          400: "var(--cosmic-latte-400)",
          500: "var(--cosmic-latte-500)",
          600: "var(--cosmic-latte-600)",
          700: "var(--cosmic-latte-700)",
          800: "var(--cosmic-latte-800)",
          900: "var(--cosmic-latte-900)",
          950: "var(--cosmic-latte-950)",
        },
        apricot: {
          50: "var(--apricot-50)",
          100: "var(--apricot-100)",
          200: "var(--apricot-200)",
          300: "var(--apricot-300)",
          400: "var(--apricot-400)",
          500: "var(--apricot-500)",
          600: "var(--apricot-600)",
          700: "var(--apricot-700)",
          800: "var(--apricot-800)",
          900: "var(--apricot-900)",
          950: "var(--apricot-950)",
        },
        "english-violet": {
          50: "var(--english-violet-50)",
          100: "var(--english-violet-100)",
          200: "var(--english-violet-200)",
          300: "var(--english-violet-300)",
          400: "var(--english-violet-400)",
          500: "var(--english-violet-500)",
          600: "var(--english-violet-600)",
          700: "var(--english-violet-700)",
          800: "var(--english-violet-800)",
          900: "var(--english-violet-900)",
          950: "var(--english-violet-950)",
        },
        "china-rose": {
          50: "var(--china-rose-50)",
          100: "var(--china-rose-100)",
          200: "var(--china-rose-200)",
          300: "var(--china-rose-300)",
          400: "var(--china-rose-400)",
          500: "var(--china-rose-500)",
          600: "var(--china-rose-600)",
          700: "var(--china-rose-700)",
          800: "var(--china-rose-800)",
          900: "var(--china-rose-900)",
          950: "var(--china-rose-950)",
        },
        "cherry-blossom": {
          50: "var(--cherry-blossom-50)",
          100: "var(--cherry-blossom-100)",
          200: "var(--cherry-blossom-200)",
          300: "var(--cherry-blossom-300)",
          400: "var(--cherry-blossom-400)",
          500: "var(--cherry-blossom-500)",
          600: "var(--cherry-blossom-600)",
          700: "var(--cherry-blossom-700)",
          800: "var(--cherry-blossom-800)",
          900: "var(--cherry-blossom-900)",
          950: "var(--cherry-blossom-950)",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "scroll-slow":
          "scroll var(--animation-duration, 80s) var(--animation-direction, forwards) linear infinite",
        "fade-in": "fadeIn 2s ease-out forwards",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [addVariablesForColors],
};
