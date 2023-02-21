/**
 * Generate proxy
 */
import { ProxyOptions } from 'vite';

type ProxyItem = [string, string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions>;

const httpsRE = /^https:\/\//;

export function createProxy(list: ProxyList = []) {
  const ret: ProxyTargetList = {};
  for (const [prefix, toPrefix, target] of list) {
    const isHttps = httpsRE.test(target);

    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), toPrefix),
      // https设置为 false
      ...(isHttps ? { secure: false } : {}),
    };
  }
  console.log(ret);
  return ret;
}
