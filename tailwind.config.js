/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E94B6A",
        background: "#F7F5F4",
        card: "#FFFFFF",
        muted: "#9CA3AF",
        dark: "#111827",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
