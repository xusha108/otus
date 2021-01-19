const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }, 
  module: {    
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:"babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,      
        use: [
          {
            loader:"html-loader"
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
}
