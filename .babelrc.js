module.exports = {
  presets: [["next/babel"]],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "lib",
        style: true
      }
    ],
    "babel-plugin-styled-components"
  ],
  ignore: ["node_modules"]
};
