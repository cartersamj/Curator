const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve('./client/provider.jsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'build.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev server app',
      template: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: 'index.html',
    },
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css|\.scss|\.sass/gi,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
