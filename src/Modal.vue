<template>
  <div class="black-bg" v-if="modalShow === true">
    <div class="white-bg">
      <h4>{{ renameOneroom[clickNum].title }}</h4>
      <img :src="renameOneroom[clickNum].image" alt="" />
      <p>{{ renameOneroom[clickNum].content }}</p>
      <p>{{ renameOneroom[clickNum].price }}</p>
      <!-- <button @click="modalShow = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "modalDetail",
  // props 등록(readOnly)
  props: {
    //자료형 타입
    renameOneroom: Array,
    clickNum: Number,
    modalShow: Boolean,
  },
};
</script>

<style></style>
