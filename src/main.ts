// import 'vue-global-api';
import App from './App.vue';
import { createApp } from 'vue';
import store from './store';
import router from './router';
import setupComponents from '/@/plugins/element';
// import { setupGlobDirectives } from './directives';

import '/@/styles/index.scss';
import '/@/styles/var/element-theme.scss';

// 创建vue实例
const app = createApp(App);

// pinia
app.use(store);

// router
app.use(router);

// 路由守卫控制
// import './router/permission'

// Register ElementPlus UI components
setupComponents(app);

// 全局属性
// app.config.globalProperties.AuthEnum = AuthEnum;

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
