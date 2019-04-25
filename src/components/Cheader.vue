<template>
    <div class="cheader">
        <!-- 左图标 -->
        <div class="leftIcon2" @click="toEdit"></div>
        <!-- 中部标题 -->
        <div class="title2"><slot></slot></div>
    </div>
</template>
<style scoped>
.cheader {
  height: 1.466667rem;
  width: 100%;
  text-align: left;
  line-height: 1.466667rem;
  background: #d34530;
  margin: 0px;
  color: #fff;
  font-size: .526667rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
}
.leftIcon2 {
  background-image: url(../assets/comeback.png);
  background-repeat: no-repeat;
  background-size: 0.64rem;
  background-position: center;
  flex: 1;
}

.title2 {
  flex: 5;
}
</style>
<script>
export default {
  methods: {
    toEdit() {
      this.$router.push({ name: "edit" });
    },
  }
};
</script>

