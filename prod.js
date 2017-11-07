// const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlMinifierPlugin = require("html-minifier-webpack-plugin");
// const ClosureCompiler = require("google-closure-compiler-js").webpack;
const OfflinePlugin = require("offline-plugin");
// const OptimizeJsPlugin = require("optimize-js-plugin");
// const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const PurifyCSSPlugin = require("purifycss-webpack");
// const glob = require("glob-all");
//
module.exports = function e(env) {
  return {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    stats: {
      // warnings: false
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /indexB.html$/,
          loaders: [
            "file-loader?name=index.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /embedEnB.html$/,
          loaders: [
            "file-loader?name=embedEn.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /embedSvB.html$/,
          loaders: [
            "file-loader?name=embedSv.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /mapsB.html$/,
          loaders: [
            "file-loader?name=maps.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /newsB.html$/,
          loaders: [
            "file-loader?name=news.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /poiB.html$/,
          loaders: [
            "file-loader?name=poi.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /mapsBSv.html$/,
          loaders: [
            "file-loader?name=mapsSv.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /newsBSv.html$/,
          loaders: [
            "file-loader?name=newsSv.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /poiBSv.html$/,
          loaders: [
            "file-loader?name=poiSv.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=[path][name].[ext]",
            {
              loader: "image-webpack-loader",
              options: {
                gifsicle: {
                  interlaced: false
                },
                // optipng: {
                //   optimizationLevel: 7
                // },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                // webp: {
                //   quality: 75
                // }
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "url-loader?limit=1000000"
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                presets: [["env", { modules: false }]]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // new ImageminPlugin({
      //   pngquant: {
      //     quality: "95-100"
      //   }
      // }),
      // ... other plugins
      new HtmlMinifierPlugin({}),
      // new OptimizeJsPlugin({
      //   sourceMap: true
      // }),
      // new ClosureCompiler({
      //   compiler: {
      //     language_in: "ECMASCRIPT6",
      //     language_out: "ECMASCRIPT5",
      //     compilation_level: "ADVANCED",
      //     warning_level: "QUIET",
      //     externs: [
      //       {
      //         src: `
      //                 var jQuery = {};

      //                 var $ = {}

      //                 var Materialize;
      //                 Materialize.toast();
      //          `
      //       }
      //     ]
      //   },
      //   makeSourceMaps: true,
      //   concurrency: 4
      // }),
      // new ExtractTextPlugin("[name].css"),
      // new PurifyCSSPlugin({
      //   minimize: true,
      //   verbose: false,
      //   // Give paths to parse for rules. These should be absolute!
      //   paths: glob.sync([
      //     path.join(__dirname, "*.html"),
      //     path.join(__dirname, "js/*.js")
      //   ])
      // }),
      new OfflinePlugin({
        externals: [
          "./js/init.min.js",
          "./js/init2.min.js",
          "./js/materialize.min.js",
          "./js/jquery-3.2.1.min.js"
        ],
        caches: "all",
        responseStrategy: "network-first",
        // responseStrategy: "cache-first",
        updateStrategy: "all",
        minify: "true",
        autoUpdate: 1000 * 60 * 60 * 2,
        ServiceWorker: {
          events: "true"
        },
        AppCache: {
          events: "true"
        }
      })
    ]
  };
};
