<template>
  <div v-for="(blogItem, idx) in blogData" :key="idx">
    <h5 @click="$router.push(`/detail/${blogItem.number}`)">
      {{ blogItem.title }}
    </h5>
    <p>{{ blogItem.date }}</p>
  </div>
</template>
<script>
export default {
  name: "BlogList",
  props: {
    blogData: Array,
  },
};
</script>
<style></style>
