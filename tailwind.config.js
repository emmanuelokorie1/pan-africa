/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E75325',
        background1: '#431101',
        background2: '#DED9C9',
        secback: '#FBF5F3',
        textColor: '#E75425',
        textColor2: '#0A0A0A',
      },
      screens: {
        's450': '450px',     // Customizing sm breakpoint
        'sm': '640px',     // Customizing sm breakpoint
        'md': '770px',     // Customizing md breakpoint
        's900': '900px',     // Customizing md breakpoint
        's1000': '1000px',     // Customizing md breakpoint
        's1100': '1100px',     // Customizing md breakpoint
        'lg': '1024px',    // Customizing lg breakpoint
        'xl': '1280px',    // Customizing xl breakpoint
        '2xl': '1536px',   // Customizing 2xl breakpoint
      },
      spacing: {
        'px': '3rem'
      }
    },
  },
  plugins: [],
}

