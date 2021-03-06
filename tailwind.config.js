module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primari': '#022855',
      'primary-second' : '#034087',
      'primary-active': '#046ADF',
      'red': '#ff0000',
      'whites': '#ffffff'
    },
    colors:{
      'primari': '#022855',
      'primary-active': '#046ADF',
      'primary-second' : '#034087',
      'primary-blue-three' : '#2870C3',
      'primary-blue-three-200':'#538dcf',
      'red' : '#ff0000',
      'reddish'  : '#cccdf0',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
