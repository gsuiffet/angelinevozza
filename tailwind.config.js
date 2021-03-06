module.exports = {
  content: ["./**/*.{jsx,tsx,ts}"],
  theme: {
    extend: {
      height: {
        "screen+1": "calc(100vh + 1px)",
      },
      colors: {
        yellow: "#FFED00",
        red: "#E5007D",
        blue: "#009EE3",
        transparent: "transparent",
        primary: "#",
        white: "#fff",
      },
      backgroundImage: {
        pattern: "url('/pattern.svg')",
        illustration: "url('/illustrations/tattoo/paon_print.jpg')",
        projets: "url('/shoko_project/logo-shoko.svg')",
      },
      boxShadow: {
        lg: "0px 3px 12px -6px rgba(0, 0, 0, 0.05), 0px 3px 24px -4px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        xs: ["10px", "10px"],
        tiny: ["12px", "16px"],
        sm: ["14px", "20px"],
        regular: ["18px", "28px"],
        h1: ["56px", "64px"],
        "h1-sm": ["35px", "45px"],
        h2: ["40px", "50px"],
        "h2-sm": ["25px", "32px"],
        h3: ["32px", "42px"],
        "h3-sm": ["22px", "32px"],
        h4: ["22px", "42px"],
        "h4-sm": ["16px", "42px"],
      },
    },
    fontFamily: {
      sans: [
        "Quicksand",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
