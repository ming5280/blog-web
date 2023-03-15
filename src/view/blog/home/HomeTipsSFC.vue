<template>
  <div class="home-tips shadow">
    <i style="float: left; line-height: 17px" class="fa fa-volume-up"></i>
    <div class="home-tips-container">
      <div v-for="(item, index) in tipList" :key="index">
        <transition name="fade">
          <span
            :style="{ color: item.color }"
            v-html="item.name"
            v-show="currentIndex === index"
          ></span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="HomeTips">
  import { getHomeTips } from '/@/api/blog/home';

  let timer = 0;
  const currentIndex = ref<number>(0);
  const tipList = ref<any[]>([]);

  const getTipData = async () => {
    const { list } = await getHomeTips({ id: '1' });
    tipList.value = list;
    playAnnouncement(3000);
  };

  const playAnnouncement = (interval) => {
    timer = window.setInterval(() => {
      currentIndex.value++;
      if (currentIndex.value >= tipList.value.length) {
        currentIndex.value = 0;
      }
    }, interval);
  };

  getTipData();

  onBeforeUnmount(() => {
    clearInterval(timer);
    timer = 0;
  });
</script>

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
