import webpack from 'webpack';
import path from 'path';

import paths from './paths';

const nodeEnv = process.env.NODE_ENV || 'development';
const vendor = [
  'react',
  'react-dom',
  'moment',
];

module.exports = {
  devtool: 'eval',
  entry: {
    vendor,
    'rhinostyle-docs': paths.scripts.docEntry,
  },
  output: {
    path: path.join(__dirname, '../', paths.scripts.build),
    filename: '[name].js',
  },
  externals: {
    TweenLite: 'TweenLite',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../src/scripts/'),
          path.resolve(__dirname, '../node_modules'), // Include dependencies since some modules come transpiled in ES6 and will break IE11.
        ],
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChuncks: 3,
    }),
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
