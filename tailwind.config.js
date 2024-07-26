/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './wwwroot/**/*.html',
    './wwwroot/**/*.razor',
    './wwwroot/**/*.cshtml',
    './wwwroot/**/*.css',
    './wwwroot/**/*.js',
    './wwwroot/**/*.ts',
    './Views/Home/**/*.cshtml',
    './Views/Shared/**/*.cshtml',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        info: '#3490dc',
        success: '#38c172',
        warning: '#ffed4a',
        dark: '#2d3748',
        light: '#f7fafc',
      },
    },
  },
  plugins: [],
};
