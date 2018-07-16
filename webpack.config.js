module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
