//Entry point default value is ./src/index.js
// Output emits bundle by default to ./dist/main.js

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:'./public/index.html',
      }),
    ],
  };

