<template>
  <h2>Vue3-Element-Ts</h2>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts">
export default {
  name: 'UsePinia',
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { useUserStore } from '/@/store/modules/user';

const userStore = useUserStore();
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 24px;
}
div {
  text-align: center;
  font-size: 20px;
}
</style>
