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
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: true,
        minify: true
      }
    ]
  ],
  ignore: ["node_modules"]
};
