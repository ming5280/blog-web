<template>
  <div class="blogerinfo shadow">
    <div class="blogerinfo-figure">
      <img :src="Absolutely" alt="Absolutely" />
    </div>
    <p class="blogerinfo-nickname">Absolutely</p>
    <p class="blogerinfo-introduce">一枚90后程序员，.NET开发工程师</p>
    <p class="blogerinfo-location"><i class="fa fa-location-arrow"></i>&nbsp;上海 - 嘉定</p>
    <hr class="blog-line" />
    <div class="blogerinfo-contact">
      <a target="_blank" title="QQ交流" href="javascript:layer.msg('启动QQ会话窗口')"
        ><i class="fa fa-qq fa-2x"></i
      ></a>
      <a target="_blank" title="给我写信" href="javascript:layer.msg('启动邮我窗口')"
        ><i class="fa fa-envelope fa-2x"></i
      ></a>
      <a target="_blank" title="新浪微博" href="javascript:layer.msg('转到你的微博主页')"
        ><i class="fa fa-weibo fa-2x"></i
      ></a>
      <a target="_blank" title="码云" href="javascript:layer.msg('转到你的github主页')"
        ><i class="fa fa-git fa-2x"></i
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts" name="BlogerInfo">
  import Absolutely from '/@/assets/images/blog/Absolutely.jpg';
</script>

<style lang="scss" scoped>
  /*博主信息*/
  .blogerinfo {
    text-align: center;
    padding: 0 15px;
    background: #fff;
    margin-bottom: 15px;
    .blog-line {
      height: 1px;
      margin: 10px 0;
      border: 0;
      background-color: #e2e2e2;
      clear: both;
    }
  }

  .blogerinfo-figure {
    display: inline-block;
    margin: 20px auto;
  }

  .blogerinfo-figure img {
    border-radius: 50px;
  }

  .blogerinfo-nickname {
    font-size: 32px;
    font-weight: bold;
    margin: 0 0 15px 0;
  }

  .blogerinfo-introduce {
    margin: 15px auto;
    font-size: 18px;
    width: 90%;
  }

  .blogerinfo-location {
    color: #808080;
    margin: 15px;
  }

  .blogerinfo-contact {
    padding: 15px;
    padding-top: 5px;
  }

  .blogerinfo-contact > a {
    padding: 0 10px;
  }
  /*博主信息END*/
</style>
