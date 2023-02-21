import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './demo/user';

// 自动注册
// const modules = import.meta.globEager('./**/*.ts');

// const mockModules: any[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

export function setupProdMockServer() {
  createProdMockServer([...userMock]);
}
