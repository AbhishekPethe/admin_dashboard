/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-bg': '#2a3447',
        'soft-bg': '#384256',
        'dark-bg': '#222b3c',
        'main-color': "#fff",
        'soft-color': "#ddd",
        'dark-color' : '#2a3447'
      }
    },
  },
  plugins: [],
}
