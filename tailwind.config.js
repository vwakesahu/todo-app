/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreyish: "#f5f5f5",
        textColor: "#484848",
        headingColor: '#434343',
        lightPink: "#fddada",
        lightBlue: "#d1e9ed",
        yellowColor: "#ffd33c"
      },
    },
  },
  plugins: [],
};
