<template>
  <canvas id="canvas-banner" ref="canvasBanner" style="background: #393d49"></canvas>
</template>

<script setup lang="ts" name="CanvasBanner">
  onMounted(() => {
    const canvasRef = ref<Nullable<HTMLCanvasElement>>(null);
    const canvasEl = unref(canvasRef);
    (canvasEl as HTMLCanvasElement).width = window.document.body.clientWidth - 10; //减去滚动条的宽度
    if (screen.width >= 992) {
      (canvasEl as HTMLCanvasElement).height = (window.innerHeight * 1) / 3;
    } else {
      (canvasEl as HTMLCanvasElement).height = (window.innerHeight * 2) / 7;
    }
  });
</script>

<style lang="scss" scoped></style>
