const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    bundle: "./scripts/index.js",
    formBundle: "./scripts/form.js",
  },
  output: {
    filename: "[name].js", // Esto generará bundle.js y formBundle.js
    path: path.resolve(__dirname, "dist"),
  },
}
