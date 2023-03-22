/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
    },
    colors: {
      "light-red": "hsl(0, 100%, 67%)",
      "orangey-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",
      "ligt-stale-blue": "hsl(252, 100%, 67%)",
      "ligt-royal-blue": "hsl(241, 81%, 54%)",
      "violet-blue": "hsl(256, 72%, 46%, 1)",
      white: "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender": "hsl(241, 100%, 89%,)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
    },
    extend: {},
  },
  plugins: [],
};
