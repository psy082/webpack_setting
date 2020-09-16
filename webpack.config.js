const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, "main.js"),
  },
  module: {
    rules: [
      // {
      //   test: /\.not\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        oneOf: [
          {
            resourceQuery: /app/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            resourceQuery: /not/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: '/Users/donghokim/study/wecode/vue-setting-playground/brandi-front-setting/public/index.html'
    }
  )],
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  }, 
}

module.exports = config;