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
          title: "#242424",
          heading: "#171717",
          subtitle: "#575757",
          link: "#404040",
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
