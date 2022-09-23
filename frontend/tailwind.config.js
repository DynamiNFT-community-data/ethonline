/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['monospace'],
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#27187E',
  //         secondary: '#F6AE2D',
  //       },
  //     },
  //   ],
  // },
  plugins: [require('daisyui')],
}
