const path = require("path");

module.exports = async (_, options) => {
    return {
        entry: "./src/index.tsx",
        devtool: "source-map",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ]
        },
        plugins: [],
        devServer: {
            static: {
                directory: path.join(__dirname, "public"),
                publicPath: "/",
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            server: {
                type: "https",
                options: options.https,
            },
            port: process.env.npm_package_config_dev_server_port || 3000,
            historyApiFallback: true,
        },
        mode: "development",
    };
};
