const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// exports configuration object so webpack can work with it
module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js',
    sourceMapFilename: './js/bundle.js.map'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // babel will apply the babel loader to all of the node modules if we don't include this
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {cwd: __dirname, presets: ['@babel/preset-env']}
      }
    ]
  }
};
