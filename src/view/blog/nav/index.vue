<template>
  <nav class="blog-nav">
    <div class="blog-container">
      <!-- QQ互联登陆 -->
      <a href="javascript:;" class="blog-user">
        <i class="fa fa-qq"></i>
      </a>
      <a href="javascript:;" class="blog-user layui-hide">
        <img :src="Absolutely" alt="Absolutely" title="Absolutely" />
      </a>
      <!-- 个人博客 -->
      <a class="blog-logo" href="javascript:;">个人博客</a>
      <!-- 导航菜单 -->
      <ul class="layui-nav">
        <li class="layui-nav-item layui-this">
          <a href="home.html"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
        </li>
        <li class="layui-nav-item">
          <a href="article.html"><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a>
        </li>
        <li class="layui-nav-item">
          <a href="resource.html"><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a>
        </li>
        <li class="layui-nav-item">
          <a href="timeline.html"><i class="fa fa-hourglass-half fa-fw"></i>&nbsp;点点滴滴</a>
        </li>
        <li class="layui-nav-item">
          <a href="about.html"><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a>
        </li>
      </ul>
      <!-- 手机和平板的导航开关 -->
      <a class="blog-navicon" href="javascript:;">
        <i class="fa fa-navicon"></i>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts" name="nav">
import Absolutely from '/@/assets/images/blog/Absolutely.jpg';
</script>

<style lang="scss" scoped>
@import '/@/styles/blog/global.scss';
// .blog-nav {
//   width: 100%;
//   height: 64px;
//   position: fixed;
//   top: 0;
//   z-index: 1000;
//   background-color: #393d49;
//   border-bottom: 1px solid #5fb878;
//   .layui-nav {
//     position: absolute;
//     top: 0;
//     left: 15%;
//     width: 85%;
//     background: none;
//     display: none;
//     text-align: center;
//     .layui-nav-item {
//       line-height: 64px;
//       margin: 0 5px;
//       a {
//         padding: 0 15px;
//       }
//     }
//   }
//   .blog-logo {
//     position: absolute;
//     top: 0px;
//     left: 25%;
//     width: 50%;
//     text-align: center;
//     margin: 0 auto;
//     line-height: 64px;
//     font-size: 30px;
//     color: white;
//     font-weight: bold;
//     font-family: KaiTi;
//     display: inline-block;
//     z-index: 10;
//   }
//   .blog-navicon {
//     position: absolute;
//     right: 0;
//     padding: 10px 12px;
//     color: white;
//     border: 1px solid #009688;
//     margin-top: 13px;
//   }
//   .blog-navicon:hover {
//     border: 1px solid #5fb878;
//   }
//   .blog-container {
//     margin: 0 15px;
//     position: relative;
//     .blog-user {
//       line-height: 64px;
//       position: absolute;
//       z-index: 10;
//       img {
//         width: 40px;
//         height: 40px;
//         border-radius: 50px;
//       }
//       img:hover {
//         opacity: 0.5;
//       }
//       .fa-qq {
//         line-height: 64px;
//         font-size: 24px;
//         color: #c2c2c2;
//       }
//       .fa-qq:hover {
//         color: #fff;
//       }
//     }
//     .hide {
//       display: none !important;
//     }
//   }
// }
// @media (min-width: 992px) {
//   .blog-nav .layui-nav {
//     display: block;
//   }

//   .blog-nav .blog-user {
//     right: 0;
//   }

//   .blog-nav .blog-logo {
//     position: absolute;
//     left: 10%;
//     width: auto;
//   }

//   .blog-nav .blog-navicon {
//     display: none;
//   }

//   .blog-nav-left {
//     display: none !important;
//   }
// }

// /* 小屏幕（平板，大于等于 768px） */
// @media (min-width: 768px) {
//   .blog-container {
//     width: 738px;
//     margin: 0 auto;
//   }

//   .blog-main > .blog-main-right > .blog-module {
//     width: 45%;
//     margin-bottom: 15px;
//   }

//   .blog-main > .blog-main-right > .blog-module:nth-child(odd) {
//     float: left;
//     clear: left;
//   }

//   .blog-main > .blog-main-right > .blog-module:nth-child(odd).blog-module:last-child {
//     width: auto;
//     float: none;
//     clear: both;
//   }

//   .blog-main > .blog-main-right > .blog-module:nth-child(even) {
//     float: right;
//     clear: right;
//   }
// }

// /* 中等屏幕（桌面显示器，大于等于 992px） */
// @media (min-width: 992px) {
//   .blog-container {
//     width: 962px;
//   }

//   .blog-main > .blog-main-left {
//     width: 66%;
//   }

//   .blog-main > .blog-main-right {
//     width: 32%;
//   }

//   .blog-main > .blog-main-right > .blog-module {
//     width: auto;
//     float: none !important;
//   }
// }

// /* 大屏幕（大桌面显示器，大于等于 1200px） */
// @media (min-width: 1200px) {
//   .blog-container {
//     width: 1170px;
//   }
// }
</style>
