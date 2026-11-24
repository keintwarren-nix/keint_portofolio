/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#06051B',
          900: '#0B0A2E',
          850: '#110D3D',
          800: '#1A0F4D',
          700: '#281775',
          600: '#4124A8',
        },
        cosmic: {
          magenta: '#C2269E',
          purple: '#6B3FD4',
          violet: '#8E8CFF',
          pink: '#FF9ECF',
          peach: '#FFC9A8',
          cyan: '#38EF7D',
          gold: '#FFD166',
        },
        retro: {
          text: '#F2F0FF',
          muted: '#A9A6D6',
          border: 'rgba(142, 140, 255, 0.25)',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'pixel-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.75)',
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.85)',
        'pixel-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.95)',
        'pixel-glow': '0 0 16px rgba(194, 38, 158, 0.4), 4px 4px 0px 0px rgba(0, 0, 0, 0.85)',
        'pixel-cyan': '0 0 16px rgba(56, 239, 125, 0.4), 4px 4px 0px 0px rgba(0, 0, 0, 0.85)',
        'pixel-violet': '0 0 16px rgba(142, 140, 255, 0.35), 4px 4px 0px 0px rgba(0, 0, 0, 0.85)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(194, 38, 158, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 18px rgba(142, 140, 255, 0.9))' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      }
    },
  },
  plugins: [],
}
