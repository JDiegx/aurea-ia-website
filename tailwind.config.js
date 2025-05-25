/** @type {import('tailwindcss').Config} */
export const content = [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // o './src/**/*.{html,js}' dependiendo de tu estructura
];
export const theme = {
    extend: {
        fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    }
};
export const plugins = [];
