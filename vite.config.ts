import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './config/vite/plugins';
import { createProxy } from './config/vite/proxy';
import { transformEnv } from './config/utils';
// import { generateModifyVars } from './config/themeConfig';
import { configManualChunk } from './config/vite/optimizer';

// __dirname: 被执行的 js 文件的绝对路径 - 文件所在目录
// process.cwd(): 是当前执行node命令的目录 - 工作目录（当前Node.js进程执行时的工作目录）
// resolve（） 返回拼接路径

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// vite 配置
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';

  const env = loadEnv(mode, resolve(process.cwd(), 'env'), 'VITE_');

  // loadEnv返回的是一个键与值都是string类型的对象，需要手动转换
  const viteEnv = transformEnv(env);

  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_DROP_CONSOLE, VITE_PROXY, VITE_OUTPUT_DIR } = viteEnv;

  return {
    // 相当于publishPath
    base: VITE_PUBLIC_PATH,
    // 加载evn文件目录
    envDir: resolve(__dirname, 'env'),
    resolve: {
      alias: [
        // 设置路径别名
        {
          find: /^~/,
          replacement: resolve(__dirname, ''),
        },
        // @/xxxx => src/xxxx
        // {
        //   find: '@',
        //   replacement: resolve(__dirname, 'src'),
        // },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },

    // plugins
    plugins: createVitePlugins(viteEnv, isBuild),

    // css
    css: {
      preprocessorOptions: {
        // 全局scss变量配置
        scss: {
          additionalData: `
              @use "/@/styles/var/variables.scss" as *;
              @use "/@/styles/var/mixin.scss" as *;
            `,
        },
        // less: {
        //   modifyVars: generateModifyVars(),
        //   javascriptEnabled: true,
        // },
      },
    },

    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy: createProxy(VITE_PROXY),
    },

    // build
    build: {
      // 指定输出路径
      outDir: VITE_OUTPUT_DIR,
      // 生成静态资源的存放路径
      // assetsDir: 'assets',
      target: 'es2015',
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 source map 文件
      sourcemap: false,
      // 混淆器，terser构建后文件体积更小
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        // 可以配置多个，表示多入口
        input: {
          index: resolve(__dirname, 'index.html'),
          // project:resolve(__dirname,"project.html")
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks: isBuild ? configManualChunk : () => null,
        },
      },
      // 关闭reportCompressedSize显示屏可以稍微缩短包装时间
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      assetsInlineLimit: 4096,
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 2000,
    },

    // optimizeDeps
    // optimizeDeps: {
    //   include: ['ant-design-vue/es/locale/zh_CN', 'moment/dist/locale/zh-cn'],
    // },
  };
});
