module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => ([
                require("postcss-cssnext")()
              ]),
            },
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
    ]   
  },
  devServer: {
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    overlay: {
      errors: true,
      warnings: true
    },
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      }
    }
  }
}