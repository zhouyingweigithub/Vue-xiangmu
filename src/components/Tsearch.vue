<template>
  <div class="header">
        <!-- 左图标 -->
        <div class="leftIcon" @click="toMessage"></div>
        <!-- 中部标题 -->
        <input v-model="searchInput" ref="searchInput" type="text" id="searchInput" placeholder="搜索……">
        <!-- 右图标 -->
        <div class="rightIcon" @click="clear" v-show="searchInput"></div>
        <div class="empty" v-show="!searchInput"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制搜索框的状态
      // bool: false,
      // 搜索框的内容
      searchInput: ""
    };
  },
  methods:{
  clear() {
    // 清空搜索框
    this.searchInput = "";
  },
  toMessage(){
      this.$router.push({ name: "message" });
  }
  },
  mounted() {
    // 挂载完之后进行输入框的聚焦
    this.$refs.searchInput.focus();
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 1.466667rem;
  width: 100%;
  line-height: 1.466667rem;
  background: #d34530;
  margin: 0px;
  color: #fff;
  font-size: 0.533333rem;
  display: flex;
}
.leftIcon {
  background-image: url(../assets/comeback.png);
  background-repeat: no-repeat;
  background-size: 0.64rem;
  background-position: center;
  flex: 1;
}
input {
  flex: 2;
  background: #d34530;
  border: none;
  color: #fff;
  padding: .106667rem 0.266667rem;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #dcd1cc;
  /* placeholder字体大小  */
  font-size: 0.4rem;

}
.rightIcon {
  height: 1.466667rem ;
  background-image: url(../assets/cha.png);
  background-repeat: no-repeat;
  background-size: 0.64rem;
  background-position: center;
  flex: 1;
}
.empty{
    flex: 1;
}
</style>