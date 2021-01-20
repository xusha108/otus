const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }, 
  module: {    
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader:'babel-loader' ,
          loader: 'eslint-loader',
          loader: 'ts-loader'
        }]
      },   
      {
        test: /\.html$/,      
        use: 'html-loader'
          
      },
    ]
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}
