const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    proxy:{
    //拦截一个请求
    "/api" : {
      target: "http://localhost:8082",
      pathRewrite: {
        //将/api去除
        "^/api" : "",
      }
    }
  }
  }

});

