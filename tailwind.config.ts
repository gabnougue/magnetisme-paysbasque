import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette apaisante pour le bien-être - tons nature et boisé
        primary: {
          50: '#f0f7f4',
          100: '#d9ebe3',
          200: '#b3d7c7',
          300: '#85bda4',
          400: '#5a9d7d',
          500: '#3d7c5c', // Vert forêt principal
          600: '#2f6347',
          700: '#254d37',
          800: '#1d3c2b',
          900: '#162d20',
        },
        secondary: {
          50: '#faf5f0',
          100: '#f5ebe0',
          200: '#ead5bd',
          300: '#ddbf9a',
          400: '#cfa777',
          500: '#b88c5d', // Beige/terre
          600: '#9a7049',
          700: '#7c5a3a',
          800: '#5e4530',
          900: '#403026',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Bleu doux
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
