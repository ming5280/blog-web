<template>
  <el-config-provider
    :size="elementConfig.size"
    :z-index="elementConfig.zIndex"
    :locale="elementConfig.locale"
  >
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/lib/locale/lang/zh-cn';
  const elementConfig = reactive({
    zIndex: 3000,
    size: 'default', // small
    locale: zhCn,
  });
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
