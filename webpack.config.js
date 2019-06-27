const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'bemui',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'raw-loader' },
      { test: /\.html$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {from:'./src/resources',to:'resources'} 
    ])
  ]
};