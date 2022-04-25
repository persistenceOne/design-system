// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
//
// module.exports = function override(config, env) {
//     config.plugins.push(new NodePolyfillPlugin({
//         excludeAliases: [
//             "assert",
//             "console",
//             "constants",
//             "crypto",
//             "coingecko-api",
//             "path-browserify",
//             "libsodium",
//             "domain",
//             "events",
//             "http",
//             "https",
//             "os",
//             "path",
//             "punycode",
//             "querystring",
//             "_stream_duplex",
//             "_stream_passthrough",
//             "_stream_transform",
//             "_stream_writable",
//             "string_decoder",
//             "sys",
//             "timers",
//             "tty",
//             "url",
//             "util",
//             "vm",
//             "zlib"
//         ]
//     }));
//     return config;
// };
const webpack = require('webpack');

module.exports = function override (config, env) {
    config.resolve.fallback = {
        "assert":false,
        "fs": false,
        "tls": false,
        "net": false,
        "buffer": false,
        "crypto":false,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        // "crypto": require.resolve("crypto-browserify"),
        // "crypto": require.resolve("crypto-browserify"),
        // "os": require.resolve("os-browserify/browser")
    };
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ];

    return config
};