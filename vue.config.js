const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const postcssPxToRem = require('postcss-pxtorem');

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            postcssPxToRem({
              rootValue: 37.5,
              selectorBlackList: [],
              propList: ['*'],
              exclude: /pcLayout/i,
            }),
          ],
        },
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@images': path.resolve(__dirname, './src/assets/images'),
        '@styles': path.resolve(__dirname, './src/assets/styles'),
        '@components': path.resolve(__dirname, './src/components'),
        '@router': path.resolve(__dirname, './src/router'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@http': path.resolve(__dirname, './src/http'),
        '@store': path.resolve(__dirname, './src/store'),
        '@tools': path.resolve(__dirname, './src/tools'),
        '@views': path.resolve(__dirname, './src/views'),
      },
    },
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-aitools-dev.yz5.cn/',
        changeOrigin: true,
      },
    },
  },
});
