import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f1ff',
          100: '#e7e2ff',
          200: '#cbc1ff',
          300: '#a99aff',
          400: '#8472f3',
          500: '#6C5CE7',
          600: '#5b46d6',
          700: '#4E3FCB',
          800: '#3d31a3',
          900: '#322a82',
        },
        mint: {
          400: '#19D4A6',
          500: '#00B894',
          600: '#009E7D',
        },
        ink: {
          50:  '#F7F7FB',
          100: '#EFEFF6',
          200: '#E8E8F0',
          400: '#8C8CA1',
          500: '#6B6B7A',
          800: '#1C1C28',
          900: '#111126',
          950: '#0B0B12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6C5CE7 0%, #00B894 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #8E7CFF 0%, #44C4FF 50%, #00E5A8 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,92,231,0.25), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,184,148,0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(108, 92, 231, 0.45)',
        'glow-mint': '0 10px 40px -10px rgba(0, 184, 148, 0.45)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(2,6,23,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
