module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Soleil Light", "sans-serif"],
      display: ["VisbyCF Regular", "sans-serif"],
      display_med: ["VisbyCF Medium", "sans-serif"],
    },
    fontSize: {
      xxs: [
        ".75rem",
        {
          letterSpacing: ".03125rem" //2%
        },
      ] ,
      xs: [
        ".8rem",
        {
          letterSpacing: ".03125rem" //2%
        },
      ] ,
      sm: [
        ".875rem",
        {
          letterSpacing: ".03125rem" //2%
        },
      ] ,
      base: [
        "1rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      lg: [
        "1.2rem",
        {
          letterSpacing: ".03125rem", //2%
          lineHeight: "1.375rem",
        },
      ],
      xl: [
        "1.44rem", //25px
        {
          letterSpacing: "0.015625rem", //1%
          lineHeight: "1.875rem", //1.375rem before
        },
      ],
      "2xl": [
        "1.728rem",
        {
          letterSpacing: "0", //1%
          lineHeight: "1.95rem",
        },
      ],
      "3xl": [
        "2.074rem",
        {
          letterSpacing: "0",
          lineHeight: "2.4rem",
        },
      ],
      "4xl": [
        "2.488rem",
        {
          letterSpacing: "0",
          lineHeight: "2.59rem",
        },
      ],

      "5xl": [
        "2.986rem",
        {
          letterSpacing: "0",
          lineHeight: "2.975rem",
        },
      ],

      "6xl": [
        "3.583rem",
        {
          letterSpacing: "0",
          lineHeight: "2.968rem",
        },
      ],
      "7xl": [
        "4.3rem",
        {
          letterSpacing: "0",
          lineHeight: "3.313rem",
        },
      ],
      "8xl": [
        "5.16rem",
        {
          letterSpacing: "0",
          lineHeight: "4.4rem",
        },
      ],
      "cta": [
        "1.2rem",
        {
          letterSpacing: "0.15em",
          lineHeight: "1.375rem",
        },
      ],
    },
    extend: {
      colors: {
        gvhBlue: {
          400: '#1C2A36',
          600: '#192128',
        },
        gvhGold: {
          100: '#f9f7f3',
          400: '#B89D67'
        }
      }
    },
  },
  plugins: [],
}