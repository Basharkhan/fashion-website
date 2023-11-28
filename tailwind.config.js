/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#FAE3B6',
        'secondaryColor': '#FDBB57',
        'counterBgColor': '#FEECC8',
        'bestSellingBgColor': '#CFA485',
        'buttonBorderColor': '#FFD687',
      },
      fontSize: {      
        'bannerParagraphFontSize': '22px',
        'counterBodyFontSize': '28px',
        'header1FontSize': ['64px']
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'frank': ['Frank Ruhl Libre'],
        'podkova': ['Podkova'],
      },
    },
  },
  plugins: [],
}