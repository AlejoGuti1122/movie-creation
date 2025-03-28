const path = require("path")

module.exports = {
  mode: "development", // Añadimos el modo
  entry: "./scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
