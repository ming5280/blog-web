<template>
  <!-- 导航 -->
  <BlogNav />
  <div class="blog-body">
    <!-- canvas -->
    <CanvasBanner />
    <!-- 主体内容 -->
    <div class="blog-container">
      <div style="width: 100%; height: 3px"></div>
      <div class="blog-main">
        <!-- 网站公告提示 -->
        <HomeTips />
        <!--左边文章列表-->
        <div class="blog-main-left">
          <ArticleList />
        </div>
        <!--右边小栏目-->
        <div class="blog-main-right">
          <!-- 个人信息 -->
          <BlogerInfo />
          <div></div>
          <!-- 热文排行 -->
          <ArticleRank />
          <!-- 最近分享 -->
          <RecentlyShare />
          <!-- 一路走来 -->
          <AlongWay />
          <!-- 后台记录 -->
          <AdminRecord />
          <!-- 友情链接 -->
          <FriendlyLink />
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
  <!-- 底部 -->
  <BlogFooter />
  <!--分享窗体-->
  <!-- <Share /> -->
  <el-backtop
    :right="20"
    :bottom="20"
    style="width: 50px; height: 50px; background-color: transparent"
  >
    <div class="blog-backtop">
      <el-icon :size="30"><Top /></el-icon>
    </div>
  </el-backtop>
</template>

<script setup lang="ts" name="home">
  import BlogNav from '/@/view/blog/blogNav/index.vue';
  import CanvasBanner from '/@/view/blog/home/CanvasBanner.vue';
  import HomeTips from '/@/view/blog/home/HomeTips.vue';
  import ArticleList from '/@/view/blog/home/ArticleList.vue';
  import BlogerInfo from './asideModules/BlogerInfo.vue';
  import ArticleRank from './asideModules/ArticleRank.vue';
  import RecentlyShare from './asideModules/RecentlyShare.vue';
  import AdminRecord from './asideModules/AdminRecord.vue';
  import AlongWay from './asideModules/AlongWay.vue';
  import FriendlyLink from './asideModules/FriendlyLink.vue';
  import BlogFooter from '/@/view/blog/blogFooter/index.vue';
  // import Share from '/@/view/blog/home/Share.vue';
  import { Top } from '@element-plus/icons-vue';
</script>

<style lang="scss" src="/@/styles/blog/global-blog.scss"></style>
<style lang="scss" scoped></style>
