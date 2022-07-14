const path = require("path")
// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { options } = require("nodemon/lib/config")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

// webpack中的所有的配置信息都应该写在module . exports中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",

    output: {
        // 指定打包文件所在的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: "boundle.js",
        // 高速webpack不是用箭头函数
        environment: {
            arrowFunction:false
        }
    },
    mode: 'development', // 设置mode

    // 指定webpack打包是要使用的模块
    module: {
        // 指定加载规则
        rules: [
            {
                // test指定的是规则生效的文件(以.ts结尾的文件)
                test: /\.ts$/,
                // 要使用的loader(use从后向前执行,先执行ts-loader)
                use: [
                    // 配置babel-loader
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets: [
                                 [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            // "chrome": "88",
                                            "ie":"11"
                                        },
                                        "corejs": "3",
                                        // s使用corejs方式“usage”表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 编译要排除的文件,
                exclude:/node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        // 自动生成相关文件并配置相关资源
        new HTMLWebpackPlugin({
           template:"./src/index.html"
        })
    ],

    // 配置置引用模块
    resolve: {
        // 声明.ts,.js结尾的文件为模块
        extensions:['.ts','.js']
    }
}