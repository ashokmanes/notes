const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  
  devServer: {
    static: {
        directory: path.join(__dirname, 'docs'),
    },
    watchFiles: ['src/**/*'],
    open: true,
    port: 8080
  }
};
