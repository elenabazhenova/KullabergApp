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
        test: /embedEnB.html$/,
        loaders: ['file-loader?name=embedEn.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /embedSvB.html$/,
        loaders: ['file-loader?name=embedSv.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /mapsB.html$/,
        loaders: ['file-loader?name=maps.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /newsB.html$/,
        loaders: ['file-loader?name=news.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /poiB.html$/,
        loaders: ['file-loader?name=poi.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /mapsBSv.html$/,
        loaders: ['file-loader?name=mapsSv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /newsBSv.html$/,
        loaders: ['file-loader?name=newsSv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
      }, {
        test: /poiBSv.html$/,
        loaders: ['file-loader?name=poiSv.[ext]?[hash]!', 'extract-loader', 'html-loader'],
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
      }, {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }],
    },
  };
};
