/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'var(--bg-gradient-colors)',
      },
    },
  },
  plugins: [],
};
