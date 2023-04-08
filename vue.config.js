const {
  defineConfig
} = require('@vue/cli-service')

const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  //设置路径别名
  chainWebpack: (config) => {
    config.resolve.alias.set('assets', resolve('src/assets')).set('components', resolve('src/components')).set('network', resolve('src/network')).set('views', resolve('src/views'))
  }
})