const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  plugins : [new HtmlWebpackPlugin()],
  devServer : {
    static: {
      directory: 'index.html'
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test:/\.s[ac]ss$/i,
        exclude: /node_modules/,
        use : [ 'style-loader','css-loader','sass-loader' ]
      }
    ],
  },
};
