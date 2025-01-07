<template>
  <div>
    <div>
      <button @click="changeTab(0)">버튼0</button>
      <button @click="changeTab(1)">버튼1</button>
      <button @click="changeTab(2)">버튼2</button>
    </div>
    <div>
      <div v-if="step === 0">
        <Post v-for="(postItem, idx) in instarData" :key="idx" :postItem="postItem" />
        <button @click="more">더보기</button>
      </div>

      <!-- 필터선택페이지 -->
      <div v-if="step === 1">
        <div class="upload-image" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
        <div class="filters">
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
          <div class="filter-1"></div>
        </div>
      </div>

      <!-- 글작성페이지 -->
      <div v-if="step === 2">
        <div class="upload-image" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
        <div class="write">
          <textarea @change="writeContent" class="write-box">write!</textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import axios from "axios";

export default {
  name: "Container",
  data() {
    return { count: 0 };
  },
  components: {
    Post: Post,
  },
  props: {
    instarData: Array,
    step: Number,
    uploadImage: String,
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`).then((result) => {
        this.instarData = [...this.instarData, ...result.data];
        this.count += 1;
      });
    },
    changeTab(num) {
      this.$emit("changeTab", num);
    },
    writeContent(event) {
      this.$emit("writeContent", event.target.value);
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
