/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Views/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFF',
          DEFAULT: '#F5F5F5',
          dark: '#eee',
        },
        secondary: {
          light: '#67eeff',
          DEFAULT: '#00BBF0',
          dark: '#008bbd',
        },
        tertiary: {
          light: '#2d2d2d',
          DEFAULT: '#1a1a1a',
          dark: '#000',
        },
      },
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 0.9s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        beat: 'beat 1s ease-in-out infinite',
        toastIn: 'toastIn .8s both',
        toastOut: 'toastOut .8s both',
      },
      keyframes: {
        toastIn: {
          '0%': {
            transform: 'var(--elm-translate) scale(0.7)',
            opacity: 0.7,
          },
          '80%': { transform: 'translate(0px) scale(0.7)', opacity: 0.7 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        toastOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '20%': { transform: 'translate(0px) scale(0.7)', opacity: 0.7 },
          '100%': {
            transform: 'var(--elm-translate) scale(0.7)',
            opacity: 0.7,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
