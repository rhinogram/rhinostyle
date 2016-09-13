import webpack from 'webpack';
import path    from 'path';

const dependencies = [
  'react',
  'classnames',
  'component-playground',
];

export default {
  devTool: 'cheap-module-source-map',
  entry: {
    vendor:      dependencies,
    avatar:      path.join(__dirname, '../src/scripts/docs/AvatarApp.jsx'),
    close:       path.join(__dirname, '../src/scripts/docs/CloseApp.jsx'),
    cover:       path.join(__dirname, '../src/scripts/docs/CoverApp.jsx'),
    bucket:      path.join(__dirname, '../src/scripts/docs/BucketApp.jsx'),
    button:      path.join(__dirname, '../src/scripts/docs/ButtonApp.jsx'),
    datepicker:  path.join(__dirname, '../src/scripts/docs/DatePickerApp.jsx'),
    dropdown:    path.join(__dirname, '../src/scripts/docs/DropdownApp.jsx'),
    feedback:    path.join(__dirname, '../src/scripts/docs/FeedbackApp.jsx'),
    form:        path.join(__dirname, '../src/scripts/docs/FormApp.jsx'),
    icon:        path.join(__dirname, '../src/scripts/docs/IconApp.jsx'),
    label:       path.join(__dirname, '../src/scripts/docs/LabelApp.jsx'),
    loader:      path.join(__dirname, '../src/scripts/docs/LoaderApp.jsx'),
    message:     path.join(__dirname, '../src/scripts/docs/MessageApp.jsx'),
    modal:       path.join(__dirname, '../src/scripts/docs/ModalApp.jsx'),
    navigation:  path.join(__dirname, '../src/scripts/docs/NavigationApp.jsx'),
    progressbar: path.join(__dirname, '../src/scripts/docs/ProgressBarApp.jsx'),
    pill:        path.join(__dirname, '../src/scripts/docs/PillApp.jsx'),
    scrollbars:  path.join(__dirname, '../src/scripts/docs/ScrollBarApp.jsx'),
    table:       path.join(__dirname, '../src/scripts/docs/TableApp.jsx'),
    tabs:        path.join(__dirname, '../src/scripts/docs/TabsApp.jsx'),
    tooltips:    path.join(__dirname, '../src/scripts/docs/TooltipsApp.jsx'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/] },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '../', 'node_modules', 'react'),
    },
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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
      exclude:  /vendor/,
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
