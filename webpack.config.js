const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.tsx'),
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        resolve: {
          alias: {
            '@app': path.resolve(__dirname, 'src'),
            '@locale': path.resolve(__dirname, 'src/locale/strings.ts'),
            '@ui': path.resolve(__dirname, 'src/ui'),
          },
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        loader: 'svg-url-loader',
        test: /\.svg/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } },
        ],
      },
    ],
  },
  output: {
    path: `${__dirname}/dist/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
