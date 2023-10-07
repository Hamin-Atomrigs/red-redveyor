/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'cyan': '#65CEC2',
      'black': '#11151C',
      'white': '#FCFCFC',
      'button-yellow': '#EFDD8D',
      'card-section': '#EAF2F1',
      'card-portfolio': 'rgba(102, 102, 102, 0.50)',
      'border-line': 'rgba(252, 252, 252, 0.20)',
      'grey': '#737373',
      'grey-2': '#f1f1f1',
      'green': '#EAF2F1'
    },
    boxShadow: {
      'service-card': '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'
    }
  },
  plugins: [],
};
