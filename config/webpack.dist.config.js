import webpack from 'webpack';
import path    from 'path';

module.exports = {
  devtool: 'source-map',
  entry: {
    rhinostyle: [path.join(__dirname, '../src/scripts/components/index.js')],
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
  output: {
    path: path.join(__dirname, '../dist/scripts'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'rhinostyle',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
          'eslint-loader',
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
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
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
