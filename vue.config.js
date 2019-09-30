module.exports = {
  //axios域代理，解决axios跨域问题
  baseUrl: "/",
  devServer: {
    proxy: {
      "": {
        target: "https://api.apiopen.top",
        changeOrigin: true,
        ws: true,
        pathRewrite: {}
      }
    }
  }
};
