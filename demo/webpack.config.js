var webpack = require('webpack')
var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    jsx: './index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './'),
          path.resolve(__dirname, '../src')
        ],
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, './'),
          path.resolve(__dirname, '../src')
        ],
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'url-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function () {
    return {
        defaults: [precss, autoprefixer]
    };
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    contentBase: './',
    hot: true
  }
}
