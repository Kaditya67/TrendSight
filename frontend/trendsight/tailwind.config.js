/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        'xs': '480px',  // Extra small devices like very small phones
        'sm': '640px',  // Small devices (phones)
        'md': '768px',  // Medium devices (tablets)
        'lg': '1024px', // Large devices (laptops)
        'xl': '1280px', // Extra large devices (desktops)
        '2xl': '1536px' // 2x Extra large devices (large desktops)
      },
      colors: { 
        // Custom colors for the project
        primary: '#1D4ED8',  // Tailwind's blue-700
        secondary: '#9333EA',// Tailwind's purple-600
        accent: '#F59E0B',   // Tailwind's amber-500
        neutral: '#374151',  // Tailwind's gray-700
        success: '#10B981',  // Tailwind's green-500
        warning: '#FBBF24',  // Tailwind's yellow-400
        danger: '#EF4444',   // Tailwind's red-500
      },
      height: {
        // Custom height values
        'screen-90': '90vh',// 90% of screen height
      }
    },
  },
  plugins: [],
}

