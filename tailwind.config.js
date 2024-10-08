/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-stone-100': 'hsl(30, 54%, 90%)',
        'custom-stone-150': 'hsl(30, 18%, 87%)',
        'custom-stone-600': 'hsl(30, 10%, 34%)',
        'custom-stone-900': 'hsl(24, 5%, 18%)',
        'custom-brown-800': 'hsl(14, 45%, 36%)',
        'custom-rose-800': 'hsl(332, 51%, 32%)',
        'custom-rose-50': 'hsl(330, 100%, 98%)',
      },
    },
  },
  plugins: [],
};