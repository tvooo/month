const path = require('path');

module.exports = {
  entry: './docs/index.js',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },

  module: {
    // loaders: [
    //   { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    //   { test: /\.json$/, loader: 'json' },
    //   { test: /\.md/, loader: 'html!highlight!markdown' }
    // ],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }, {
        test: /\.md/,
        use: [
          { loader: 'html-loader', },
          { loader: 'markdown-loader', },
        ],
      },
    ]
  },

  devServer: {
    contentBase: 'docs'
  }
};
