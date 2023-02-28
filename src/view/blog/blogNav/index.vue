<template>
  <nav class="blog-nav">
    <div class="blog-container">
      <!-- QQ互联登陆 -->
      <a href="javascript:;" class="blog-user">
        <i class="fa fa-qq"></i>
      </a>

      <!-- 个人图像 -->
      <a href="javascript:;" class="blog-user hide">
        <img :src="Absolutely" alt="Absolutely" title="Absolutely" />
      </a>

      <!-- 个人博客 -->
      <a class="blog-logo" href="javascript:;">个人博客</a>

      <!-- 导航菜单 -->
      <ul class="nav-menu">
        <li class="nav-menu-item blog-nav-active">
          <a href="javascript:;"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
        </li>
        <li class="nav-menu-item">
          <a href="javascript:;"><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a>
        </li>
        <li class="nav-menu-item">
          <a href="javascript:;"><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a>
        </li>
        <li class="nav-menu-item">
          <a href="javascript:;"><i class="fa fa-hourglass-half fa-fw"></i>&nbsp;点点滴滴</a>
        </li>
        <li class="nav-menu-item">
          <a href="javascript:;"><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a>
        </li>
      </ul>

      <!-- 手机和平板的导航开关 -->
      <a class="blog-navicon" href="javascript:;" @click="openLefNav">
        <i class="fa fa-navicon"></i>
      </a>
    </div>
  </nav>
  <!--移动端侧边导航-->
  <ul :class="['blog-nav-left', animationShow ? 'leftIn' : 'leftOut']" v-show="leftNavShow">
    <li class="">
      <a href="home.html"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
    </li>
    <li class="">
      <a href="article.html"><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a>
    </li>
    <li class="">
      <a href="resource.html"><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a>
    </li>
    <li class="">
      <a href="timeline.html"><i class="fa fa-road fa-fw"></i>&nbsp;点点滴滴</a>
    </li>
    <li class="nav-left-active">
      <a href="about.html"><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a>
    </li>
  </ul>
  <div
    :class="['blog-mask', animationShow ? 'maskIn' : 'maskOut']"
    v-show="leftNavShow"
    @click="openLefNav"
  ></div>
</template>

<script setup lang="ts" name="BlogNav">
  import Absolutely from '/@/assets/images/blog/Absolutely.jpg';

  const leftNavShow = ref<boolean>(false);
  const animationShow = ref<boolean>(false);

  const openLefNav = () => {
    if (leftNavShow.value && animationShow) {
      animationShow.value = false;
      setTimeout(() => {
        leftNavShow.value = false;
      }, 500);
    } else {
      leftNavShow.value = true;
      animationShow.value = true;
    }
  };
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
