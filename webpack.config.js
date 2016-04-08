module.exports = {
  entry: './src/main.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015']
          }
      }
    ]
  }
};
