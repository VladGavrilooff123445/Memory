const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 entry: {
  app:'./src/main.js'
 },
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, './dist'),
  publicPath: '/dist'
 },
 module: {
  rules: [{
   //     test: /\.js$/,
   //     // exclude: [/node_modules/],
   //         // loader: 'babel-loader',
   //     use: [{
   //         options: { presets: ['es2015'] }
   //     }]
   // },{
   test: /\.scss$/,
   use: [
    'style-loader',
    MiniCssExtractPlugin.loader,
    {
     loader: 'css-loader',
     options: {sourceMap: true}
    },{
     loader: 'sass-loader',
     options: { sourceMap: true}
    }
   ]
  },{
   test: /\.css$/,
   use: [
    MiniCssExtractPlugin.loader,
    'css-loader'
   ]
  }]
 },
 plugins:[
  new MiniCssExtractPlugin({
   filename: '[name].css',
   // chunkFilename: '[id].css'
  })
 ],
 devServer: {
  overlay: true
 }
}
