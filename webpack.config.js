const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileSystem = require("fs");
const crypto = require('crypto');
const BABEL_ENV="client";
module.exports = {
    entry: {
        client: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "[name]_" + '[chunkhash]' + ".js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }


            },
            {
                test: /\.css$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, {loader: 'css-loader',
                    options: {
                        localIdentName: '[hash:8]',
                        modules: true
                    }}]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        function() {
            this.plugin("done", function(statsData) {
                var stats = statsData.toJson();
                console.log(JSON.stringify(stats.assetsByChunkName.client));
                if (!stats.errors.length) {
                    const htmlFileName = "template.js";
                    let html = FileSystem.readFileSync(path.join(__dirname, "src" ,htmlFileName), "utf8");
                    const js = stats.assetsByChunkName.client.filter(value=>{
                        return value.indexOf("js") !== -1;
                    });
                    const css = stats.assetsByChunkName.client.filter(value=>{
                        return value.indexOf("css") !== -1;
                    });
                    let htmlOutput = html.replace(
                        /<script\s+src=(["'])(.+?)bundle\.js\1/i,
                        "<script src=$1$2" + js + "$1");

                    htmlOutput = htmlOutput.replace(
                        /<link rel="stylesheet"\s+href=(["'])(.+?)styles\.css\1/i,
                        "<link rel=\"stylesheet\" href=$1$2" + css + "$1");
                    //let outputFileName = "template_" +crypto.createHash('md5').update(htmlOutput).digest('hex').slice(-5) + ".js";
                    FileSystem.writeFileSync(
                        path.join(__dirname, "src", "prod_" + htmlFileName),
                        htmlOutput);
                }
            });
        }
    ]
};