<template>
  <div class="blog-module shadow">
    <div class="blog-module-title">{{ props.title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="BlogModule">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .blog-module {
    margin-bottom: 10px;
    padding: 15px;
    background: #fff;
    height: 100%;
  }

  .blog-module > .blog-module-title {
    border-bottom: 1px solid #009688;
    font-size: 15px;
    font-weight: 500;
    padding: 0 0 5px 0;
    margin-bottom: 5px;
  }
</style>
