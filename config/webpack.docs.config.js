import webpack from 'webpack';
import path    from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'source-map',
  entry: {
    //'rhinostyle-docs':    path.join(__dirname, '../src/scripts/docs/init.js'),
    avatar:               path.join(__dirname, '../src/scripts/docs/AvatarApp.jsx'),
    close:                path.join(__dirname, '../src/scripts/docs/CloseApp.jsx'),
    cover:                path.join(__dirname, '../src/scripts/docs/CoverApp.jsx'),
    bucket:               path.join(__dirname, '../src/scripts/docs/BucketApp.jsx'),
    button:               path.join(__dirname, '../src/scripts/docs/ButtonApp.jsx'),
    datepicker:           path.join(__dirname, '../src/scripts/docs/DatePickerApp.jsx'),
    dropdown:             path.join(__dirname, '../src/scripts/docs/DropdownApp.jsx'),
    feedback:             path.join(__dirname, '../src/scripts/docs/FeedbackApp.jsx'),
    form:                 path.join(__dirname, '../src/scripts/docs/FormApp.jsx'),
    icon:                 path.join(__dirname, '../src/scripts/docs/IconApp.jsx'),
    label:                path.join(__dirname, '../src/scripts/docs/LabelApp.jsx'),
    loader:               path.join(__dirname, '../src/scripts/docs/LoaderApp.jsx'),
    message:              path.join(__dirname, '../src/scripts/docs/MessageApp.jsx'),
    modal:                path.join(__dirname, '../src/scripts/docs/ModalApp.jsx'),
    navigation:           path.join(__dirname, '../src/scripts/docs/NavigationApp.jsx'),
    progressbar:          path.join(__dirname, '../src/scripts/docs/ProgressBarApp.jsx'),
    pill:                 path.join(__dirname, '../src/scripts/docs/PillApp.jsx'),
    scrollbars:           path.join(__dirname, '../src/scripts/docs/ScrollBarApp.jsx'),
    table:                path.join(__dirname, '../src/scripts/docs/TableApp.jsx'),
    tabs:                 path.join(__dirname, '../src/scripts/docs/TabsApp.jsx'),
    tooltips:             path.join(__dirname, '../src/scripts/docs/TooltipsApp.jsx'),
    'utility-components': path.join(__dirname, '../src/scripts/docs/UtilityComponentsApp.jsx'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../src/scripts'),
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
      name: 'vendor.bundle',
      minChuncks: 3,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
