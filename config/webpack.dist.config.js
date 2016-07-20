import webpack from 'webpack';
import path    from 'path';

export default {
  devtool: 'cheap-module-source-map',
  entry: {
    rhinostyle: [path.join(__dirname, '../src/scripts/components/index.js')],
  },
  output: {
    path: path.join(__dirname, '../dist/scripts'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'rhinostyle',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
