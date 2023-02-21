import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configLegacyPlugin } from './legacy';
// import { configStyleImportPlugin } from './styleImport';
import { configSvgIconsPlugin } from './svgIcons';
import { autoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { configMockPlugin } from './mock';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_ANALYSIS, VITE_COMPRESSION, VITE_LEGACY } = viteEnv;
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 在开发和构建时进行代码规范校验，禁用 eslint 缓存
    eslintPlugin({ cache: false }),
    // 在script标签中写component name
    VueSetupExtend(),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
  ];

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(configLegacyPlugin());

  // rollup-plugin-gzip
  isBuild && vitePlugins.push(configCompressPlugin(VITE_COMPRESSION));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig(VITE_ANALYSIS));

  // vite-plugin-style-import
  // vitePlugins.push(configStyleImportPlugin(isBuild));

  return vitePlugins;
}
