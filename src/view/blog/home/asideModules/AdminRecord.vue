<template>
  <BlogModule :title="'后台记录'">
    <dl class="footprint">
      <dt>2017年03月16日</dt>
      <dd>分页新增页容量控制</dd>
      <dt>2017年03月12日</dt>
      <dd>新增管家提醒功能</dd>
      <dt>2017年03月10日</dt>
      <dd>新增Win10快捷菜单</dd>
    </dl>
  </BlogModule>
</template>

<script setup lang="ts" name="AdminRecord">
  import BlogModule from '/@/view/blog/blogModule/index.vue';
</script>

<style lang="scss" scoped>
  .footprint > dt {
    color: #01aaed;
  }

  .footprint > dd {
    text-indent: 1.3em;
    padding: 2px 0;
  }
</style>
