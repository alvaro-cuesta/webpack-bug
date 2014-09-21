var webpack = require('webpack');

module.exports = {
  entry: { bug: './bug.js' },
  output: { filename: "[name].js" },
  module: { loaders: [ { test: /\.css$/, loader: 'style!css' } ] },
  resolve: { extensions: ['', '.css', '.js'] },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
}
