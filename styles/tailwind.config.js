module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  variants: {},
  plugins: [],
};
