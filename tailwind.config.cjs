/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '20px',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['cmyk'],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
