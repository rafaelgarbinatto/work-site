/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            green: '#24A148',
            cyan: '#33B1A9',
            blue: '#1155CC',
            orange: '#FF8A00',
            red: '#F7474F',
          },
          dark: {
            text: '#1a1a1a',
            body: '#333333',
          },
          light: {
              bg: '#FFFFFF',
              card: '#F8F9FA',
              border: '#EAECEF',
          }
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }