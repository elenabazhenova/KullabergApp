const ImageminPlugin = require('imagemin-webpack-plugin')
  .default;
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const OfflinePlugin = require('offline-plugin');

module.exports = function e(env) {
  return {
    entry: './entry.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /indexB.html$/,
        loaders: ['file-loader?name=index.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /embedEnB.html$/,
        loaders: ['file-loader?name=embedEn.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /embedSvB.html$/,
        loaders: ['file-loader?name=embedSv.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /mapsB.html$/,
        loaders: ['file-loader?name=maps.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /newsB.html$/,
        loaders: ['file-loader?name=news.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /poiB.html$/,
        loaders: ['file-loader?name=poi.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /mapsBSv.html$/,
        loaders: ['file-loader?name=mapsSv.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /newsBSv.html$/,
        loaders: ['file-loader?name=newsSv.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /poiBSv.html$/,
        loaders: ['file-loader?name=poiSv.[ext]', 'extract-loader', 'html-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|gif|jpg)$/,
        use: ['file-loader?name=[path][name].[ext]'],
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader?name=[path][name].[ext]',
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
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '95-100',
        },
      }),
      // ... other plugins
      new HtmlMinifierPlugin({}),
      new ClosureCompilerPlugin({
        compiler: {
          language_in: 'ECMASCRIPT6',
          language_out: 'ECMASCRIPT5',
          compilation_level: 'ADVANCED',
        },
        concurrency: 3,
      }),
      new OfflinePlugin({
        externals: ['https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/css/materialize.min.css', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/css/master.min.css', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/css/materialdesignicons.min.css', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Medium.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Regular.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Light.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Thin.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Bold.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Medium.woff2', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Regular.woff2', './fonts/roboto/Roboto-Light.woff2', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Thin.woff2', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/roboto/Roboto-Bold.woff2', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/materialdesignicons-webfont.woff', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/fonts/materialdesignicons-webfont.woff2', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/android-chrome-192x192.png', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/android-chrome-512x512.png', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/favicon-32x32.png', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/favicon-16x16.png', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/js/master.min.js', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/js/init.min.js', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/js/init2.min.js', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/js/materialize.min.js', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/js/jquery-3.2.1.min.js', 'https://cdn.rawgit.com/xtreemze/KullabergApp/gh-pages/manifest.json'],
        caches: 'all',
        responseStrategy: 'cache-first',
        updateStrategy: 'changed'
      }),
    ],
  };
};
