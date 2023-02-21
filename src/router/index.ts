import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('/@/view/login/Login.vue'),
  },
  {
    path: '/',
    name: 'IndexPage',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/index.vue'),
  },
  {
    path: '/vueUse',
    name: 'VueUse',
    meta: {
      title: 'vueUse demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/vueUse.vue'),
  },
  {
    path: '/request',
    name: 'RequestPage',
    meta: {
      title: 'request demo',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/request.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    meta: {
      title: '表单',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/form.vue'),
  },
  {
    path: '/404',
    name: 'NotFund',
    meta: {
      title: '404-找不到页面',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('/@/view/404.vue'),
  },

  // Blog Page

  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('../view/blog/home/index.vue'),
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});
export default router;
