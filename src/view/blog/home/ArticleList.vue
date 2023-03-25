<template>
  <div class="article-list">
    <el-skeleton :loading="loading" animated :count="5">
      <template #template>
        <div style="background-color: #fff; padding: 15px; margin-bottom: 10px; height: 125px">
          <div style="display: flex">
            <el-skeleton-item variant="image" style="width: 184px; height: 97px; flex-shrink: 0" />
            <div style="width: 100%; margin-left: 15px">
              <el-skeleton-item variant="h1" style="width: 80%; margin-bottom: 5px" />
              <el-skeleton-item variant="text" style="margin: 2px 0" />
              <el-skeleton-item variant="text" style="margin: 2px 0" />
              <el-skeleton-item variant="text" style="margin: 2px 0" />
            </div>
          </div>

          <div class="skeleton-text">
            <el-skeleton-item variant="text" style="width: 100px; margin-right: 10px" />
            <el-skeleton-item variant="text" style="width: 100px; margin-right: 10px" />
            <el-skeleton-item variant="text" style="width: 100px; margin-right: 10px" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="article shadow" v-for="(item, index) in articleList" :key="index">
          <div class="article-left">
            <img :src="getAssetsFile(item.picturePath)" :alt="item.title" />
          </div>
          <div class="article-right">
            <div class="article-title">
              <a href="detail.html">{{ item.title }}</a>
            </div>
            <div class="article-abstract">{{ item.describe }}</div>
          </div>
          <div class="clear"></div>
          <div class="article-footer">
            <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{ item.releaseTime }}</span>
            <span class="article-author"
              ><i class="fa fa-user"></i>&nbsp;&nbsp;{{ item.author }}</span
            >
            <span
              ><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">{{ item.classification }}</a></span
            >
            <span class="article-viewinfo"
              ><i class="fa fa-eye"></i>&nbsp;{{ item.numOfViews }}</span
            >
            <span class="article-viewinfo"
              ><i class="fa fa-commenting"></i>&nbsp;{{ item.numOfComments }}</span
            >
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts" name="ArticleList">
  import { getHomeArticleLsit } from '/@/api/blog/home';
  import { getAssetsFile } from '/@/utils/pubUse';

  const loading = ref(false);
  const articleList = ref<any[]>([]);
  const articleTotal = ref(0);
  const getArticleData = async () => {
    loading.value = true;
    const res = await getHomeArticleLsit({ id: '1', page: 1, pageSize: 10 });
    articleList.value = res.list;
    articleTotal.value = res.total;
    loading.value = false;
  };

  getArticleData();
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
    // width: 100%;
    // height: auto;
    width: 184px;
    height: 97px;
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
    width: 100%;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 3; //行数
    line-clamp: 2;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
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

  .skeleton-text {
    display: flex;
    justify-items: space-between;
    margin-top: 10px;
    height: 16px;
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
