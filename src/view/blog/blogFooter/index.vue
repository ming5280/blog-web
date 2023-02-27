<template>
  <footer class="blog-footer">
    <p>
      <span>Copyright</span><span>&copy;</span><span>2017</span
      ><a href="http://www.lyblogs.cn">个人博客</a><span>Design By LY</span>
    </p>
    <p><a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备16029915号-1</a></p>
  </footer>
</template>
<script setup lang="ts" name="BlogFooter"></script>

<style lang="scss" scoped>
  .blog-footer {
    text-align: center;
    border-top: 1px solid #009688;
    margin-top: 15px;
    background: #2f4056;
    padding: 5px 0;
    color: #d3d2d2;
  }

  .blog-footer a {
    color: #d2d2d2;
  }

  .blog-footer a:hover {
    color: #fbfbfb;
  }

  .blog-footer > p {
    margin: 2px 0;
  }

  .blog-footer > p a,
  .blog-footer > p span {
    padding-left: 7px;
  }
</style>
