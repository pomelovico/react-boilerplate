module.exports = ({ file, env }) => ({
  ident: "postcss",
  plugins: {
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
  },
});
