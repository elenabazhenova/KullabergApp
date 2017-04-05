module.exports = function d(env) {
  return {
    entry: './entry.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /indexB.html$/,
        loaders: ['file-loader?name=index.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /newsB.html$/,
        loaders: ['file-loader?name=news.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /poiB.html$/,
        loaders: ['file-loader?name=poi.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      },{
        test: /indexBsv.html$/,
        loaders: ['file-loader?name=indexsv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /newsBsv.html$/,
        loaders: ['file-loader?name=newssv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /poiBsv.html$/,
        loaders: ['file-loader?name=poisv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|gif|jpg)$/,
        use: ['file-loader?name=[path][name].[ext]?[hash]!'],
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]!',
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader?name=[path][name].[ext]?[hash]!',
        }],
      }],
    },
  };
};
