import webpack from 'webpack';
import path from 'path';

import paths from './paths';

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'source-map',
  entry: {
    rhinostyle: paths.scripts.distEntry,
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'rhinostyle',
    path: path.join(__dirname, '../', paths.scripts.dist),
  },
  externals: {
    TweenLite: 'TweenLite',
  },
  mode: nodeEnv,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '../', 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
