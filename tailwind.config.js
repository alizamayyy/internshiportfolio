const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Added NextUI content path
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark mode background color
        background: "#0e1117",
        foreground: "#ffffff", // You can also set a custom foreground color if needed
        secondary: "#fd8ea9",
      },
    },
  },
  // Added darkMode option
  darkMode: "class",
  // Added NextUI plugin
  plugins: [nextui()],
};
