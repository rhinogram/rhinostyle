import webpack from 'webpack';
import path    from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const vendor = [
  'react',
  'react-dom',
  'moment',
  'component-playground',
];

module.exports = {
  devtool: 'eval',
  entry: {
    vendor,
    'rhinostyle-docs':    path.join(__dirname, '../src/scripts/docs/entry.js'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
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
          path.resolve(__dirname, '../src/scripts'),
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChuncks: 3,
    }),
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
