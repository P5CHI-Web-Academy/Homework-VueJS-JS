const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  plugins: [new webpack.HashedModuleIdsPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
})
