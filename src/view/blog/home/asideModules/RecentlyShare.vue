<template>
  <BlogModule :title="'最近分享'">
    <ul class="fa-ul blog-module-ul">
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="http://pan.baidu.com/s/1c1BJ6Qc" target="_blank">Canvas</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="http://pan.baidu.com/s/1kVK8UhT" target="_blank">pagesize.js</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="https://pan.baidu.com/s/1mit2aiW" target="_blank">时光轴</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="https://pan.baidu.com/s/1nuAKF81" target="_blank">图片轮播</a>
      </li>
    </ul>
  </BlogModule>
</template>

<script setup lang="ts" name="ArticleRank">
  import BlogModule from '/@/view/blog/blogModule/index.vue';
</script>

<style lang="scss" scoped>
  .blog-module-ul li,
  .blog-module-ul .fa {
    margin: 3px 0;
  }

  .blog-module-ul li .fa {
    color: #009688;
  }
</style>
