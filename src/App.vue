<script setup>
import { reactive } from "vue";

// const state = reactive({
//   신고수: 0,
//   menu: ["Home", "Shop", "About"],
//   price1: 60,
//   스타일: "color:red",
//   products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
// });

// const increase = () => {
//   state.신고수 += 1;
// };
</script>

<template>
  <div class="menu">
    <a v-for="(menuItem, index) in menu" :key="index">{{ menuItem }}</a>
  </div>

  <div class="black-bg" v-if="modalShow === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
    </div>
  </div>

  <div v-for="(item, index) in products" :key="index">{{ item }}</div>

  <div v-for="(item, index) in products" :key="index">
    <h4 :style="스타일">{{ item }}</h4>
    <p>{{ price1 }} 만원</p>
    <button @click="() => increase(index)">신고</button>
    <p>신고수 : {{ 신고수[index] }}</p>
  </div>

  <!-- <div>
    <h4 :style="스타일">{{ products[1] }}</h4>
    <p>XX 만원</p>
  </div>
  <div>
    <h4 :style="스타일">{{ products[2] }}</h4>
    <p>XX 만원</p>
  </div> -->
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      modalShow: false,
      신고수: [0, 0, 0],
      menu: ["Home", "Shop", "About"],
      price1: 60,
      스타일: "color:red",
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(index) {
      this.신고수[index] += 1;
    },
  },
  components: {},
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
