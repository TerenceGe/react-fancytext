var webpack = require('webpack')
var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    './dist/react-fancytext': './src/index.js',
    './demo/react-fancytext': './src/index.js',
  },
  output: {
    path: './',
    filename: '[name].js',
    library: 'ReactFancyText',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './src')
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
          path.resolve(__dirname, './src')
        ],
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loaders: [
          'babel-loader'
        ]
      },
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
}
