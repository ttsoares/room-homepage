/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark_gray: "hsl(0, 0%, 63%)",
        vd_gray: "hsl(0, 0%, 27%)",
      },
      backgroundImage: () => ({
        img_dark: "url('/image-about-dark.jpg')",
        img_light: "url('/image-about-light.jpg')",
      }),
    },
  },
  plugins: [require("tailwindcss-animated")],
};
