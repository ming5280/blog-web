/**
 * @name Visualizer
 * @description 包文件分析
 */

import visualizer from 'rollup-plugin-visualizer';

export function configVisualizerConfig(VITE_ANALYSIS: boolean) {
  if (VITE_ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as Plugin;
  }
  return [];
}
