/* eslint-disable */

const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `json`]
  },
  devtool: `source-map`
};
