const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('./client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
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
