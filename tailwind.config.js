/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        surface: {
          950: '#080a0f',
          900: '#0d1117',
          800: '#161b24',
          700: '#1e2532',
          600: '#252d3d',
        },
        accent: {
          DEFAULT: '#6EE7B7',
          dim: '#3D9970',
          muted: 'rgba(110,231,183,0.12)',
        },
        wire: 'rgba(255,255,255,0.06)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'radial-surface': 'radial-gradient(ellipse at top, #0d1117 0%, #080a0f 100%)',
      },
    },
  },
  plugins: [],
}
