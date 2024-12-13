module.exports = {
  content: [
    "./index.html",          
    "./src/**/*.{js,jsx}",   
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
      },
      animationDelay: {
        300: '300ms',
        600: '600ms',
      }
    }
  },
  variants: {
    extend: {
      animation: ['animate-fadeIn']
    }
  },
  plugins: [],
}