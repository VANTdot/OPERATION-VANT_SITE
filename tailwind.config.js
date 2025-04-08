/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#535E3C',    // Verde Militar
        background: '#191A1A', // Cinza Carbono
        text: '#F5F5F5',       // Branco Gelo
        accent: '#738253',     // Verde-limão acinzentado
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        'scan-vertical': {
          '0%': { top: '-3px', opacity: '0' },
          '50%': { opacity: '0.7' },
          '100%': { top: 'calc(100% - 3px)', opacity: '0' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'scan-vertical': 'scan-vertical 1.2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
} 