/**
 * @name AutoImportDeps
 * @description 打包文件压缩
 */

import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';

export function configCompressPlugin(VITE_COMPRESSION: boolean): Plugin | Plugin[] {
  if (VITE_COMPRESSION) {
    return compressPlugin({
      ext: '.gz',
      deleteOriginFile: false,
    }) as Plugin;
  }
  return [];
}
