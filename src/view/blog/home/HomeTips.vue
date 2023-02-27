<template>
  <div class="home-tips shadow">
    <i style="float: left; line-height: 17px" class="fa fa-volume-up"></i>
    <div class="home-tips-container">
      <span style="color: #009688"
        >偷偷告诉大家，本博客的后台管理也正在制作，为大家准备了游客专用账号！</span
      >
      <span style="color: red">网站新增留言回复啦！使用QQ登陆即可回复，人人都可以回复！</span>
      <span style="color: red"
        >如果你觉得网站做得还不错，来Fly社区点个赞吧！<a
          href="http://fly.layui.com/case/2017/"
          target="_blank"
          style="color: #01aaed"
          >点我前往</a
        ></span
      >
      <span style="color: #009688"
        >个人博客 &nbsp;——
        &nbsp;一个.NET程序员的个人博客，新版网站采用Layui为前端框架，目前正在建设中！</span
      >
    </div>
  </div>
</template>

<script setup lang="ts" name="HomeTips"></script>

<style lang="scss" scoped>
  .home-tips {
    padding: 10px 10px;
    background: #fff;
    font-size: 13px;
    margin-bottom: 15px;
    & > i {
      color: #009688;
      font-size: 15px;
    }
    .home-tips-container {
      margin-left: 20px;
      height: 17px;
      overflow: hidden;
      span {
        display: block;
      }
    }
  }
</style>
