const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const developmentConfig = require("./config/webpack.development");
const productionConfig = require("./config/webpack.production");

const PATHS = {
  app: path.join(__dirname, "src/web", "index.tsx"),
  build: path.join(__dirname, "dist/assets")
};

const baseConfig = {
  entry: {
    app: PATHS.app
  },
  output: {
    publicPath: "/",
    path: PATHS.build,
    filename: "[name].[chunkhash:5].js",
    chunkFilename: '[name].[chunkhash:5].bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "antd",
                    libraryDirectory: "lib",
                    style: "css"
                  })
                ]
              })
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      title: "yd-crm",
      template: path.join(__dirname, "template/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};

module.exports = mode => {
  const config = mode === "production" ? productionConfig : developmentConfig;

  return merge(baseConfig, config, { mode });
};
