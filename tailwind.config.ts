import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F36C21", // naranja principal
          dark: "#C5531A",
          light: "#FFE4D3"
        }
      },
      borderRadius: {
        'xl': '12px'
      }
    },
  },
  plugins: [],
} satisfies Config;
