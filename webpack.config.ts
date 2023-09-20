import path from "path";
import webpack from "webpack";
import "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin";

const ProgressPlugin = require('progress-webpack-plugin')

const config: webpack.Configuration = {

    // development/production:
    mode: "development",

    // Start applicaton point:
    entry: {
        main: path.resolve(__dirname, "src", "index.ts"),
    },

    // Loaders' configs:
    module: {
        rules: [
            {
                // Files to be processed by the loader:
                test: /\.tsx?$/,
                // Loader name to be used:
                use: 'ts-loader',
                // Excepted dir:
                exclude: /node_modules/,
            },
        ],
    },

    // For not to specify these extensions for imports:
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // Destination build folder and file:
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html")
            },
        ),
        new ProgressPlugin(true),
    ]
}

export default config;
