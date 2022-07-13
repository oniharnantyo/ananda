module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./pages/**/*.jsx", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty:{
        'width': 'width'
      }
    },
    textColor: {
      'primari': '#022855',
      'primary-second' : '#034087',
      'primary-active': '#046ADF',
      'red': '#ff0000',
      'white': '#ffffff',
      'asphalt':'#262626'
    },
    colors:{
      'primari': '#022855',
      'primary-active': '#046ADF',
      'primary-second' : '#034087',
      'primary-blue-three' : '#2870C3',
      'primary-blue-three-200':'#538dcf',
      'red' : '#ff0000',
      'reddish'  : '#cccdf0',
      'asphalt':'#262626',
      'white': '#ffffff',
      'asphalt-secondary' : '#434343',
      'black-secondary' : '#141414'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
