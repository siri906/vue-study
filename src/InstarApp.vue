<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step !== 2" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.svg" class="logo" />
  </div>

  <Container :instarData="instarData" @publish="publish" :step="step" :uploadImage="uploadImage" @writeContent="writeContent = $event" @changeTab="step = $event" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" accept="image/*" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./Container.vue";

import { instarData } from "./assets/instarData";
export default {
  name: "InstarApp",
  components: {
    Container: Container,
  },
  data() {
    return {
      uploadImage: "",
      step: 0,
      instarData,
      writeContent: "",
    };
  },
  methods: {
    publish() {
      const myPost = {
        name: "등록",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writeContent,
        filter: "perpetua",
      };
      this.instarData = [myPost, ...this.instarData];
      this.step = 0;
    },
    upload(event) {
      const file = event.target.files;
      console.log(file[0], "file");

      // 이미지 보여주는 방법 2가지
      // FileReader() => 파일 글자로 변환함
      //URL.createObjectURL()
      // 이미지의 가상 URL 을 생성해줌
      // blob 이란? binary데이터를 다룰때 blob이라는 object 에 담아둠
      const url = URL.createObjectURL(file[0]);
      this.uploadImage = url;
      this.step++;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
