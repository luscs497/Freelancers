/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Coletivo Haja - brasilidade sólida
        verde: {
          DEFAULT: '#1F5132',   // verde mata profundo
          escuro: '#143020',
          claro: '#2D7A4A',
        },
        amarelo: {
          DEFAULT: '#E8B43C',   // amarelo ocre / sol
          escuro: '#C99428',
          claro: '#F0C868',
        },
        azul: {
          DEFAULT: '#1E3A8A',   // azul anil profundo
          escuro: '#142966',
          claro: '#2E4FAF',
        },
        creme: {
          DEFAULT: '#F5EFE0',   // off-white papel
          escuro: '#E8DFC9',
          claro: '#FAF6EC',
        },
        terra: {
          DEFAULT: '#C75D2E',   // terracota / laranja queimado
          escuro: '#9C4720',
        },
        carvao: '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.92 0 0 0 0 0.85 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'spin-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
