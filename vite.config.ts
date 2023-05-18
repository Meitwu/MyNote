import { defineConfig } from 'vite'
import viteEslint from 'vite-plugin-eslint'
// import react from '@vitejs/plugin-react'
// import vitePluginImp from 'vite-plugin-imp'
//这里使用nodejs的模块，需要安装node的类型声明文件，可能会报错
//vite默认不支持 require
// const path = require('path')
import path from 'path'
export default defineConfig({
  plugins: [
    // react(),
    //按需加载
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'antd-mobile',
    //       style(name: any) {
    //         return `antd-mobile/lib/${name}/style/index.css`
    //       }
    //     },
    //     {
    //       libName: 'antd',
    //       style: (name: string) => `antd/lib/${name}/style/index.less`
    //     }
    //   ]
    // }),
    //不会因为eslint问题导致开发暂停
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    hmr: true,
    //将vite的主机地址更改为0.0.0.0 ，以便将本地服务器公开到局域网中的其他设备（）
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://cucplus.sudytech.cn/',
        changeOrigin: true,
        cookieDomainRewrite: {
          _sop_session_:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJpYXQiOjE2ODEzNjUwODcsInVpZCI6IjAxMjAxNjAwMSIsImhpZCI6MCwiYWxpYXMiOiIiLCJjbiI6IiIsInRpY2tldCI6ImRlYjQ4ZmRjNmJhZGM1MjIyNTBjMDA3NjQ0MDRiYjQ2IiwiZXh0cmEiOiIiLCJleHAiOjE2ODEzNzU4ODcsImdyb3VwTmFtZXMiOiIifQ.1jPV_AmvHEYPl-GopOe7p5inGeFMGgZYa3E_Dqki_Fg',
          sudyLoginToken:
            'BKoSCcCIAgAA5yMAAJhISG%2BHAQAAAC6TAgAAAAAAAAnog6HkuIfkuYkJMDEyMDE2MDAxJGYyODcyZmU2LWQ0MzItNGIyNC1iZGMwLWY4YTAzMmJiMGRjZg%3D%3D_vc4Ju1fZhfKpzf6uHdz%2FGw%3D%3D',
          sduuid: '5650d85a9063cca851ac27aa60ffe26c'
        },
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  //多入口配置
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'mobile.html')
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/name-[hash].[ext]'
      }
    }
  }
})
