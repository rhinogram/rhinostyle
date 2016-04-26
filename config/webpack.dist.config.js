import webpack from 'webpack';
import path    from 'path';

export default {
  cache: true,
  entry: {
    rhinostyle: path.join(__dirname, '../src/scripts/components/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist/scripts'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Rhinostyle'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ],
  externals: [
    'react',
    'classnames'
  ]
}
