/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bnazanin: 'bnazanin',
        title: 'title',
        title1: 'title1',
        title2: 'title2',
        title3: 'title3',
      },
      boxShadow: {
        shadow1: '0 0 0 0.2rem #ff00a6',
      },
      animation: {
        anime1: 'box1 4s linear infinite alternate',
        anime2: 'box2 4s linear infinite alternate',
      },
      backgroundImage: {
        bggrad: 'radial-gradient(100% 303.06% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)',
      },
    },
  },
  plugins: [],
};
