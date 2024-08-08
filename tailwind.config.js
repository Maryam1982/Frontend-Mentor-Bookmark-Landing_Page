/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#5368df",
        primary_red: "#fa5757",
        grayish_blue: "#9194a1",
        dark_blue: "#252b46",
      },
      fontFamily: { sans: ["Rubik", "sans-serif"] },
      width: {
        desktop: "var(--image-width-desktop)",
        mobile: "var(--image-width-mobile)",
      },
      padding: {
        desktop: "var(--sides-padding-desktop)",
        mobile: "var(--side-padding-mobile)",
      },
      margin: {
        desktop: "var(--sides-padding-desktop)",
      },
      letterSpacing: {
        extra_wide: ".35rem",
      },
      borderWidth: {
        extra_light: "1px",
      },
      screens: {
        "x-sm-3": "412px",
        "x-sm-2": "550px",
        "x-sm-1": "600px",
        "md-0": "800px",
        "md-1": "824px",
        "md-2": "900px",
        "md-3": "940px",
        "lg-1": "1044px",
        "xl-1": "1325px",
      },
    },
  },
  plugins: [],
};
