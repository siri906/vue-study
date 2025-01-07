<template>
  <header>
    <ul>
      <li>
        <router-link to="/">홈</router-link>
      </li>
      <li>
        <router-link to="/list">리스트</router-link>
      </li>
      <li>
        <router-link to="/detail">상세</router-link>
      </li>
    </ul>
  </header>
  <router-view :blogData="blogData" />
  <!-- <router-view
    v-for="(blogItem, idx) in blogData"
    :key="idx"
    :blogItem="blogItem"
   /> -->
  <!-- <BlogList
      v-for="(blogItem, idx) in blogData"
      :key="idx"
      :blogItem="blogItem"
    /> -->
</template>
<script>
import BlogList from "./BlogList.vue";
import BlogDetail from "./BlogDetail.vue";
import { blogData } from "./assets/blogData";
export default {
  name: "BlogApp",
  data() {
    return {
      blogData,
    };
  },
  components: {
    BlogList: BlogList,
  },
};
</script>
<style></style>
