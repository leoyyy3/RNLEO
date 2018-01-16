var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js",
    chunkFilename: '[name]-[id].[chunkhash:8].bundle.js',
    publicPath: '/build/'
  },

  resolve:{
      extensions:['*', '.js','.jsx']
  },

  module: {
    rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: {
                  presets: ['es2015', 'stage-0', 'react'],
                  plugins: 
                  ['transform-runtime', ['import', {
                      libraryName: 'antd',
                      "libraryDirectory": "es", 
                      style: 'css'
                    }]
                  ]
                }, 
            },
            { test: /\.less$/, exclude: /node_modules/,
                use: 
                ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                    {loader:'css-loader'},
                    {loader:'postcss-loader'},
                    {loader:'less-loader'}
                ],
                  publicPath: "/build"
                })
            },
            { test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                    // {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'postcss-loader'}
                ],
                  publicPath: "/build"
                }),
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
              use:[
                  {
                    loader:'url-loader?limit=5000&name=build/[hash:8].[name].[ext]',
                    options: {
                      publicPath:'/'
                    }
                  },
              ]
            },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, use:'url-loader?limit=5000'} // 限制大小小于5k
        ]
  },
  // postcss: [autoprefixer()],

  devtool : "cheap-module-source-map",
  plugins: [
    // webpack 内置的 banner-plugin
    // new webpack.BannerPlugin("test"),
    new CleanWebpackPlugin(['build']),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    }),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/src/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    
    
    
    // 分离CSS和JS文件
    new ExtractTextPlugin({
      filename: "css.[chunkhash:8].optimize.css",
      // disable: false,
      allChunks: true
    }), 

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor','manifest'],
      filename: '[name].[chunkhash:8].js'
    }),


    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: function () {
          return [autoprefixer];
        }
      }
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}