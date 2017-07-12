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
  ],
};
