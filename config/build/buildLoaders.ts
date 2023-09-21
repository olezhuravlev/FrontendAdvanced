import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const typeScriptLoader = {
        // Files to be processed by the loader:
        test: /\.tsx?$/,
        // Loader name to be used:
        use: 'ts-loader',
        // Excepted dir:
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // ORDER OF LOADERS IS IMPORTANT!
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // mode: "local",
                        auto: (resPath: string) => Boolean(resPath.includes(".module.scss")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        cssLoader,
    ]
}
