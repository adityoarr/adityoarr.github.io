/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `~/App.{js,ts,vue}`,
    `~/pages/**/*.vue`,
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

