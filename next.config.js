const fs = require("fs");
const path = require("path");

const lessToJS = require("less-vars-to-js");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const withCss = require("@zeit/next-css");
const withAntd = require("./configs/next-antd.config");

const antdVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/variables.less"), "utf8")
);

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withCss(
  withAntd({
    cssModules: true,
    cssLoaderOptions: {
      sourceMap: false,
      importLoaders: 1
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: antdVariables
    },
    webpack: config => {
      config.plugins.push(
        new FilterWarningsPlugin({
          // ignore ANTD chunk styles [mini-css-extract-plugin] warning
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
        })
      );
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false
                }
              }
            }
          },
          "url-loader"
        ]
      });
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]"
          }
        }
      });
      return config;
    }
  })
);
