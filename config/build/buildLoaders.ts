import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

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
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        cssLoader,
    ]
}
