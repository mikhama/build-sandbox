module.exports = {
  mode: 'development',

  module: {
    rules: [

      // Loading javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },

      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },

      // Loading fonts
      {
        test: /\.(ttf|oft|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },

      // Loading CSS
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      // Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
