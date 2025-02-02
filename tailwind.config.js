/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
