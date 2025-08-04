/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        border: "var(--color-border)",
        "primary-black": "var(--color-primary-black)",
        "primary-white": "var(--color-primary-white)",
        "primary-orange": "var(--color-primary-orange)",
        "primary-green": "var(--color-primary-green)",
        "primary-red": "var(--color-primary-red)",
        "primary-highlight": "var(--color-primary-highlight)",
        "secondary-dark-orange": "var(--color-secondary-dark-orange)",
        "secondary-bright-orange": "var(--color-secondary-bright-orange)",
        "secondary-red": "var(--color-secondary-red)",
        "secondary-gray": "var(--color-secondary-gray)",
        "secondary-highlight": "var(--color-secondary-highlight)",
        "ttip-gray": "var(--color-ttip-gray)",
        "divider-gray": "var(--color-divider-gray)",
        "light-gray": "var(--color-light-gray)",
      },
    },
  },
  plugins: [],
};
