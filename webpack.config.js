const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  },
  output: {
    assetModuleFilename: 'img/[name][ext][query]',
    clean: {
      keep: 'index.html'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
    ],
  },
  devtool: devMode ? 'source-map' : 'eval',
  watchOptions: {
    ignored: /node_modules/
  }
};
