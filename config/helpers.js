const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isEnvDevelopment = process.env.NODE_ENV === "development";

const createCSSLoader = (useCssModule) => {
  return [
    isEnvDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    useCssModule
      ? {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[local]_[hash:base64:5]",
          },
        }
      : "css-loader",
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: path.resolve(__dirname, "../postcss.config.js"),
        },
      },
    },
  ];
};

const createLessLoader = (useCssModule, extract, options = {}) => {
  return createCSSLoader(useCssModule, extract).concat({
    loader: "less-loader",
    options,
  });
};

module.exports = { createCSSLoader, createLessLoader };
