const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.common.js')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  plugins: [new StyleLintPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
})
