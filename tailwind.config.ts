import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vampire: {
          bg: '#0d0d14',
          bgalt: '#12101a',
          primary: '#620385',
          bright: '#9b12d4',
          crimson: '#8b1a1a',
          gold: '#c9a227',
        },
      },
      fontFamily: {
        vampirism: ['Vampirism', 'serif'],
        lora: ['Lora', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.7s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
