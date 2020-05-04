const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.config.base");
const paths = require("./paths");

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.html,
    favicon: path.resolve(__dirname, "../public/favicon.ico"),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    filename: `${paths.dist}/index.html`,
  }),
  new MiniCssExtractPlugin({
    ignoreOrder: true,
    filename: "assets/css/[name].[contenthash:6].css",
    chunkFilename: "assets/css/[name].[contenthash:6].css",
  }),
  new OptimizeCSSAssetsPlugin(),
];

const prodConfig = {
  devtool: false,
  bail: true,
  output: {
    publicPath: "your  public path",
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "assets/images/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "mainfest",
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // 必须true才生成, 见 https://webpack.js.org/configuration/devtool/
        parallel: true,
        cache: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      /* tos不能识别 ~ */
      automaticNameDelimiter: "_",
    },
  },
  plugins,
};

module.exports = merge(base, prodConfig);
