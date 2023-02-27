<template>
  <div class="article-list">
    <div class="article shadow" v-for="item in 8" :key="item">
      <div class="article-left">
        <img :src="ArticleImg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
      </div>
      <div class="article-right">
        <div class="article-title">
          <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
        </div>
        <div class="article-abstract">
          该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
        </div>
      </div>
      <div class="clear"></div>
      <div class="article-footer">
        <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
        <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
        <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
        <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
        <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ArticleList">
  import ArticleImg from '/@/assets/images/blog/cover/201703181909057125.jpg';
</script>

<style lang="scss" scoped>
  /*文章列表（网站首页和文章专栏共用）*/
  .article-list {
  }
  .article {
    padding: 15px;
    margin-bottom: 10px;
    background: #fff;
    border-left: 5px solid #fff;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .article:hover {
    border-left: 5px solid #009688;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .article > .article-left {
    width: 25%;
    float: left;
  }

  .article > .article-left > img {
    width: 100%;
    height: auto;
  }

  .article > .article-right {
    width: 73%;
    float: right;
    padding-left: 2%;
  }

  .article > .article-right > .article-title a {
    font-size: 14px;
  }

  .article > .article-right > .article-title a:hover {
    color: #009688;
  }

  .article > .article-right > .article-abstract {
    display: none;
  }

  .article > .article-footer {
    margin-top: 5px;
    font-size: 11px;
    padding: 2px;
    color: #a6a6a6;
  }

  .article > .article-footer > span {
    padding-right: 3%;
  }

  .article > .article-footer a {
    color: #009688;
  }

  .article > .article-footer .article-viewinfo,
  .article > .article-footer .article-author {
    display: none;
  }

  .icon-stick {
    border: 1px solid #ff5722;
    color: #ff5722;
    padding: 0 2px 0 0;
    font-family: SimHei;
    display: inline-block;
    margin-right: 3px;
    position: relative;
    top: -1px;
    font-size: 13px;
  }

  @media (min-width: 768px) {
    .article > .article-right > .article-title a {
      font-size: 17px;
    }

    .article > .article-right > .article-abstract {
      font-size: 14px;
      display: block;
      margin-top: 10px;
      text-indent: 2em;
    }

    .article > .article-footer {
      margin-top: 10px;
      font-size: 13px;
    }

    .article > .article-footer .article-viewinfo {
      display: inline;
      float: right;
    }

    .article > .article-footer .article-author {
      display: inline;
    }

    .icon-stick {
      font-size: 14px;
    }
  }

  @media (min-width: 992px) {
    .article > .article-right > .article-title a {
      font-size: 18px;
    }

    .icon-stick {
      font-size: 15px;
    }
  }
  /*文章列表END*/
</style>
