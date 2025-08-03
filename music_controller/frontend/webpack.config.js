const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Explicitly set mode
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './static/frontend'),
    filename: 'main.js',
    publicPath: '/static/frontend/' // For Django compatibility
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Support both JS and JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', { runtime: 'automatic' }] // Required for React 18
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development') // Single source of truth
    })
  ],
  watch: true, // Replaces --watch flag
  devtool: 'eval-source-map' // Better debugging
};