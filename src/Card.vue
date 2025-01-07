<template>
  <div>
    <img :src="oneroom.image" alt="" />
    <!-- <h4>{{ oneroom.title }}</h4> -->
    <h4
      @click="
        // $emit('openModal', oneroom.id)
        // $emit('modalId', oneroom.id);
        // modalShow = true;
        // clickNum = oneroom.id;
        () => openModal()
      "
    >
      {{ oneroom.title }}
    </h4>

    <p>{{ oneroom.price }}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    oneroom: Object,
  },
  methods: {
    openModal() {
      this.$emit("openModal", this.oneroom.id);
    },
  },

  // console.log 작성 방법
  // mounted() {
  //   console.log(this.oneroom, "props");
  // },
};
</script>

<style></style>
