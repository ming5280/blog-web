<script lang="tsx">
  import { Transition } from 'vue';
  import { getHomeTips } from '/@/api/blog/home';

  export default defineComponent({
    name: 'HomeTips',
    setup() {
      let timer = 0;
      const currentIndex = ref<number>(0);
      const tipList = ref<any[]>([]);

      const getTipData = async () => {
        const { list } = await getHomeTips({ id: '1' });
        tipList.value = list;
        playAnnouncement(3000);
      };

      const playAnnouncement = (interval: number) => {
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

      // domPropsInnerHTML
      const renderTipItem = () => {
        return tipList.value.map((item, index) => {
          return (
            <Transition name="fade">
              <span
                style={{
                  color: item.color,
                }}
                v-show={currentIndex.value === index}
                v-html={item.name}
              ></span>
            </Transition>
          );
        });
      };

      return () => (
        <div class="home-tips shadow">
          <i style="float: left; line-height: 17px" class="fa fa-volume-up"></i>
          <div class="home-tips-container">{renderTipItem()}</div>
        </div>
      );
    },
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
