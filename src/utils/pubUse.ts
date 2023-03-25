// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/images/blog/cover/${url}`, import.meta.url).href;
};
