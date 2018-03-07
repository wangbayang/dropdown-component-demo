const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module:{
    rules: [
      {
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				use: ['pug-loader'],
				exclude: /node_modules/
      },
      {
				test: /\.css$/,
				use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
				exclude: /node_modules/
			},
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.ProvidePlugin({
      Vue: 'vue'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    port: 4000
  },
  devtool: 'inline-source-map'
}