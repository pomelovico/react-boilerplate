/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../build');
const assets = path.join(dist, 'assets');
const main = path.join(src, 'index.tsx');
const public = path.join(__dirname, '../public');
const html = path.resolve(public, './index.html');
const publicPath = '/';

module.exports = {
  src,
  dist,
  assets,
  main,
  html,
  publicPath,
  public
};
