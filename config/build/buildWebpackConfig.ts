import { type BuildOptions } from './types/config'
import type webpack from 'webpack'

import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDev.server'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },

        // Loaders' configs.
        module: {
            rules: buildLoaders(options)
        },
        // For not to specify specified extensions for imports.
        resolve: buildResolvers(options),
        // Plugins' configs.
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
