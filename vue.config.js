const { defineConfig } = require('@vue/cli-service')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData:  // 8版本用prependData: 
  //       `
  //         @import "@/styles/variables.scss";  // scss文件地址
  //         @import "@/styles/mixin.scss";     // scss文件地址
  //       `
  //     }
  //   }
  // }
})
