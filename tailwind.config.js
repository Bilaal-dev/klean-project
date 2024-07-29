/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif",],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('images/blog-1.jpg')",
        'head': "url('images/blog-2.jpg')",
        'third': "url('images/blog-3.jpg')",
        'fourth': "url('images/carousel-2.jpg')",
        'images': "url('images/blog-3.jpg')",
      },
    },
  },
  plugins: [],
}

