/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'odoo-purple': '#714B67',
        'odoo-dark': '#212529',
        'odoo-blue': '#00A09D',
        'odoo-yellow': '#FFBB33',
        'odoo-gray': '#F8F9FA',
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
