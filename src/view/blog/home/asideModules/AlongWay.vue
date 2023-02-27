<template>
  <BlogModule :title="'一路走来'">
    <dl class="footprint">
      <dt>2017年03月12日</dt>
      <dd>新增留言回复功能！人人都可参与回复！</dd>
      <dt>2017年03月10日</dt>
      <dd>个人博客2.0基本功能完成，正式上线！</dd>
      <dt>2017年03月09日</dt>
      <dd>新增文章搜索功能！</dd>
      <dt>2017年02月25日</dt>
      <dd>QQ互联接入网站，可QQ登陆发表评论与留言！</dd>
    </dl>
  </BlogModule>
</template>

<script setup lang="ts" name="AlongWay">
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
