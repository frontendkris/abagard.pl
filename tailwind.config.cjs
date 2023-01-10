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
    themes: [{
      abagard: {
        "primary": "#695D68",
        "secondary": "#9FCEDC",
        "accent": "#b54164",
        "neutral": "#292524",
        "light": "#efeae3",
        "base-100": "#FFFFFF",
        "info": "#4AA8BF",
        "success": "#81328F",
        "warning": "#EF8234",
        "error": "#EA4034",
      },
    }],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
