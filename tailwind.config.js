/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        thirdColor: "var(--color-third)",
        errorColor: "var(--color-error)",
        editColor: "var(--color-edit)",
        offWhiteColor: "var(--color-offwhite)",
        descriptionColor: "var(--color-description)",
        titleColor: "var(--color-title)",
      },
      // Font Size
      fontSize: {
        header: "1.25rem",
        title: "1.125rem",
        description: "1rem",
      },
      // Font Weight
      fontWeight: {
        title: "500",
        description: "500",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      // Screen sizes
      screens: {
        xsm: "320px",
        mdp: "992px", //md plus
      },
    },
  },
  plugins: [],
}

