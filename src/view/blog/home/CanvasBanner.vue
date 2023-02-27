<template>
  <canvas id="canvas-banner" ref="canvasBanner" style="background: #393d49"></canvas>
</template>

<script setup lang="ts" name="CanvasBanner">
  import type { Ref } from 'vue';
  import { useCanvasBanner } from '/@/hooks/blog/useCanvasBanner';

  const canvasBanner = ref<Nullable<HTMLCanvasElement>>(null);

  const { createCanvasBanner } = useCanvasBanner(canvasBanner as Ref<HTMLCanvasElement>);

  onMounted(() => {
    createCanvasBanner();
  });
</script>

<style lang="scss" scoped></style>
