/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'primary': 'rgb(16, 17, 18)',
          'secondary': 'rgb(39, 40, 41)',
          1: '#353334',
          'hover': '#1C1A19',
        },
        'white': {
          'faded': '#D9D9D9',
          'gray': '#998F8F',
          '1': '#6A6B6C',
        },
        'purple': {
          'primary': 'rgb(145, 75, 241)',
        }
      },
      spacing: {
        100: '25rem',
      },
      maxWidth: {
        '87': '348px'
      },
      fontFamily: {
        'outfit': ['Outfit', 'Outfit Placeholder', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
