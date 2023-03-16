<template>
  <div class="article-list">
    <el-skeleton :loading="loading" animated :count="3">
      <template #template>
        <div style="background-color: #fff; padding: 15px">
          <el-skeleton-item variant="image" style="width: 184px; height: 97px" />
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
          <!-- <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div> -->
        </div>
      </template>
      <template #default>
        <div class="article shadow" v-for="(item, index) in articleList" :key="index">
          <div class="article-left">
            <img :src="ArticleImg" :alt="item.title" />
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
  import ArticleImg from '/@/assets/images/blog/cover/201703181909057125.jpg';
  import { getHomeArticleLsit } from '/@/api/blog/home';

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
