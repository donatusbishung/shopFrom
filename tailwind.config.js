/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pri: '#DB4444',
        sec: '#00FF66',
        'grey-color': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
