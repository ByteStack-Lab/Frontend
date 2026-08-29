/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9F9FF',
          100: '#F1F2FF',
          200: '#E4ECF7',
          300: '#AEB2D5',
          400: '#6675F7',
          500: '#3D63EA',
          600: '#57007B',
          700: '#484C89',
          800: '#1A202C',
          900: '#2D3748'
        },
        secondary: {
          50: '#FFF4F4',
          100: '#FFE8E8',
          200: '#FFCCCF',
          300: '#FF92AE',
          400: '#F76680',
          500: '#E56F8C',
          600: '#FF3D9A',
          700: '#57007B',
          800: '#4A5568',
          900: '#2D3748'
        },
        accent: {
          50: '#F0FFF7',
          100: '#F1F2FF',
          200: '#68DBF2',
          300: '#509CF5',
          400: '#67E9F1',
          500: '#24E795',
          600: '#FFEF5E',
          700: '#F7936F',
          800: '#FFC656',
          900: '#F16063'
        },
        gray: {
          50: '#FAFAFA',
          100: '#F7F7FA',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inspiration': ['Inspiration', 'cursive']
      },
      fontSize: {
        'hero': ['53px', { lineHeight: '1.34', fontWeight: '800' }],
        'heading': ['35px', { lineHeight: '1.57', fontWeight: '700' }],
        'subheading': ['28px', { lineHeight: '1.36', fontWeight: '600' }],
        'large': ['20px', { lineHeight: '1.37', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.67', fontWeight: '400' }],
        'small': ['16px', { lineHeight: '1.56', fontWeight: '500' }],
        'tiny': ['14px', { lineHeight: '1.62', fontWeight: '400' }]
      },
      boxShadow: {
        'nav': '0px 4px 40px 0px rgba(0, 0, 0, 0.1)',
        'card': '0px 4px 30px 0px rgba(0, 0, 0, 0.05)',
        'card-hover': '0px 4px 30px 0px rgba(0, 0, 0, 0.1)',
        'btn': '0px 4px 49px 0px rgba(0, 0, 0, 0.15)',
        'custom': '0px 14px 44px 0px rgba(14, 20, 34, 0.08)'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6675F7 0%, #57007B 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F76680 0%, #57007B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFEF5E 0%, #F7936F 100%)',
        'gradient-cta': 'linear-gradient(135deg, #F1F1F5 0%, #E4ECF7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FFC656 0%, #F16063 100%)',
        'gradient-logo': 'linear-gradient(135deg, #161490 0%, #7476ED 51.04%, #E56F8C 100%)',
        'gradient-logo-footer': 'linear-gradient(135deg, #64C2DB 0%, #7476ED 51.04%, #E56F8C 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elegant': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
} 