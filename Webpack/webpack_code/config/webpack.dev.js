const path = require("path")//nodejs核心模块主要用于处理路径问题
//引入eslint插件
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
// 引入HtmlWebpack插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 引入图片压缩插件
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const os = require("os");
// cpu核数
const threads = os.cpus().length;

module.exports = {
    //入口
    entry: "./src/main.js",//相对路径
    //输出
    output: {
        //文件的输出路径
        path: undefined, // 开发模式没有输出，不需要指定输出目录
        //入口文件打包输出的文件名
        filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
        chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
        assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等通过type:asset处理的资源命名方式（注意用hash）
        //自动清空上次打包的结果
        // 原理:在打包前,将path整个目录内容清空,再进行打包
        clean:true
    },
        // 加载器
    module: {
        rules: [
            {
                oneOf: [
                    //loader的配置
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,//将js中css通过创建style标签添加html文件中生效
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],//将css资源编译成commonjs的模块到js中
            },
            {
                test: /\.less$/,
                // loader:'xxx' ,//-只能使用1个loader
                use: ["style-loader",
                    "css-loader",
                    "less-loader"//将 Less 文件编译成 Css 文件
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader",
                    "css-loader",
                    "sass-loader"//将 Sass 文件编译成 css 文件
                ],
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",//asset将资源转换成base64
                parser: {
                dataUrlCondition: {
                    //转换成base64，优点：减少请求数量  缺点：体积会变大一线
                    maxSize: 30 * 1024 // 小于30kb的图片会被base64处理
                    }
                },
                generator: {
                // 将图片文件输出到 static/imgs 目录中
                // 将图片文件命名 [hash:8][ext][query]
                // [hash:8]: hash值取前8位
                // [ext]: 使用之前的文件扩展名
                // [query]: 添加之前的query参数
                // filename: "static/imgs/[hash:8][ext][query]",
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",//资源不用转换，原样输出
                generator: {
                // filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"), // 也可以用包含
            use: [
              {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true, // 开启babel编译缓存
                    cacheCompression: false, // 缓存文件不要压缩
                    plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },

            ]
            }
        ],
    },
    // 插件
    plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
        context: path.resolve(__dirname, "../src"),
        exclude: "node_modules",
        cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
        ),
       threads, // 开启多进程
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
        // 提取css成单独文件
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].chunk.css",
    }),
    ],

     optimization: {
        minimize: true,
        minimizer: [
          // css压缩也可以写到optimization.minimizer里面，效果一样的
          new CssMinimizerPlugin(),
          // 压缩图片
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                  [
                    "svgo",
                    {
                      plugins: [
                        "preset-default",
                        "prefixIds",
                        {
                          name: "sortAttrs",
                          params: {
                            xmlnsOrder: "alphabetical",
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
          ],
        // splitChunks: {
        //  chunks: "all", // 对所有模块都进行分割
        // },
  },
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
    },
    // 模式
    mode: "development",
    devtool: "cheap-module-source-map",
}