var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: __dirname + '/src/sass',
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
        include: __dirname + '/src/images'
      }
    ]
  },
  plugins: [ HTMLWebpackPluginConfig ]
};