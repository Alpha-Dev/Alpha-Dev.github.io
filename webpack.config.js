var webpack = require("webpack");
module.exports = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts','.tsx', '.js'],
    alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    }
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          mangle:true
      })
    ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'sass'
        ]
      },
      { test: /\.ts$|\.tsx$/, loader: 'ts-loader' },
      {
        test: /\.jsx?$|\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
