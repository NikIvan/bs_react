var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'main.js'),
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: __dirname,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
}