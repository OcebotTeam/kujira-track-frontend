/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      darker: '#12121a',
      dark: '#1e1e2f',
      teal: '#60fbd0',
      blue: '#1e92e6'
    },
    fontFamily: {
      sans: ['Noto sans', 'sans-serif'],
      display: ['Noto Sans', 'sans-serif']
    }
  },
  plugins: []
}
