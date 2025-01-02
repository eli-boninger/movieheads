import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        main: {
          '50': '#ecfcff',
          '100': '#d4f6ff',
          '200': '#b2f2ff',
          '300': '#7decff',
          '400': '#40ddff',
          '500': '#14c2ff',
          '600': '#00a3ff',
          '700': '#008bff',
          '800': '#007ae0',
          '900': '#085ea0',
          '950': '#0a3961',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
