/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#10b981',
          50: '#d1fae5',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#f59e0b',
          100: '#fef3c7',
        },
        warning: {
          DEFAULT: '#eab308',
          100: '#fef9c3',
        },
        text: {
          primary: '#1f2937',
          secondary: '#6b7280',
          tertiary: '#9ca3af',
        },
        border: '#e5e7eb',
        surface: '#f9fafb',
      },
    },
  },
  plugins: [],
}
