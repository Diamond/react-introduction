module.exports = {
  entry: {
    app: './app/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/build',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
          ],
        },
      },
    ],
  },
};
