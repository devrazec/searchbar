/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // all your components
    './node_modules/flowbite-react/**/*.js', // include React components
    flowbite.content(), // ensures Tailwind scans Flowbite utility classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // use plugin from flowbite
  ],
};
