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
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
  ],
};
