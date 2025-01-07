<template>
  <p>params : {{ $route.params.id }}</p>

  <div>
    <h4>상세 페이지</h4>
    <p>{{ blogData[$route.params.id].title }}</p>
    <p>{{ blogData[$route.params.id].content }}</p>
  </div>
</template>

<script>
import { blogData } from "./assets/blogData";

export default {
  name: "BlogDetail",
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
