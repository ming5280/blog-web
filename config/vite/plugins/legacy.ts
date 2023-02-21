/**
 * @name Legacy
 * @description 兼容浏览器
 */

import legacy from '@vitejs/plugin-legacy';
export const configLegacyPlugin = () =>
  // 兼容ie 11
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  });
