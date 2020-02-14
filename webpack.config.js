const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    },
    extensions: ['.js', '.vue']
  },
};

if (process.env.NODE_ENV === 'production') {
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
  module.exports.plugins = (module.exports.plugins || []).concat([
    new UglifyJsPlugin()
  ])
}