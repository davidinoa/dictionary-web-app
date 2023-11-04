/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        gray: {
          dark: '#1f1f1f',
          charcoal: '#2d2d2d',
          slate: '#3a3a3a',
          silver: '#757575',
          light: '#e9e9e9',
          platinum: '#f4f4f4',
        },
        white: '#ffffff',
        lavender: '#a445ed',
        red: '#ff5252',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: ['LoraVariable', 'Lora', ...defaultTheme.fontFamily.serif],
        mono: [
          'InconsolataVariable',
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [],
}
