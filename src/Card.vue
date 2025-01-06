<template>
  <div>
    <img :src="oneroom.image" alt="" />
    <!-- <h4
      @click="
        modalShow = true;
        clickNum = oneroom.id;
      "
    >
      {{ oneroom.title }}
    </h4> -->

    <p>{{ oneroom.price }}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    oneroom: Object,
  },
};
</script>

<style></style>
