/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#06275a',
        deep: '#021947',
        pool: '#078ed6',
        poolLight: '#d7f1ff',
        green: '#43ae2b',
        lime: '#79d223',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 18px 45px rgba(2, 25, 71, 0.14)',
        button: '0 8px 18px rgba(67, 174, 43, 0.28)',
      },
    },
  },
  plugins: [],
}
