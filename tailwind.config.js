/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.{js,ts}" ,
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

