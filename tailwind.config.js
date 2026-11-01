/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B1020',
          dark: '#3D0711',
          deeper: '#240309',
          light: '#8F192E',
          crimson: '#9E1B32',
        },
        gold: {
          DEFAULT: '#D4AF62',
          light: '#F3E5AB',
          bright: '#FFD700',
          dark: '#9C7A32',
          antique: '#C59B27',
        },
        ivory: {
          DEFAULT: '#FFF8EA',
          warm: '#FDF2DC',
          cream: '#F7E7CE',
        },
        saffron: {
          DEFAULT: '#E66C1E',
          light: '#F59E0B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1) rotate(-1deg)', opacity: '0.95' },
          '25%': { transform: 'scaleY(1.08) scaleX(0.95) rotate(1.5deg)', opacity: '1' },
          '50%': { transform: 'scaleY(0.94) scaleX(1.04) rotate(-0.5deg)', opacity: '0.88' },
          '75%': { transform: 'scaleY(1.05) scaleX(0.97) rotate(1deg)', opacity: '0.98' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 98, 0.35), inset 0 0 15px rgba(212, 175, 98, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 98, 0.7), inset 0 0 25px rgba(212, 175, 98, 0.3)' },
        }
      },
      animation: {
        shimmer: 'shimmer 6s infinite linear',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
        flameFlicker: 'flameFlicker 2.2s ease-in-out infinite',
        spinSlow: 'spinSlow 45s linear infinite',
        spinReverseSlow: 'spinSlow 60s linear infinite reverse',
        pulseGold: 'pulseGold 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

