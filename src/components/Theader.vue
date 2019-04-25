<template>
    <header>
        <!-- 左图标 -->
        <div class="leftIcon" @click="toLeftSideBar"></div>
        <!-- 中部标题 -->
        <div class="title">
            <slot>探探</slot>
        </div>
        <!-- 右图标 -->
        <div v-if="showMes" class="rightIcon" @click="toRightSideBar"></div>
        <div v-if="showPen" class="rightIcon1" @click="toChangeEdit"></div>
        <div v-if="showBig" class="rightIcon2" @click="toSearch"></div>
        <div v-if="showHelp" class="rightIcon3" @click="toRightSideBar"></div>
        <div v-if="showMore" class="rightIcon4" @click="toRightSideBar"></div>
    </header>
</template>
<style scoped>
header {
  height: 1.466667rem;
  width: 100%;
  text-align: center;
  line-height: 1.466667rem;
  background: #d34530;
  margin: 0px;
  color: #fff;
  font-size: 0.533333rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
}
.leftIcon {
  background-image: url(../assets/ham.png);
  background-repeat: no-repeat;
  background-size: 0.64rem;
  background-position: center;
  flex: 1;
}

.title {
  flex: 3;
}
.rightIcon,
.rightIcon1,
.rightIcon2,
.rightIcon3,
.rightIcon4 {
  background-image: url(../assets/mes.png);
  background-repeat: no-repeat;
  background-size: 0.64rem;
  background-position: center;
  flex: 1;
}
.rightIcon1 {
  background-image: url(../assets/pen.png);
}
.rightIcon2 {
  background-image: url(../assets/big.png);
}
.rightIcon3 {
  background-image: url(../assets/help.png);
}
.rightIcon4 {
  background-image: url(../assets/more.png);
}
</style>
<script>
export default {
  // 父组件决定子组件，显示什么图标
  props: ["showMes", "showPen", "showBig", "showHelp", "showMore"],

  methods: {
    toLeftSideBar() {
      this.$router.push({ name: "leftSideBar" });
    },
    toRightSideBar() {
      this.$router.push({ name: "rightSideBar" });
    },
    toSearch() {
      this.$router.push({ name: "search" });
    },
    toChangeEdit() {
      this.$router.push({ name: "changeEdit" });
    }
  }
};
</script>

