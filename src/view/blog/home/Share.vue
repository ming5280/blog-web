<template>
  <div class="blog-share layui-hide">
    <div class="blog-share-body">
      <div style="width: 200px; height: 100%">
        <div class="bdsharebuttonbox">
          <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
          <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
          <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
          <a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Share"></script>

<style lang="scss" scoped>
  /*百度分享*/
  .blog-share {
    box-shadow: 0 0 8px #fff;
    position: fixed;
    right: 80px;
    bottom: 15px;
    background: #393d49;
    z-index: 999;
    margin-bottom: 1px;
    height: 50px;
  }
  .blog-share .blog-share-body {
    width: 100%;
    height: 100%;
  }
  .bdsharebuttonbox {
    height: 100%;
  }
  .bdsharebuttonbox a {
    float: left;
    margin: 9px !important;
    background-position: 0 !important;
  }
  .bdsharebuttonbox .bds_qzone {
    background: url(../images/qzone_32.png) no-repeat;
  }
  .bdsharebuttonbox .bds_tsina {
    background: url(../images/weibo_32.png) no-repeat;
  }
  .bdsharebuttonbox .bds_weixin {
    background: url(../images/wechat_32.png) no-repeat;
  }
  .bdsharebuttonbox .bds_sqq {
    background: url(../images/qq_32.png) no-repeat;
  }
  .shareIn {
    -moz-animation: shareIn 0.5s;
    -o-animation: shareIn 0.5s;
    -webkit-animation: shareIn 0.5s;
    animation: shareIn 0.5s;
  }
  .shareOut {
    -moz-animation: shareOut 0.5s;
    -o-animation: shareOut 0.5s;
    -webkit-animation: shareOut 0.5s;
    animation: shareOut 0.5s;
  } /*百度分享END*/
</style>
