import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        screens: {
          '2xl': '1440px',
        },
      },
      colors: {
        'primary': '#6557f5',
        'secondary': '#d3455b'
      },
      fontSize: {
        'title-1': ['20px', '28px'],
        'title-2': ['18px', '24px'],
        'paragraph-1': ['16px', '24px'],
        'paragraph-2': ['14px', '20px'],
        'heading-3': ['28px', '36px'],
        'small-1': ['12px', '16px'],
        'small-2': ['10px', '12px'],
        'sub-heading': ['24px', '32px'],
      },
    },
  },
  plugins: [],
};
export default config;
