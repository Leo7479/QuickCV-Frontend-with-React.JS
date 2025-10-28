/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        glow: "var(--glow)",
        aliceBlue: "var(--alice-blue)",
        bgGreen: "var(--bg-green)",
        textGreen: "var(--text-green)",
        bgYellow: "var(--bg-yellow)",
        textYellow: "var(--text-yellow)",
        dark : "var(--dark)",
        lightText: "var(--light-text)",
        lightDark: "var(--light-dark)",
        lightDarker: "var(--light-darker)"
      },
      animation:{
        blink: "blink 1.5s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

