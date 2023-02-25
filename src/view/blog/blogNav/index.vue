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
      <ul class="blog-nav">
        <li class="blog-nav-item blog-nav-active">
          <a href="javascript:;"><i class="fa fa-home fa-fw"></i>&nbsp;网站首页</a>
        </li>
        <li class="blog-nav-item">
          <a href="javascript:;"><i class="fa fa-file-text fa-fw"></i>&nbsp;文章专栏</a>
        </li>
        <li class="blog-nav-item">
          <a href="javascript:;"><i class="fa fa-tags fa-fw"></i>&nbsp;资源分享</a>
        </li>
        <li class="blog-nav-item">
          <a href="javascript:;"><i class="fa fa-hourglass-half fa-fw"></i>&nbsp;点点滴滴</a>
        </li>
        <li class="blog-nav-item">
          <a href="javascript:;"><i class="fa fa-info fa-fw"></i>&nbsp;关于本站</a>
        </li>
        <span class="blog-nav-bar"></span>
      </ul>

      <!-- 手机和平板的导航开关 -->
      <a class="blog-navicon" href="javascript:;">
        <i class="fa fa-navicon"></i>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts" name="BlogNav">
  import Absolutely from '/@/assets/images/blog/Absolutely.jpg';
</script>

<style lang="scss" scoped>
  .blog-nav {
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: #393d49;
    border-bottom: 1px solid #5fb878;

    .blog-logo {
      position: absolute;
      top: 0px;
      left: 25%;
      width: 50%;
      text-align: center;
      margin: 0 auto;
      line-height: 64px;
      font-size: 30px;
      color: white;
      font-weight: bold;
      font-family: KaiTi;
      display: inline-block;
      z-index: 10;
    }
    .blog-navicon {
      position: absolute;
      right: 0;
      padding: 10px 12px;
      color: white;
      border: 1px solid #009688;
      margin-top: 13px;
      font-size: 14px;
      line-height: 16px;
    }
    .blog-navicon:hover {
      border: 1px solid #5fb878;
    }
    .blog-user {
      line-height: 64px;
      position: absolute;
      z-index: 10;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
      }
      img:hover {
        opacity: 0.5;
      }
      .fa-qq {
        line-height: 64px;
        font-size: 24px;
        color: #c2c2c2;
      }
      .fa-qq:hover {
        color: #fff;
      }
    }
    .hide {
      display: none !important;
    }
    .blog-nav {
      position: absolute;
      top: 0;
      left: 15%;
      width: 85%;
      background: none;
      display: none;
      text-align: center;
      font-size: 14px;
      padding: 0 20px;
      color: #c2c2c2;
      border-radius: 2px;
      box-sizing: border-box !important;
      .blog-nav-item {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 64px;
        margin: 0 5px;
        &:after {
          content: '';
          display: inline-block;
          position: absolute;
          width: 0;
          height: 5px;
          opacity: 0;
          background-color: #5fb878;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.2s;
          -webkit-transition: all 0.2s;
        }
        a {
          display: block;
          padding: 0 15px;
          color: #c2c2c2;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;
          &:hover {
            color: #ffffff;
          }
        }
      }
      .blog-nav-item:hover {
        &:after {
          opacity: 1;
          width: 100%;
        }
      }
      .blog-nav-active {
        a {
          color: #fff;
        }
        &:after {
          opacity: 1;
          width: 100%;
        }
      }
    }
  }

  .blog-container {
    margin: 0 15px;
    position: relative;
  }

  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .blog-container {
      width: 738px;
      margin: 0 auto;
    }

    // .blog-main > .blog-main-right > .blog-module {
    //   width: 45%;
    //   margin-bottom: 15px;
    // }

    // .blog-main > .blog-main-right > .blog-module:nth-child(odd) {
    //   float: left;
    //   clear: left;
    // }

    // .blog-main > .blog-main-right > .blog-module:nth-child(odd).blog-module:last-child {
    //   width: auto;
    //   float: none;
    //   clear: both;
    // }

    // .blog-main > .blog-main-right > .blog-module:nth-child(even) {
    //   float: right;
    //   clear: right;
    // }
  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: 992px) {
    .blog-container {
      width: 962px;
    }

    // .blog-main > .blog-main-left {
    //   width: 66%;
    // }

    // .blog-main > .blog-main-right {
    //   width: 32%;
    // }

    // .blog-main > .blog-main-right > .blog-module {
    //   width: auto;
    //   float: none !important;
    // }
  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: 1200px) {
    .blog-container {
      width: 1170px;
    }
  }
  /*全局样式END*/

  /*面包屑导航*/
  .sitemap {
    background: #fff;
    margin-top: 79px;
    padding: 5px 15px;
    line-height: normal;
    border-radius: 0 !important;
  }

  .sitemap a {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    .sitemap {
      padding: 6px 15px;
    }

    .sitemap a {
      font-size: 13px;
    }
  }

  @media (min-width: 992px) {
    .sitemap {
      padding: 8px 15px;
    }

    .sitemap a {
      font-size: 14px;
    }
  }
  /*面包屑导航END*/

  /*导航栏隐藏*/
  @media (min-width: 992px) {
    .blog-nav .blog-nav {
      display: block;
    }

    .blog-nav .blog-user {
      right: 0;
    }

    .blog-nav .blog-logo {
      position: absolute;
      left: 10%;
      width: auto;
    }

    .blog-nav .blog-navicon {
      display: none;
    }

    .blog-nav-left {
      display: none !important;
    }
  }
</style>
