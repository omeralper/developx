const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
        { 
          test: /\.tsx?$/, 
          loader: "awesome-typescript-loader" 
        },
        { 
          test: /\.js$/,
          enforce: "pre",  
          loader: "source-map-loader" 
        },
        { 
          test: /\.less$/, 
          use: ["style-loader", "css-loader", "less-loader"] 
        },
        { 
          test: /\.css$/, 
          use: ["style-loader", "css-loader"] 
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "file-loader?name=[name].[ext]"
      }
    ]
  },

  plugins: [htmlPlugin],
  devServer: {
    writeToDisk: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
      changeOrigin: true
    }
  }
};