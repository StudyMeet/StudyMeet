const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    target: 'web',
    devtool: 'source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      plugins: [new TsconfigPathsPlugin({})],
      alias: {
        features: path.resolve(__dirname, 'src/features/')
      }
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  },
];
