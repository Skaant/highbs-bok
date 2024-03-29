const { resolve } = require("path")

module.exports = {
  devtool: "eval-source-map",
  entry: resolve(__dirname, "src", "scripts", "script.js"),
  output: {
    path: resolve(__dirname, "public"),
    filename: "script.js",
  },
  resolve: {
    extensions: [".js", ".json"],
  },
}
