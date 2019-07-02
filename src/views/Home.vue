<template>
  <div>
    <div class="container">
      <Banner :swiperSlides="slider" />
      <ul class="homelist">
        <li v-for="item in homelist" :key="item.id">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.homelist{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: fixed;
  bottom: 58px;
  overflow-y:auto;
}
.homelist Li{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homelist in img{
  width: 90%;
  border-radius: 5px;
}
</style>

<script>
import Banner from "../components/Banner";
import { getHomeAll } from "../api";
export default {
  name: "home",
  async created() {
    this.getAll()
  },
  data() {
    return {
      slider: [],
      homelist: []
    };
  },
  components: {
    Banner
  },
  methods: {
    async getAll(){
      // 多个请求完成之后把数据集合到一起
      let [{ banner },{ list }] = await getHomeAll();
      this.slider = banner;
      this.homelist = list;
    }
  }
};
</script>