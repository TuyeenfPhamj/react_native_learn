/** @type {import('tailwindcss').Config} */
module.exports = {
  // Đã thêm ./app/**/* để Tailwind nhận diện các class trong thư mục app
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}