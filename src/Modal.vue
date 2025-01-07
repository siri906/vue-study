<template>
  <div class="black-bg" v-if="modalShow === true">
    <div class="white-bg">
      <h4>{{ renameOneroom[clickNum].title }}</h4>
      <img :src="renameOneroom[clickNum].image" alt="" />
      <p>{{ renameOneroom[clickNum].content }}</p>

      <p>
        <!-- <input @input="month = $event.target.value" /> -->
        <input v-model="month" />
      </p>
      <p>{{ month }}개월 선택 : {{ renameOneroom[clickNum].price * month }}</p>
      <button @click="() => closeModal()">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalDetail",
  // props 등록(readOnly)
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(monthData) {
      console.log(monthData, "monthData");
      if (isNaN(monthData) === true) {
        alert("글자");
        this.month = 1;
      }
    },
  },
  props: {
    //자료형 타입
    renameOneroom: Array,
    clickNum: Number,
    modalShow: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style></style>
