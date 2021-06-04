const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const paths = require('./paths');
const { createCSSLoader, createLessLoader } = require('./helpers');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: [paths.main],
  // 输出
  output: {
    path: paths.dist,
    publicPath: paths.publicPath,
    filename: 'assets/js/[name].[hash:6].js',
    chunkFilename: 'assets/js/[name].[chunkhash:6].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': paths.src,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [paths.src],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            use: createCSSLoader(true),
            include: [paths.src],
          },
          {
            /* src以外的模块默认不使用CSS_modules */
            use: createCSSLoader(false),
          },
        ],
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            use: createLessLoader(true),
            include: [paths.src],
          },
          {
            /* src以外的模块默认不使用CSS_modules */
            use: createLessLoader(false),
          },
        ],
      },
      {
        test: /fonts\/.*\.(ttf|eot|woff|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /fonts\/.*\.(ttf|eot|woff|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              replaceAttrValues: { old: 'new' },
            },
          },
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || ''),
      'process.env.API_ENV': JSON.stringify(process.env.API_ENV || ''),
    }),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
  ],
};
