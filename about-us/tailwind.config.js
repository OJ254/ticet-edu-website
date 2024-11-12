module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./src/pages/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
        "9xl": "100rem",
      },

      gridTemplateColumns: {
        "auto-fill-260": "repeat(auto-fill, minmax(350px, 3fr))",
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1600px",
        // => @media (min-width: 1536px) { ... }
      },

      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#f1f2fc",
          100: "#e6e6f9",
          200: "#d2d2f3",
          300: "#b8b7ea",
          400: "#a099e0",
          500: "#8f80d4",
          600: "#7f66c5",
          "main-700": "#6750a4",
          800: "#59478c",
          900: "#4b3f70",
          950: "#2d2541",
        },
        secondary: {
          "red-500": "#f8583b",
          "red-600": "#e74a2d",
          "blue-500": "#35b0fc",
          "blue-600": "#2195f2",
          "green-400": "#6ace4d",
          "green-500": "#47ab2c",
          "yellow-500": "#fab600",
          "yellow-600": "#e28f00",
          "gray-500": "#e4e4e4",
          "gray-600": "#888da8",
        },

        "app-colors": {
          "p-normal": "#0f0f0f",
          "p-normal-d": "#fff5f3",

          "p-small": "#4c4c4a",
          "p-small-d": "#949aa8",

          "p-smaller": "#978da8",
          "p-smaller-d": "#978da8",

          heading: "#0f0f0f",
          "heading-d": "#fff5f3",

          icon: "#7a8196",
          "icons-d": "#7a8196",

          surface: "#f8fafc",
          "surface-d": "#20232b",
          "surface-h": "#f5f5f5",
          "surface-d-h": "#2d3138",

          input: "#f2f4f8",
          "input-d": "#2f323d",

          "body-bg": "#edf2f6",
          "body-bg-d": "#121419",
          "header-bg": "#3F4257",
          "header-bg-d": "#2F303C",

          border: "#d1d5db",
          "border-d": "#343946",
        },
      },
    },
  },
  plugins: [],
};
