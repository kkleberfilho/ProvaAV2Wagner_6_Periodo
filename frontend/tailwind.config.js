/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Use dois asteriscos para capturar arquivos em subdiretórios
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
