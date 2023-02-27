<template>
  <BlogModule :title="'友情链接'">
    <ul class="blogroll">
      <li><a target="_blank" href="http://www.layui.com/" title="Layui">Layui</a></li>
      <li><a target="_blank" href="http://www.pagemark.cn/" title="页签">页签</a></li>
    </ul>
  </BlogModule>
</template>

<script setup lang="ts" name="FriendlyLink">
  import BlogModule from '/@/view/blog/blogModule/index.vue';
</script>

<style lang="scss" scoped>
  .blogroll > li {
    display: inline-block;
    vertical-align: middle;
    padding: 2px 5px;
  }
</style>
