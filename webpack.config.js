const path = require("path");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.join(__dirname, "views")
};

const javascript = {
  test: /\.(js)$/,
  use: [
    {
      loader: "babel-loader",
      options: { presets: ["@babel/env"] }
    }
  ]
};

const styles = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader"
  ]
};

const config = {
  mode: "development",
  entry: {
    App: "./public/javascript/main.js"
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: [javascript, styles]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ],
  optimization: {
    minimize: true
  }
};
// webpack is cranky about some packages using a soon to be deprecated API. shhhhhhh
// process.noDeprecation = true;

module.exports = config;
