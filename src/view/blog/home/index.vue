<template>
  <BlogNav />
  <div class="blog-body">
    <CanvasBanner />
  </div>
</template>

<script setup lang="ts" name="home">
  import BlogNav from '/@/view/blog/blogNav/index.vue';
  import CanvasBanner from '/@/view/blog/home/canvasBanner.vue';
</script>

<style lang="scss" scoped>
  .blog-body {
    margin-top: 65px;
  }
</style>
