var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./js/app.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      },
      {
          test: /\.less/,
          loader: 'style!css!less',
      },
      {
          test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
          loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack',
      }
    ]
  },
  plugins: [
  ]
};
