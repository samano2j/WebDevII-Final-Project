const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv()
  ]
};
