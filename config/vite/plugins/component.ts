/**
 * @name autoRegistryComponents
 * @description 按需加载，自动引入组件
 */
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export const autoRegistryComponents = () => {
  return Components({
    // 要导入组件的目录的路径
    dirs: ['src/components'],
    // 对以下文件扩展名有效
    extensions: ['vue'],
    // 搜索子目录
    deep: true,
    // 解析自定义组件
    resolvers: [
      // ElementPlusResolver({
      //   importStyle: 'sass',
      // }),
    ],
    // 生成 `components.d.ts` 全局声明路径
    dts: 'types/components.d.ts',
    // 允许子目录作为组件的命名空间前缀
    directoryAsNamespace: false,
    // 当directoryAsNamespace:true时生效，忽略命名空间前缀的子目录路径
    globalNamespaces: [],
    // 指令自动导入， vue 3 默认true，vue 2 默认false。Babel需要为Vue 2进行转换，出于性能考虑，默认情况下会禁用它。要安装Babel，请运行：`npm install-D@Babel/parser@Babel/traverse`
    directives: true,
    // 用于变换目标的过滤器
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  });
};
