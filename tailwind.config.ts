import type { Config } from 'tailwindcss'
import {
  colors,
  white,
  black,
  currentColor,
  transparent
} from './src/tokens/colors'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
  theme: {
    colors: {
      transparent,
      currentColor,
      white,
      black,
      ...colors
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif']
      }
    }
  }
}
export default config
