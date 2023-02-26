<template>
  <canvas id="canvas-banner" ref="canvasBanner" style="background: #393d49"></canvas>
</template>

<script setup lang="ts" name="CanvasBanner">
  import type { Ref } from 'vue';
  import { useCanvasBanner } from '/@/hooks/blog/useCanvasBanner';

  const canvasBanner = ref<Nullable<HTMLCanvasElement>>(null);
  // const canvasBanner = ref<HTMLCanvasElement | null>(null);

  const { bannerInit } = useCanvasBanner(canvasBanner as Ref<HTMLCanvasElement>);

  onMounted(() => {
    bannerInit();

    const canvasEl = unref(canvasBanner) as HTMLCanvasElement;
    canvasEl.width = window.document.body.clientWidth - 10; //减去滚动条的宽度
    if (screen.width >= 992) {
      canvasEl.height = (window.innerHeight * 1) / 3;
    } else {
      canvasEl.height = (window.innerHeight * 2) / 7;
    }
  });
</script>

<style lang="scss" scoped></style>
