/* import defaultTheme from 'tailwindcss/defaultTheme' */
/* import tailwindScrollBarHide from 'tailwind-scrollbar-hide' */

import { heroui } from '@heroui/theme'


/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heroui/theme/dist/components/(button|navbar|code|input).{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi-variable': ['satoshi-variable', 'sans-serif'],
      },
      screens: {
        'xs': '420px'
      }
    }
  },
  plugins: [
    heroui(),
    /* tailwindScrollBarHide */
  ]
}

export default config