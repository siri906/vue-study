<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${postItem.userImage})` }"
      ></div>
      <span class="profile-name">{{ postItem.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${postItem.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ postItem.likes }} Likes</p>
      <div>
        <strong>{{ postItem.name }}</strong>
        <p>{{ postItem.content }}</p>
      </div>
      <p class="date">{{ postItem.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postItem: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url();
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url($props.postItem.postImage);
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
