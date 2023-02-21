/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入api
 */
import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export const AutoImportDeps = () =>
  AutoImport({
    dts: 'types/auto-imports.d.ts', // 生成 `auto-imports.d.ts` 全局声明路径
    imports: ['vue', 'vue-router'],
    // resolvers: [ElementPlusResolver()],
  });
