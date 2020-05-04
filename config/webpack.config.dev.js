const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const base = require("./webpack.config.base");
const paths = require("./paths");
const proxy = require("./proxy");

const devConfig = {
  devtool: "cheap-module-source-map",
  output: {
    pathinfo: true,
    globalObject: "(typeof self !== 'undefined' ? self : this)", // see:https://github.com/webpack/webpack/issues/6642
  },
  devServer: {
    hot: true,
    contentBase: paths.dist,
    port: 3001,
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true,
    proxy,
    host: "0.0.0.0",
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
      favicon: path.resolve(__dirname, "../public/favicon.ico"),
      filename: `${paths.dist}/index.html`,
    }),
    new ErrorOverlayPlugin(),
  ],
};

module.exports = merge(base, devConfig);
