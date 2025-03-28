/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          main: "#1d70ac", // #163853      fd6f00
          hover: "#2c8ecb", // #2c8ecb     #ff890a
          active: " #195a8b  ", // #195a8b        #cc5002
        }, // Puedes definir el color como una variable
        secondary: "#FF4081",
        customGray: "#B0BEC5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"], // Usa la variable de la fuente
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
