<template>
  <BlogModule :title="'热文排行'">
    <ul class="fa-ul blog-module-ul">
      <li>
        <i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">Web安全之跨站请求伪造CSRF</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="detail.html">ASP.NET MVC 防范跨站请求伪造（CSRF）</a>
      </li>
      <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">常用正则表达式</a></li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="detail.html">EF CodeFirst数据迁移常用指令</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">浅谈.NET Framework基元类型</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">C#基础知识回顾-扩展方法</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="detail.html">一步步制作时光轴（一）（HTML篇）</a>
      </li>
      <li>
        <i class="fa-li fa fa-hand-o-right"></i
        ><a href="detail.html">一步步制作时光轴（二）（CSS篇）</a>
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
